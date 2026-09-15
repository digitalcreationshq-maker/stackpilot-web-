import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Stack Pilot — guide suggestions, corrections, advertising and affiliate inquiries.',
};

export default function ContactPage() {
  return (
    <section className="page-hero" style={{ borderBottom: 'none' }}>
      <div className="wrap">
        <h1>Contact</h1>
        <p className="lede">
          Spot something wrong in a guide, want a tool covered, or interested in
          advertising or a partnership? Send it here.
        </p>

        <ContactForm />

        <div className="contact-info">
          <p style={{ marginBottom: '0.25rem' }}>
            Prefer email? Reach us directly at{' '}
            <a href="mailto:hello@stackpilot.co">hello@stackpilot.co</a>.
          </p>
          <p style={{ marginBottom: 0, fontSize: '0.88rem', color: 'var(--ink-soft)' }}>
            Replace this address with your real inbox before launch.
          </p>
        </div>
      </div>
    </section>
  );
}
