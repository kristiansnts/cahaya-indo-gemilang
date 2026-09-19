'use client';

import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const TABS = ['Semua', 'Kegiatan', 'Produk Alkes'] as const;

export type PublikasiItem = {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
};

type Props = {
  items: PublikasiItem[];
  page: number;
  totalPages: number;
  total: number;
  category: string;
};

export default function PublikasiGallery({
  items,
  page,
  totalPages,
  total,
  category,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = category || 'Semua';

  function hrefFor(nextPage: number, nextKat: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (nextPage <= 1) params.delete('page');
    else params.set('page', String(nextPage));
    if (!nextKat || nextKat === 'Semua') params.delete('kat');
    else params.set('kat', nextKat);
    const q = params.toString();
    return q ? `${pathname}?${q}` : pathname;
  }

  function setTab(tab: string) {
    router.push(hrefFor(1, tab));
  }

  return (
    <>
      <div className="filter-tabs fade-up">
        {TABS.map((tab) => (
          <div
            key={tab}
            className={`filter-tab${active === tab ? ' active' : ''}`}
            onClick={() => setTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {items.length > 0 ? (
        <div className="projects-grid fade-up">
          {items.map((item) => (
            <div key={item.id} className="project-card">
              <div className="project-thumb publikasi-thumb">
                <img src={item.imageUrl} alt={item.title} />
                <div className="project-category">{item.category}</div>
              </div>
              <div className="project-body">
                <div className="project-title" style={{ fontSize: 18, marginBottom: 0 }}>
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: 'var(--gray-500)', padding: '48px 0', textAlign: 'center', fontSize: 14 }}>
          Tidak ada dokumentasi untuk kategori ini.
        </p>
      )}

      {totalPages > 1 ? (
        <nav className="publikasi-pagination fade-up" aria-label="Pagination publikasi">
          <Link
            href={hrefFor(page - 1, active)}
            className={`publikasi-page-btn${page <= 1 ? ' disabled' : ''}`}
            aria-disabled={page <= 1}
          >
            ←
          </Link>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <Link
              key={n}
              href={hrefFor(n, active)}
              className={`publikasi-page-btn${n === page ? ' active' : ''}`}
            >
              {n}
            </Link>
          ))}
          <Link
            href={hrefFor(page + 1, active)}
            className={`publikasi-page-btn${page >= totalPages ? ' disabled' : ''}`}
            aria-disabled={page >= totalPages}
          >
            →
          </Link>
          <span style={{ fontSize: 13, color: 'var(--gray-500)', marginLeft: 8 }}>
            {total} dokumentasi
          </span>
        </nav>
      ) : null}
    </>
  );
}
