@AGENTS.md

## Recent Updates [2026-09-19]

- Admin upload for publikasi: `/admin/login` + `/admin/publikasi`, images to Vercel Blob, metadata in Prisma Postgres
- Public gallery reads DB (sort `createdAt` desc) with pagination (`?page=` / `?kat=`)
- Env: `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `AUTH_SECRET` (+ existing Blob/DB URLs)

## Recent Updates [2026-08-06]

- Added `components/PublikasiGallery.tsx` — dokumentasi kegiatan & produk Alkes from `public/publikasi`
- Wired gallery section into `app/artikel-publikasi/page.tsx` below ArtikelGrid
- Renamed publikasi JPEG assets to kebab-case under `public/publikasi/`
