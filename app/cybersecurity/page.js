import GuideList from '@/components/GuideList';
import PinStrip from '@/components/PinStrip';

export const metadata = {
  title: 'Cybersecurity',
  description: 'Buying guides for VPNs, password managers, antivirus and business security software for small business.',
};

const SUBCATEGORIES = ['VPN', 'Password Managers', 'Antivirus', 'Business Security'];

const GUIDES = [
  { title: 'Best VPN for Small Business', note: 'Secure remote access for teams working outside the office.' },
  { title: 'Best Password Manager for Small Business', note: 'Shared logins your whole team can use safely.' },
  { title: 'Best Antivirus Software for Small Business', note: "Endpoint protection that won't slow down every laptop in the office." },
  { title: 'Best Business Security Software', note: 'The baseline security stack before you need a dedicated IT hire.' },
  { title: 'Best Backup Software for Small Business', note: "Protect the data you can't afford to lose." },
  { title: 'Best Two-Factor Authentication Apps for Business', note: 'Stop the most common way small business accounts get taken over.' },
];

export default function CybersecurityPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>Cybersecurity</h1>
          <p className="lede">
            A secondary pillar we're building out alongside the core categories: the
            security basics every small business should have in place.
          </p>
          <div className="tag-row">
            {SUBCATEGORIES.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <h2>Planned guides</h2>
          <p className="lede">These titles are on the roadmap — check back as they publish.</p>
          <GuideList items={GUIDES} />
        </div>
      </section>

      <PinStrip />
    </>
  );
    }
