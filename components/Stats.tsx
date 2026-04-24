export default function Stats() {
  return (
    <div className="trust-bar">
      <div className="container">
        <div className="trust-bar-inner">
          <div className="trust-item">
            <svg className="trust-icon" viewBox="0 0 40 40" fill="none"><path d="M20 4L7 10v11c0 9.2 5.55 17.8 13 20 7.45-2.2 13-10.8 13-20V10L20 4z" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/><path d="M14 20l4.5 4.5L26 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <div><div className="trust-label">Patuh Regulasi</div><div className="trust-detail">KLH &amp; BAPETEN</div></div>
          </div>
          <div className="trust-item">
            <svg className="trust-icon" viewBox="0 0 40 40" fill="none"><rect x="8" y="8" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/><path d="M15 20h10M15 15h10M15 25h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <div><div className="trust-label">Standar Safety</div><div className="trust-detail">ISO &amp; HSE Migas</div></div>
          </div>
          <div className="trust-item">
            <svg className="trust-icon" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/><path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <div><div className="trust-label">Tenaga Ahli</div><div className="trust-detail">Sertifikasi Nasional</div></div>
          </div>
          <div className="trust-item">
            <svg className="trust-icon" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/><path d="M20 12v9l5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <div><div className="trust-label">Respon Cepat</div><div className="trust-detail">Layanan 24/7</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
