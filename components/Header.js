'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/ai-tools', label: 'AI Tools' },
  { href: '/business-software', label: 'Business Software' },
  { href: '/marketing', label: 'Marketing' },
  { href: '/website-ecommerce', label: 'Website & Ecommerce' },
  { href: '/cybersecurity', label: 'Cybersecurity' },
  { href: '/comparisons', label: 'Comparisons' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-bar">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          Stack<span>Pilot</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav
          id="main-nav"
          className={`main-nav${open ? ' open' : ''}`}
          aria-label="Main"
        >
          <ul>
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'active' : ''}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
    }
