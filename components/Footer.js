import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-nav">
          <Link href="/" className="logo" style={{ fontSize: '1.2rem' }}>
            Stack<span>Pilot</span>
          </Link>
          <ul>
            <li><Link href="/ai-tools">AI Tools</Link></li>
            <li><Link href="/business-software">Business Software</Link></li>
            <li><Link href="/marketing">Marketing</Link></li>
            <li><Link href="/website-ecommerce">Website &amp; Ecommerce</Link></li>
            <li><Link href="/cybersecurity">Cybersecurity</Link></li>
            <li><Link href="/comparisons">Comparisons</Link></li>
          </ul>
          <ul style={{ marginTop: '0.6rem' }}>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
        <p className="disclosure">
          Affiliate disclosure: Stack Pilot may earn a commission when you sign up for
          software through links on this site, at no extra cost to you. This never affects
          which tools we recommend or how we rank them — our picks are based on our own
          evaluation criteria, not commission rates.
        </p>
        <p className="copyright">© {new Date().getFullYear()} Stack Pilot. Smarter tools. Better business.</p>
      </div>
    </footer>
  );
              }
