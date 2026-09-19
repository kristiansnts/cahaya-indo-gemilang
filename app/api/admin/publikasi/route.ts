import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { uploadPublikasiImage, deletePublikasiImage } from '@/lib/blob';
import { PUBLIKASI_CATEGORIES } from '@/lib/publikasi';
import { revalidatePath } from 'next/cache';

export async function GET() {
  const items = await prisma.publikasi.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json({ items });
}

export async function POST(request: Request) {
  const form = await request.formData();
  const title = String(form.get('title') ?? '').trim();
  const category = String(form.get('category') ?? '').trim();
  const file = form.get('file');

  if (!title) {
    return NextResponse.json({ error: 'Judul wajib diisi' }, { status: 400 });
  }
  if (!PUBLIKASI_CATEGORIES.includes(category as (typeof PUBLIKASI_CATEGORIES)[number])) {
    return NextResponse.json({ error: 'Kategori tidak valid' }, { status: 400 });
  }
  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: 'File gambar wajib' }, { status: 400 });
  }
  if (!file.type.startsWith('image/')) {
    return NextResponse.json({ error: 'File harus berupa gambar' }, { status: 400 });
  }

  const imageUrl = await uploadPublikasiImage(file);
  const item = await prisma.publikasi.create({
    data: { title, category, imageUrl },
  });

  revalidatePath('/artikel-publikasi');
  revalidatePath('/admin/publikasi');
  return NextResponse.json({ item }, { status: 201 });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'id wajib' }, { status: 400 });
  }

  const existing = await prisma.publikasi.findUnique({ where: { id } });
  if (!existing) {
    return NextResponse.json({ error: 'Tidak ditemukan' }, { status: 404 });
  }

  await prisma.publikasi.delete({ where: { id } });
  await deletePublikasiImage(existing.imageUrl);

  revalidatePath('/artikel-publikasi');
  revalidatePath('/admin/publikasi');
  return NextResponse.json({ ok: true });
}
