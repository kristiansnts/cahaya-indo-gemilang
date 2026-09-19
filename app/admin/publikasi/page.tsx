import { prisma } from '@/lib/db';
import AdminPublikasiClient from './AdminPublikasiClient';

export const dynamic = 'force-dynamic';

export default async function AdminPublikasiPage() {
  const items = await prisma.publikasi.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <AdminPublikasiClient
      initialItems={items.map((i) => ({
        id: i.id,
        title: i.title,
        category: i.category,
        imageUrl: i.imageUrl,
        createdAt: i.createdAt.toISOString(),
      }))}
    />
  );
}
