'use client';

import Link from 'next/link';
import { useState } from 'react';

const empty = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  practice: '',
  specialty: '',
  service: '',
  message: '',
  consent: false,
  botcheck: '', // honeypot — Web3Forms-standard field name
};

export default function ConsultationForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ state: 'idle', msg: '' });

  const set = (k) => (e) =>
    setForm((f) => ({
      ...f,
      [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.consent) {
      setStatus({ state: 'error', msg: 'Please check the consent box to proceed.' });
      return;
    }
    setStatus({ state: 'loading', msg: '' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Submission failed. Please try again.');
      }
      setStatus({
        state: 'ok',
        msg: 'Thank you! A specialist will reach out within one business day.',
      });
      setForm(empty);
    } catch (err) {
      setStatus({
        state: 'error',
        msg:
          err.message ||
          'Could not send your message. Please try again, or email info@quadhealthcaresolutions.com directly.',
      });
    }
  };

  const loading = status.state === 'loading';

  if (status.state === 'ok') {
    return (
      <div className="cform form-ok">
        <div className="form-ok-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#12C9A0" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="form-ok-title">Message Sent</h3>
        <p className="form-ok-text">{status.msg}</p>
        <button
          type="button"
          className="bghost"
          style={{ marginTop: 22 }}
          onClick={() => setStatus({ state: 'idle', msg: '' })}
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form className="cform" onSubmit={submit} noValidate>
      {/* Honeypot — hidden from humans, auto-filled by bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        checked={!!form.botcheck}
        onChange={set('botcheck')}
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }}
      />

      <div className="frow">
        <div className="fg">
          <label>First Name *</label>
          <input type="text" placeholder="John" required value={form.firstName} onChange={set('firstName')} />
        </div>
        <div className="fg">
          <label>Last Name *</label>
          <input type="text" placeholder="Smith" required value={form.lastName} onChange={set('lastName')} />
        </div>
      </div>
      <div className="frow">
        <div className="fg">
          <label>Email Address *</label>
          <input type="email" placeholder="doctor@practice.com" required value={form.email} onChange={set('email')} />
        </div>
        <div className="fg">
          <label>Phone Number *</label>
          <input type="tel" placeholder="(555) 000-0000" required value={form.phone} onChange={set('phone')} />
        </div>
      </div>
      <div className="frow">
        <div className="fg">
          <label>Practice Name</label>
          <input type="text" placeholder="Smith Family Medicine" value={form.practice} onChange={set('practice')} />
        </div>
        <div className="fg">
          <label>Specialty</label>
          <input type="text" placeholder="e.g. Family Medicine" value={form.specialty} onChange={set('specialty')} />
        </div>
      </div>
      <div className="fg">
        <label>Service Needed *</label>
        <select required value={form.service} onChange={set('service')}>
          <option value="" disabled>
            Select a service...
          </option>
          <option>Provider Credentialing &amp; Enrollment</option>
          <option>CAQH Setup &amp; Maintenance</option>
          <option>Re-Credentialing</option>
          <option>Contract Negotiation</option>
          <option>NPI Registration &amp; PECOS</option>
          <option>Medical Billing Services</option>
          <option>Credentialing + Billing Bundle</option>
          <option>Other Inquiry</option>
        </select>
      </div>
      <div className="fg">
        <label>Tell Us More</label>
        <textarea
          placeholder="Current payer situation, number of providers, timeline..."
          value={form.message}
          onChange={set('message')}
        />
      </div>

      <div className="fg-checkbox">
        <label className="cb-label">
          <input type="checkbox" required checked={form.consent} onChange={set('consent')} />
          <span className="cb-text">
            By checking this box, you <strong>opt-in</strong> to receive marketing and promotional text messages from Quad Healthcare Solutions. Consent is not a condition of purchase. Message and data rates may apply. Message frequency varies. You can <strong>opt-out</strong> at any time by replying STOP. Reply HELP for help. See our{' '}
            <Link href="/privacy-policy">Privacy Policy</Link> |{' '}
            <Link href="/terms-conditions">Terms &amp; Conditions</Link>.
          </span>
        </label>
      </div>

      {status.state === 'error' && (
        <div className="form-alert form-alert-error" role="alert">
          {status.msg}
        </div>
      )}

      <button
        type="submit"
        className="bteal"
        style={{ width: '100%', justifyContent: 'center' }}
        disabled={loading}
      >
        {loading ? 'Sending…' : 'Submit & Request Free Consultation →'}
      </button>
    </form>
  );
}
