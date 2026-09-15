import Link from 'next/link';
import GuideList from '@/components/GuideList';
import OptIn from '@/components/OptIn';
import PinStrip from '@/components/PinStrip';

const CATEGORIES = [
  {
    href: '/ai-tools',
    title: 'AI Tools',
    description: 'Writing, video, image, marketing, productivity and automation tools built for small teams.',
    cta: 'See AI tool guides',
  },
  {
    href: '/business-software',
    title: 'Business Software',
    description: 'Accounting, CRM, project management, invoicing, HR/payroll and support platforms.',
    cta: 'See business software guides',
  },
  {
    href: '/marketing',
    title: 'Marketing',
    description: 'Email, SEO tools, social media management, advertising and lead generation software.',
    cta: 'See marketing guides',
  },
  {
    href: '/website-ecommerce',
    title: 'Website & Ecommerce',
    description: 'Builders, hosting, ecommerce platforms, domains and business email.',
    cta: 'See website guides',
  },
  {
    href: '/cybersecurity',
    title: 'Cybersecurity',
    description: 'VPNs, password managers, antivirus and business security tools for small teams.',
    cta: 'See security guides',
  },
  {
    href: '/comparisons',
    title: 'Comparisons',
    description: "Head-to-head guides and alternative-tool roundups for when you're stuck between two options.",
    cta: 'See comparisons',
  },
];

const FEATURED_GUIDES = [
  {
    title: 'Best CRM for Small Business',
    note: "A working shortlist for teams that don't need enterprise Salesforce complexity.",
  },
  {
    title: 'Best Accounting Software for Freelancers',
    note: 'Invoicing, taxes and cash flow in one place — ranked by how little accounting you actually have to do.',
  },
  {
    title: 'Best AI Tools for Small Business',
    note: "The AI tools worth paying for once you're past the free-trial stage.",
  },
  {
    title: 'QuickBooks vs Xero',
    note: 'Same job, two very different workflows — which one matches how you already work.',
  },
  {
    title: 'Best Project Management Software for Small Business',
    note: 'For teams who tried spreadsheets first and are done pretending that works.',
  },
  {
    title: 'Best Website Builders for Small Business',
    note: 'What to use if you need a site live this month, not a six-month build.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>Find the right software before you waste a subscription on the wrong one.</h1>
          <p className="lede">
            Stack Pilot is an independent buying guide for small business software, AI tools
            and digital services. We test the categories that matter most — accounting, CRM,
            project management, AI, and your website stack — and tell you plainly which tool
            fits which business.
          </p>
          <ul className="value-list">
            <li>Independent picks, not pay-for-placement rankings</li>
            <li>Written for solo founders, freelancers and small teams — not enterprise buyers</li>
            <li>Guides updated as pricing and features change</li>
          </ul>
          <div className="hero-actions">
            <a href="#checklist" className="btn btn-solid">Get the free Software Stack Checklist</a>
            <Link href="/ai-tools" className="btn">Browse AI tools</Link>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <h2>Where to start</h2>
          <p className="lede">Six categories cover the tools a small business actually buys. Pick the one you&apos;re stuck on.</p>
          <div className="tile-grid">
            {CATEGORIES.map((cat) => (
              <div className="tile" key={cat.href}>
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <Link className="tile-link" href={cat.href}>{cat.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <h2>First guides on the runway</h2>
          <p className="lede">These are publishing first, across every category.</p>
          <GuideList items={FEATURED_GUIDES} />
        </div>
      </section>

      <section className="block" id="checklist">
        <div className="wrap">
          <h2>The Software Stack Checklist</h2>
          <p className="lede">
            A one-page checklist for evaluating any tool before you buy it — pricing traps,
            contract terms, and the questions most reviews skip.
          </p>
          <OptIn />
        </div>
      </section>

      <PinStrip />
    </>
  );
    }
