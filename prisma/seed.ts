import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const items = [
  {
    imageUrl: '/publikasi/produk-alkes/verifikasi-oksigen-sentral.jpeg',
    category: 'Produk Alkes',
    title: 'Verifikasi produk Alkes (Sistem Oksigen Sentral)',
  },
  {
    imageUrl: '/publikasi/produk-alkes/review-hiperbarik.jpeg',
    category: 'Produk Alkes',
    title: 'Review ruang pasien terapi oksigen hiperbarik',
  },
  {
    imageUrl: '/publikasi/produk-alkes/verifikasi-xray-unit.jpeg',
    category: 'Produk Alkes',
    title: 'Verifikasi produk Alkes (X-ray unit)',
  },
  {
    imageUrl: '/publikasi/rakor-limbah-b3-mth-square.jpeg',
    category: 'Kegiatan',
    title: 'Rakor PT CIG Bidang Pengelolaan Limbah B3 Terkontaminasi Radioaktif (di MTH Square - Jakarta, Akhir 2025)',
  },
  {
    imageUrl: '/publikasi/konsultasi-perizinan-tenorm-bapeten.jpeg',
    category: 'Kegiatan',
    title: 'PT CIG bersama MasPALA Indonesia konsultasi Perizinan Pengelolaan TENORM (MIR) di BAPETEN',
  },
  {
    imageUrl: '/publikasi/kerjasama-maspala-gatot-subroto.jpeg',
    category: 'Kegiatan',
    title: 'Kerjasama PT CIG & MasPALA Indonesia di JL. Gatot Subroto - Jakarta',
  },
  {
    imageUrl: '/publikasi/arahan-senior-advisor-dirut.jpeg',
    category: 'Kegiatan',
    title: 'Arahan Senior Advisor kepada Dirut PT CIG',
  },
  {
    imageUrl: '/publikasi/rakor-bapeten-cemaran-radioaktif.jpeg',
    category: 'Kegiatan',
    title: 'PT CIG bersama Kepala BAPETEN pada Undangan Rakor Pencegahan & Penanggulangan Cemaran Radioaktif, RUU EBT, termasuk PLTN Terapung di BAPETEN',
  },
  {
    imageUrl: '/publikasi/verifikasi-kerjasama-blora-patra.jpeg',
    category: 'Kegiatan',
    title: 'PT CIG bersama MasPALA Indonesia verifikasi kerjasama Bidang Pengelolaan Limbah B3 Terkontaminasi TENORM di PT Blora Patra Energy, Blora - Jateng',
  },
  {
    imageUrl: '/publikasi/paparan-kerjasama-pemprov-blora.jpeg',
    category: 'Kegiatan',
    title: 'Paparan MasPALA Indonesia bersama PT CIG dalam rangka memulai Kerjasama dengan Pemprov Kabupaten Blora, Jateng',
  },
  {
    imageUrl: '/publikasi/rakor-nhm-pengembangan-ebt.jpeg',
    category: 'Kegiatan',
    title: 'Rakor PT CIG, MasPALA Indonesia & PT NHM tentang Pengembangan EBT, termasuk PLTN',
  },
];

async function main() {
  const count = await prisma.publikasi.count();
  if (count > 0) {
    console.log(`Skip seed: ${count} publikasi already exist`);
    return;
  }

  // Stagger createdAt so seed order matches display (oldest first → newest last)
  const base = Date.now() - items.length * 60_000;
  for (let i = 0; i < items.length; i++) {
    await prisma.publikasi.create({
      data: {
        ...items[i],
        createdAt: new Date(base + i * 60_000),
      },
    });
  }
  console.log(`Seeded ${items.length} publikasi`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
