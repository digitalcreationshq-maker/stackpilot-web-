'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: wire this up to a form backend (Formspree, Getform, a Vercel
    // serverless function that sends email, etc.) before relying on it.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="opt-in">
        <h3>Message sent</h3>
        <p className="opt-note" style={{ marginBottom: 0 }}>
          Thanks — I&apos;ll get back to you as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" required />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="reason">What's this about?</label>
      <select id="reason" name="reason" defaultValue="guide">
        <option value="guide">A guide suggestion or correction</option>
        <option value="advertising">Advertising or sponsorship</option>
        <option value="affiliate">Affiliate or partnership program</option>
        <option value="other">Something else</option>
      </select>

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={5} required></textarea>

      <button type="submit" className="btn btn-solid">Send message</button>
    </form>
  );
    }
