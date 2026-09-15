export const metadata = {
  title: 'Privacy Policy',
  description: "Stack Pilot's privacy policy — what data we collect, affiliate links, cookies, and your rights.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="page-hero" style={{ borderBottom: 'none' }}>
      <div className="wrap prose">
        <h1>Privacy Policy</h1>
        <p className="updated-note">Last updated: [date]</p>

        <p>
          This page explains what information Stack Pilot ("we," "us") collects
          from visitors to stackpilot.co (replace with your real domain), how
          it&apos;s used, and the choices you have. By using this site, you agree
          to the terms below.
        </p>

        <h2>Information we collect</h2>
        <p>We collect information in a few ways:</p>
        <ul>
          <li><strong>Information you provide directly</strong> — your name and email address if you sign up for the Software Stack Checklist or another newsletter, or the details you submit through the Contact form.</li>
          <li><strong>Automatically collected information</strong> — standard analytics data such as pages visited, time on site, device type, browser, and approximate location, collected through an analytics tool (e.g. Vercel Analytics or Google Analytics — name the one you actually use).</li>
          <li><strong>Cookies</strong> — small files stored in your browser used for analytics, remembering preferences, and (if applicable) advertising.</li>
        </ul>

        <h2>How we use this information</h2>
        <ul>
          <li>To send the Software Stack Checklist and any newsletter you sign up for</li>
          <li>To respond to messages sent through the Contact form</li>
          <li>To understand which guides are useful and improve the site</li>
          <li>To measure which channels (including Pinterest) bring visitors to the site</li>
        </ul>
        <p>We do not sell your personal information.</p>

        <h2>Affiliate links and how this site makes money</h2>
        <p>
          Stack Pilot participates in affiliate programs. Some links to software
          products on this site are affiliate links — if you click through and
          sign up, we may earn a commission at no extra cost to you. This
          relationship never changes which tools we recommend or how we rank
          them. See the <a href="/about">About page</a> for more on how guides
          are evaluated.
        </p>

        <h2>Third-party services</h2>
        <p>
          This site may use third-party services that collect their own data
          under their own privacy policies, including:
        </p>
        <ul>
          <li>Analytics providers (e.g. Vercel Analytics, Google Analytics)</li>
          <li>The email provider used for the checklist and newsletter (e.g. ConvertKit, Mailchimp, Beehiiv)</li>
          <li>Affiliate networks and the individual software companies linked to in guides</li>
          <li>Pinterest, when you click the "Follow on Pinterest" links or interact with pinned content</li>
        </ul>
        <p>
          [List the specific services you actually use once they're set up, and
          link to each one's own privacy policy.]
        </p>

        <h2>Your choices and rights</h2>
        <p>
          You can unsubscribe from any email at any time using the link in the
          footer of the email. You can also disable cookies in your browser
          settings, though some site features may not work as well without them.
        </p>
        <p>
          Depending on where you live, you may have additional rights over your
          personal data — for example, the right to access, correct, or delete
          the information we hold about you (under regulations such as GDPR in
          the EU/UK or CCPA in California). To exercise any of these rights,
          contact us using the details below.
        </p>

        <h2>Children's privacy</h2>
        <p>
          Stack Pilot is not directed at children under 13, and we do not
          knowingly collect information from children under 13.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy as the site changes. The "last updated"
          date at the top of this page will reflect the most recent revision.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy or your data can be sent to{' '}
          <a href="mailto:hello@stackpilot.co">hello@stackpilot.co</a> or
          through the <a href="/contact">Contact page</a>.
        </p>

        <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'var(--ink-soft)', borderTop: '1px solid var(--line)', paddingTop: '1.25rem' }}>
          This page is a general starting template, not legal advice. Depending
          on where your visitors are located and what tools you connect (ads,
          analytics, email), you may have specific obligations under laws like
          GDPR or CCPA — including a cookie consent banner in some regions. It's
          worth having this reviewed by a lawyer, or generating it through a
          service built for compliance (e.g. Termly or Iubenda), before you rely
          on it for a monetized site.
        </p>
      </div>
    </section>
  );
  }
