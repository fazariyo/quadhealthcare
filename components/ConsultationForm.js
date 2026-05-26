'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const FORMSPREE_FORM_ID = 'mredogng';

export default function ConsultationForm() {
  const [state, handleSubmit, reset] = useForm(FORMSPREE_FORM_ID);
  const [smsConsent, setSmsConsent] = useState(false);
  const [service, setService] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [consentError, setConsentError] = useState('');

  const onSubmit = (e) => {
    if (!smsConsent) {
      e.preventDefault();
      setConsentError('Please check the SMS consent box to proceed.');
      return;
    }
    setConsentError('');
    handleSubmit(e);
  };

  const sending = state.submitting;
  const topLevelErrors =
    state.errors && Array.isArray(state.errors)
      ? state.errors.filter((err) => !err.field).map((err) => err.message)
      : [];

  if (state.succeeded) {
    return (
      <div className="cform form-ok">
        <div className="form-ok-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#12C9A0" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="form-ok-title">Message Sent</h3>
        <p className="form-ok-text">
          Thank you! A specialist will reach out within one business day.
        </p>
        <button
          type="button"
          className="bghost"
          style={{ marginTop: 22 }}
          onClick={() => {
            reset();
            setSmsConsent(false);
            setService('');
            setFirstName('');
            setLastName('');
            setConsentError('');
          }}
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form
      className="cform"
      action={`https://formspree.io/f/${FORMSPREE_FORM_ID}`}
      method="POST"
      onSubmit={onSubmit}
      noValidate
    >
      {/* Honeypot — hidden from humans, auto-filled by bots */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }}
      />

      {/* Backup email + subject line via Formspree special fields */}
      <input type="hidden" name="_cc" value="info@quadhealthcaresolutions.com" />
      <input
        type="hidden"
        name="_subject"
        value={`New Consultation: ${firstName} ${lastName}${service ? ` — ${service}` : ''}`}
      />

      <div className="frow">
        <div className="fg">
          <label htmlFor="firstName">First Name *</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="John"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
        </div>
        <div className="fg">
          <label htmlFor="lastName">Last Name *</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Smith"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
        </div>
      </div>
      <div className="frow">
        <div className="fg">
          <label htmlFor="email">Email Address *</label>
          <input id="email" type="email" name="email" placeholder="doctor@practice.com" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="fg">
          <label htmlFor="phone">Phone Number *</label>
          <input id="phone" type="tel" name="phone" placeholder="(555) 000-0000" required />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
      </div>
      <div className="frow">
        <div className="fg">
          <label htmlFor="practice">Practice Name</label>
          <input id="practice" type="text" name="practice" placeholder="Smith Family Medicine" />
        </div>
        <div className="fg">
          <label htmlFor="specialty">Specialty</label>
          <input id="specialty" type="text" name="specialty" placeholder="e.g. Family Medicine" />
        </div>
      </div>
      <div className="fg">
        <label htmlFor="service">Service Needed *</label>
        <select
          id="service"
          name="service"
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
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
        <ValidationError prefix="Service" field="service" errors={state.errors} />
      </div>
      <div className="fg">
        <label htmlFor="message">Tell Us More</label>
        <textarea
          id="message"
          name="message"
          placeholder="Current payer situation, number of providers, timeline..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <div className="fg-checkbox">
        <label className="cb-label">
          <input
            type="checkbox"
            name="smsConsent"
            value="Yes"
            required
            checked={smsConsent}
            onChange={(e) => {
              setSmsConsent(e.target.checked);
              if (e.target.checked) setConsentError('');
            }}
          />
          <span className="cb-text">
            I consent to receive SMS/text messages from QUAD Healthcare Solutions at the phone number provided above.
          </span>
        </label>
        <div className="cb-disclaimer">
          <p>I understand that:</p>
          <ul>
            <li>Messages may include medical credentialing updates, provider enrollment status, service notifications, and account reminders.</li>
            <li>Message frequency varies.</li>
            <li>Message and data rates may apply.</li>
            <li>Consent is not a condition of purchasing services.</li>
            <li>I can unsubscribe at any time by replying STOP. Reply HELP for help.</li>
          </ul>
          <p className="cb-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            {' | '}
            <Link href="/terms-conditions">Terms &amp; Conditions</Link>
          </p>
        </div>
      </div>

      {consentError && (
        <div className="form-alert form-alert-error" role="alert">
          {consentError}
        </div>
      )}
      {topLevelErrors.length > 0 && (
        <div className="form-alert form-alert-error" role="alert">
          {topLevelErrors.join(' ')}
        </div>
      )}

      <button
        type="submit"
        className="bteal"
        style={{ width: '100%', justifyContent: 'center' }}
        disabled={sending}
      >
        {sending ? 'Sending…' : 'Submit & Request Free Consultation →'}
      </button>
    </form>
  );
}
