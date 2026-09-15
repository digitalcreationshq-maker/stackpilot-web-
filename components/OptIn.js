'use client';

import { useState } from 'react';

export default function OptIn() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: wire this up to your email provider (ConvertKit, Mailchimp, etc.)
    setSubmitted(true);
  }

  return (
    <div className="opt-in">
      <h3>Get it free by email</h3>
      <p className="opt-note">Plus one new guide a week. No spam, unsubscribe any time.</p>
      {submitted ? (
        <p className="opt-success">Check your inbox — the checklist is on its way.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="you@business.com"
            aria-label="Email address"
            required
          />
          <button type="submit" className="btn btn-solid">
            Send it to me
          </button>
        </form>
      )}
    </div>
  );
        }
