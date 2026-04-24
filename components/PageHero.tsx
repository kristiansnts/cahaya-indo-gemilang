import Link from 'next/link';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  desc: string;
  breadcrumb: string;
}

export default function PageHero({ eyebrow, title, desc, breadcrumb }: PageHeroProps) {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>
        <div className="page-hero-line"></div>
        <div className="container page-hero-content">
          <div className="page-eyebrow">{eyebrow}</div>
          <h1 className="page-title">{title}</h1>
          <p className="page-desc">{desc}</p>
        </div>
      </div>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <Link href="/">Beranda</Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            <span>{breadcrumb}</span>
          </div>
        </div>
      </div>
    </>
  );
}
