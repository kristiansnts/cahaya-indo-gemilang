import { prisma } from '@/lib/db';

export const PAGE_SIZE = 9;

export const PUBLIKASI_CATEGORIES = ['Kegiatan', 'Produk Alkes'] as const;
export type PublikasiCategory = (typeof PUBLIKASI_CATEGORIES)[number];

export async function listPublikasi(opts: {
  page?: number;
  category?: string | null;
  pageSize?: number;
}) {
  const pageSize = opts.pageSize ?? PAGE_SIZE;
  const page = Math.max(1, opts.page ?? 1);
  const category =
    opts.category && opts.category !== 'Semua' ? opts.category : undefined;

  const where = category ? { category } : {};

  const [items, total] = await Promise.all([
    prisma.publikasi.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.publikasi.count({ where }),
  ]);

  return {
    items,
    total,
    page,
    pageSize,
    totalPages: Math.max(1, Math.ceil(total / pageSize)),
  };
}
