'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollInit() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-up').forEach(el => {
      if (!el.classList.contains('visible')) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
