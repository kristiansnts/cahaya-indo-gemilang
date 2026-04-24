'use client';

import { useState } from 'react';

const tabs = ['Semua', 'Limbah B3', 'TENORM', 'Konsultansi HSE', 'Migas', 'Minerba'];

export default function FilterTabs() {
  const [active, setActive] = useState('Semua');
  return (
    <div className="filter-tabs">
      {tabs.map(tab => (
        <div
          key={tab}
          className={`filter-tab${active === tab ? ' active' : ''}`}
          onClick={() => setActive(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}
