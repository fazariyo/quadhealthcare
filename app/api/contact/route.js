export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot — silently accept and drop bot submissions
  if (body.website || body.botcheck) return Response.json({ ok: true });

  const firstName = String(body.firstName || '').trim();
  const lastName = String(body.lastName || '').trim();
  const email = String(body.email || '').trim();
  const phone = String(body.phone || '').trim();
  const practice = String(body.practice || '').trim();
  const specialty = String(body.specialty || '').trim();
  const service = String(body.service || '').trim();
  const message = String(body.message || '').trim();
  const consent = Boolean(body.consent);

  if (!firstName || !lastName || !email || !phone || !service) {
    return Response.json({ ok: false, error: 'Please fill in all required fields.' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: 'Please provide a valid email address.' }, { status: 400 });
  }
  if (!consent) {
    return Response.json({ ok: false, error: 'Consent is required.' }, { status: 400 });
  }
  if (message.length > 5000) {
    return Response.json({ ok: false, error: 'Message is too long.' }, { status: 400 });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error('WEB3FORMS_ACCESS_KEY is not set. Add it to .env.local.');
    return Response.json(
      { ok: false, error: 'Email is not configured on the server. Please contact us directly.' },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Consultation: ${firstName} ${lastName} — ${service}`,
        from_name: 'Quad Healthcare Website',
        replyto: email,

        // Fields that appear in the notification email
        name: `${firstName} ${lastName}`,
        email,
        phone,
        practice: practice || '—',
        specialty: specialty || '—',
        service,
        message: message || '—',
        submitted_at: new Date().toISOString(),
      }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.success) {
      console.error('Web3Forms rejected submission:', data);
      return Response.json(
        { ok: false, error: data.message || 'Could not send your message. Please try again.' },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Contact submission error:', err);
    return Response.json(
      { ok: false, error: 'Could not reach the mail service. Please try again shortly.' },
      { status: 502 }
    );
  }
}
