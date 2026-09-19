import { Suspense } from 'react';
import AdminLoginForm from './AdminLoginForm';

export default function AdminLoginPage() {
  return (
    <main className="admin-shell">
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Memuat…</p>}>
        <AdminLoginForm />
      </Suspense>
    </main>
  );
}
