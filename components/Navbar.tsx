'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/proyek-portofolio', label: 'Proyek & Portofolio' },
  { href: '/artikel-publikasi', label: 'Artikel & Publikasi' },
  { href: '/hubungi-kami', label: 'Hubungi Kami' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="nav-inner">
            <Link href="/" className="nav-logo">
              <Image
                src="/images/logo.png"
                alt="PT Cahaya Indo Gemilang"
                width={120}
                height={140}
                priority
                style={{ width: 'auto', height: 48, objectFit: 'contain' }}
              />
              <span className="nav-logo-text">
                <span className="nav-logo-name">PT Cahaya Indo Gemilang</span>
              </span>
            </Link>
            <ul className="nav-links">
              {links.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className={pathname === link.href ? 'active' : ''}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/hubungi-kami" className="nav-cta">Ajukan Survey</Link>

            <button
              className={`nav-hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`nav-mobile${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="nav-mobile-inner">
          <ul className="nav-mobile-links">
            {links.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/hubungi-kami" className="btn-primary nav-mobile-cta" onClick={() => setMenuOpen(false)}>
            Ajukan Survey
          </Link>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />}
    </>
  );
}
