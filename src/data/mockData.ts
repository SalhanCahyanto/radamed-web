/**
 * Centralized Mock Data: PT Rahardia Abadi Medika (RADAMED)
 * Struktur interface ini dirancang kompatibel dengan skema Sanity.io (Fase 2 CMS).
 * Seluruh data mengacu pada PRD.md dan DESIGN.md (Single Source of Truth).
 */

export interface MetricItem {
  value: string;
  label: string;
  description: string;
}

export interface CompanyValue {
  number: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  summary: string;
  fullDescription: string;
  image: string;
}

export interface GalleryItem {
  url: string;
  caption: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: 'instalasi-alat' | 'instalasi-ruang' | 'perbaikan' | 'renovasi';
  facility: string;
  summary: string;
  coverImage: string;
  scopeOfWork: string[];
  challenge: string;
  solution: string;
  gallery: GalleryItem[];
}

export interface ContactInfo {
  phoneDisplay: string;
  phoneRaw: string;
  whatsappUrl: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  province: string;
  mapsUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface CompanyProfile {
  legalName: string;
  shortName: string;
  tagline: string;
  positioning: string;
  aboutStory: string;
  footerDescription: string;
  copyright: string;
  metrics: MetricItem[];
  vision: string;
  mission: string;
  values: CompanyValue[];
  contact: ContactInfo;
}

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Portofolio', href: '/portfolio' },
  { label: 'Kontak', href: '/kontak' },
];

export const COMPANY_PROFILE: CompanyProfile = {
  legalName: 'PT Rahardia Abadi Medika',
  shortName: 'RADAMED',
  tagline: 'Perbaikan – Inspirasi – Kepercayaan',
  positioning: 'Mitra Ahli Instalasi dan Perbaikan Alat Kesehatan Anda',
  aboutStory:
    'PT Rahardia Abadi Medika (RADAMED) dibangun oleh tiga engineer dengan pengalaman lebih dari 10 tahun di bidang radiologi dan berbagai jenis peralatan kesehatan. Dari pengalaman itu, kami berkomitmen menghadirkan perbaikan dan instalasi alat serta ruang medis yang sesuai standar dan kebutuhan pengguna. Pelayanan dan kepuasan pelanggan adalah prioritas kami.',
  footerDescription:
    'Mitra terpercaya instalasi, pemeliharaan, dan perbaikan alat elektromedis serta renovasi ruang medis fasilitas kesehatan di Indonesia.',
  copyright: '© PT Rahardia Abadi Medika. Seluruh hak cipta dilindungi undang-undang.',
  metrics: [
    {
      value: '3 Engineer',
      label: '3 Engineer',
      description: 'Tenaga ahli berpengalaman lapangan',
    },
    {
      value: '10+ Tahun',
      label: '10+ Tahun pengalaman',
      description: 'Spesialisasi di bidang radiologi dan alat kesehatan',
    },
    {
      value: 'Semarang',
      label: 'Kantor di Semarang',
      description: 'Pusat operasional di Mijen, Kota Semarang',
    },
  ],
  vision: 'Menjadi solusi terkemuka dalam menyediakan layanan alat kesehatan yang optimal.',
  mission: 'Memberikan layanan berkualitas tinggi dengan fokus pada keamanan pasien dan kepuasan pelanggan.',
  values: [
    {
      number: '01',
      title: 'Komitmen terhadap Kualitas',
      description: 'Perbaikan, pengujian, dan pemeliharaan yang mendukung fungsi dan keamanan alat.',
    },
    {
      number: '02',
      title: 'Inovasi dan Riset',
      description: 'Solusi perbaikan alat kesehatan melalui teknologi dan pengembangan keahlian.',
    },
    {
      number: '03',
      title: 'Kemitraan dengan Pelanggan',
      description: 'Memahami kebutuhan pelanggan dan membangun hubungan jangka panjang.',
    },
    {
      number: '04',
      title: 'Keberlanjutan Lingkungan',
      description: 'Praktik kerja ramah lingkungan dan upaya mengurangi dampak terhadap ekosistem.',
    },
    {
      number: '05',
      title: 'Pelatihan dan Pengembangan',
      description: 'Peningkatan keahlian tim mengikuti perkembangan teknologi alat kesehatan.',
    },
  ],
  contact: {
    phoneDisplay: '+62 821-3331-7627',
    phoneRaw: '+6282133317627',
    whatsappUrl: 'https://wa.me/6282133317627',
    email: 'id.radamed@gmail.com',
    address: 'Megah Residence Kav 5A, Jalan Bandungsari, Tambangan, Mijen, Kota Semarang, Jawa Tengah 50215',
    city: 'Semarang',
    postalCode: '50215',
    province: 'Jawa Tengah',
    mapsUrl: 'https://maps.google.com/?q=Megah+Residence+Kav+5A+Jalan+Bandungsari+Tambangan+Mijen+Kota+Semarang+50215',
    coordinates: {
      lat: -7.0543,
      lng: 110.3129,
    },
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    number: '01',
    title: 'Konsultasi dan Instalasi',
    slug: 'konsultasi-dan-instalasi',
    summary: 'Pendampingan kebutuhan pengguna serta instalasi alat dan ruang medis sesuai standar yang dibutuhkan.',
    fullDescription:
      'Pendampingan menyeluruh mulai dari asesmen kebutuhan teknis, perencanaan kelayakan tata ruang medis, hingga pelaksanaan instalasi elektromedis yang presisi dan sesuai regulasi keselamatan kerja klinis.',
    image:
      'https://lh3.googleusercontent.com/aida/AEtjO1UVSF3VNnSxpyCKe19BUcteahIk_Z0LgHIsol8y83bjYENvklBRWDN9SjHaTes4EB0T8ueFu75o8NkeotvyDyHanxPJNMP-ed7wauuCABnc4qqKouIxCE-7P5JFYRqoRgaABf0idg1Zf6TEyPDQ5P2zIebDdsDLJ7R3K22WajqtCaxyYe0Y_E-vmCiOPc1vDVAvHd-2ngBcjV4icsCKpQ3SNsehB-rWcfASPjlwA_JqD3-d54-K_oyazmYK',
  },
  {
    id: 'srv-2',
    number: '02',
    title: 'Maintenance Preventif',
    slug: 'maintenance-preventif',
    summary: 'Pemeliharaan berkala agar peralatan kesehatan tetap berfungsi optimal dan aman digunakan.',
    fullDescription:
      'Program pemeliharaan terjadwal untuk mendeteksi potensi degradasi komponen sebelum menimbulkan kegagalan fungsi klinis, menjaga akurasi kalibrasi, serta memperpanjang usia pakai aset alat kesehatan.',
    image:
      'https://lh3.googleusercontent.com/aida/AEtjO1V50hRYm4JnnaFmf7nHmcp85x6FjbckHoSpVUd_BUxt_gfFZ_FsrPNwQ87gx-vypYKFaZNBiLSJNpB-3SKJ4dPqVLgs8ikgurYO_zg7Yg646I-GgHgJO2C2ZSRu4oD_1dPzqanuyh0bYfvrTVUidc19EDUzGta5BtY8WFQ5nDTPAvQhmCZm3WQwbx84XI0rv3wsktLFkzrgbpAZUGKWigyzkx-JuegYCW4ySvmwP4MCZzaJ0dZJv_YVndI',
  },
  {
    id: 'srv-3',
    number: '03',
    title: 'Service dan Troubleshooting',
    slug: 'service-dan-troubleshooting',
    summary: 'Identifikasi gangguan dan perbaikan peralatan kesehatan, dengan pengalaman di bidang radiologi dan berbagai jenis alat.',
    fullDescription:
      'Layanan tanggap perbaikan kerusakan unit alat kesehatan dengan diagnosis elektrik, mekanik, maupun perangkat lunak biomedis yang akurat, didukung ketersediaan suku cadang berkualitas.',
    image:
      'https://lh3.googleusercontent.com/aida/AEtjO1VUtMRb4E6APGHHBvw1x6CbYpEEGLwKvYlmXmVzF9XBd3myTJUixpJmec7L310G5rpMpxTkZqwBzXOF51VBAUxbZWZ4ih0IBsNu0xDoCShzuF36qBTqvFI4McOIFaCbKVavGYINURvcFzC3VwWYED6_IOtFdw1PJSqEQQijyx_44oZKvxsyISCxHpcan4QkymBmKowDcq2ofZFHG_Ba4uDzXpjoSxHRT2M75paKd6RwNPDny8YF4-D2BDBn',
  },
  {
    id: 'srv-4',
    number: '04',
    title: 'Renovasi Fasilitas Medis',
    slug: 'renovasi-fasilitas-medis',
    summary: 'Penataan dan renovasi ruang medis yang menyesuaikan kebutuhan pengguna dan peralatan.',
    fullDescription:
      'Pekerjaan konstruksi, pelapisan timbal (Pb) proteksi radiasi, penyesuaian sistem kelistrikan berdaya tinggi, serta tata udara khusus untuk ruang radiologi, laboratorium, dan kamar operasi.',
    image:
      'https://lh3.googleusercontent.com/aida/AEtjO1W7uF3QFOI46Qw60h4PnUhiGUmKqzuTYPPsKKLCsoGR7XttaWH7jf5ytZo5oMqIms4CSvubUN9GKVnN9A_WMIppn1Z5BVUxUG-HQn9vvVGpy3yQkTTVh6JU81RmavSmo1NgDttb9kw65thTvdaEIrIScJS8k0alTEOB-JTdz9RvmYiDMuc98b7C2V8WYyUfpSXu9MD22rchzzO1X6FkpEBmmJc_RWkrMENf4K4XsgxdQmNb_iwqvU56ycyo',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'prj-1',
    slug: 'instalasi-alat-radiologi',
    title: 'Instalasi Alat Radiologi',
    category: 'Instalasi Alat',
    categorySlug: 'instalasi-alat',
    facility: '[Nama fasilitas ditampilkan jika sudah diizinkan]',
    summary: 'Dokumentasi instalasi alat radiologi berstandar rumah sakit.',
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDaic6xvBX3slIobCvvsVOMgZb8aJE_Sn0SRwKkdi5zvQw1qEI9R0Cin57W5zANHsJAYjna5yUQUWa7GGL1gEB3dO6swtMWpocMBqQebfwPnN2dZLP84xrKEOjZJGpjFzO23WrmMxzcVMqjmtt3xzvTfcUDXGO2sMm_WJDGjyeBDS6KBJS0LusZgRhxGlGxMjQ0DncNCyEoquh_WmBoEqySWuqVuUF9nwu7O_5xXPge',
    scopeOfWork: [
      'Konsultasi kebutuhan teknis alat',
      'Instalasi unit mesin radiologi',
      'Penataan ruang pendukung dan uji fungsi',
    ],
    challenge:
      'Penyesuaian infrastruktur eksisting ruang radiologi agar mampu menampung beban operasional alat serta memastikan stabilitas suplai daya bebas fluktuasi.',
    solution:
      'Pemeriksaan menyeluruh pada jalur transmisi daya, penambahan grounding khusus biomedis, dan kalibrasi posisi gantry sesuai protokol pabrikan.',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida/AEtjO1WYGWdY3F6UI8QsEsrq_mjjFTId4qpht9HdFvHlkHvPCEKuYQoPIzbw1X0CBxHNeU4C5ZbVgYuNBkuqvtI-36XEvM8bS3w7Lwl3wVOeTSXmRYOO4xYS5UVUCK0FB43_c4-XGiN1T8mFnMcN0mjFp_svbkBZuVOsLc6X32w6do9tBLU9Ky_GM3VkgA-Ef2f5cvwcayTWu_5IlFyzqEtvL1UryGZdPGQBCHYtZAtsAC47uxeV4KuE9KXibOwW',
        caption: 'Pemasangan komponen mekanik alat radiologi utama',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBYn_ZLRmysywxT4zonZt98ngCWhQ7_PGc8Vc2x9OEUZma_E9JBJuWLmCFiohdeDX-DHpubBmEMCHZNz2Z3c7UnxjMSz9jUvkPKtf8f5C39fZEEmnWbCG1odRUHQMJpLyKuYoWpdGNJYInZE-IVie9Nn8N-iTQtmjjyfZ0BhGB4wD_so5hmD5nS0H0ZADDb-0ul45-HuLTGBnR62opEaxpFuDDjw57YWXfCHSA3KR1',
        caption: 'Pemeriksaan teknis dan konektivitas kontrol sistem',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUbCv5mqTqBzGy1Ap3hzpwWvNYkRj8j35eFKJfcC4AqKy7fBYy7kfG3IRTTONy_GkPRcuPqPDwO-kcHYhbSMvUwJlaZTCXPbYeVx1n9rV8S8x9Wa6X6OHWLh3-kL607V_2gva6tuoPxqE25JngrnDo8jO6kCG49fS_YBJ6WGDVShnGoJ-nvDBWeRSFiIUjFQrPBUMhYpqSQmbdB3pp643GQPTZIzod3-0G95K7Nz4K',
        caption: 'Pengujian akhir kesiapan operasional klinis',
      },
    ],
  },
  {
    id: 'prj-2',
    slug: 'instalasi-ruang-radiologi',
    title: 'Instalasi Ruang Radiologi',
    category: 'Instalasi Ruang',
    categorySlug: 'instalasi-ruang',
    facility: '[Nama fasilitas ditampilkan jika sudah diizinkan]',
    summary: 'Dokumentasi penataan ruang untuk penempatan alat radiologi.',
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1cnNHT0UoiJRSHKluAenb8i78h_SHT9QoKw4JBn-gTXdgpgVfINqM0-JreejTvEeE35roFEkvfI_a-whxYYIlIuk5cG_84ul3Dsap9_Gq-g2xEK908HAMCtXUOH7iDrHyXA4l5VxhD96uU5YUJwcG6kO6B8gbweE9oT1akcaiKbV39dtzJE7wplL8MK8GxZux9WslT7Wt20YsN8tSOnb0EWDAmMzt28yzpqiGN14A',
    scopeOfWork: [
      'Pemasangan proteksi radiasi Pb pada dinding dan pintu',
      'Instalasi pendingin udara khusus ruang alat',
      'Penataan konsol operator dan ruang pasien',
    ],
    challenge:
      'Ketebalan proteksi radiasi harus memenuhi standar ketat BAPETEN tanpa mengurangi luas ruang efektif gerak pasien.',
    solution:
      'Pemasangan presisi lembaran timbal timbal-balik (interlocking lead sheets) dan uji densitas radiasi menyeluruh.',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida/AEtjO1WhKY1h14NPua0C2pEcfFMR90m64pK3uLVfBBevZJH-zmYZNuUYCwf7tnLvVKFdQcpiZsPALQPsAuzxNIU9odSdWAOHKFya0j5srQEE26s8A-MwieluIJQeXFGmZCxJCKv2Z09Bv2VWCtS0A1DREKvhtCrvnkq_K_jRozuYiwTVob4AYGMxnpXeUFWqlMQXIIzDjZXJnQfz5XFd7ZReSOT-WKZMe8sRWkV9LNI8MHhV',
        caption: 'Penataan interior dan dinding proteksi radiasi',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBYn_ZLRmysywxT4zonZt98ngCWhQ7_PGc8Vc2x9OEUZma_E9JBJuWLmCFiohdeDX-DHpubBmEMCHZNz2Z3c7UnxjMSz9jUvkPKtf8f5C39fZEEmnWbCG1odRUHQMJpLyKuYoWpdGNJYInZE-IVie9Nn8N-iTQtmjjyfZ0BhGB4wD_so5hmD5nS0H0ZADDb-0ul45-HuLTGBnR62opEaxpFuDDjw57YWXfCHSA3KR1',
        caption: 'Pemasangan kaca intip timbal di ruang operator',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUbCv5mqTqBzGy1Ap3hzpwWvNYkRj8j35eFKJfcC4AqKy7fBYy7kfG3IRTTONy_GkPRcuPqPDwO-kcHYhbSMvUwJlaZTCXPbYeVx1n9rV8S8x9Wa6X6OHWLh3-kL607V_2gva6tuoPxqE25JngrnDo8jO6kCG49fS_YBJ6WGDVShnGoJ-nvDBWeRSFiIUjFQrPBUMhYpqSQmbdB3pp643GQPTZIzod3-0G95K7Nz4K',
        caption: 'Pengecekan final sirkulasi udara dan integrasi kabel',
      },
    ],
  },
  {
    id: 'prj-3',
    slug: 'perbaikan-alat-kesehatan',
    title: 'Perbaikan Alat Kesehatan',
    category: 'Perbaikan',
    categorySlug: 'perbaikan',
    facility: '[Nama fasilitas ditampilkan jika sudah diizinkan]',
    summary: 'Dokumentasi perbaikan modul dan kalibrasi unit peralatan kesehatan.',
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCi4HLD4vuuKy_gM2IreJoPXEPdKo1Na-Je0fVaAIYdtoTJwXREVm5nIaU2UySg-vqBNZOd3LxNLDCWrjH-ju3RNeriiLi87QdGB948K91mYC5LnaadnQYLH_bHJu5xFSsvc1KbG6D3kqJuSSDq0fUWbRSPDJa5W86adPRlhBlettxkchCFszkGPreMVdmCD8V353C57_UJa9rSGclUx7BUM2pY8zRRCI8pe6O8CPv9',
    scopeOfWork: [
      'Biomedical diagnostic menyeluruh',
      'Penggantian modul suplai daya elektrik',
      'Kalibrasi ulang parameter alat kesehatan',
    ],
    challenge:
      'Alat mengalami kendala intermiten yang sulit dideteksi pada sirkuit suplai tegangan tinggi.',
    solution:
      'Tracing sinyal menggunakan osiloskop diagnostik klinis dan penggantian komponen daya yang mengalami degradasi.',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida/AEtjO1Wy03r1s3xUy2uY6G37KUQz0NA_EYyBIDrcU2dtKXGoTm3-IDX7yEsdN_P4xFuj1yUvPbeG0HNCnfVgUNyul1hPD8bXLTzlg6mcxbgEv7fua-AgrIiu9yjUtioB9KBB8FOCWRRVM1UyQCv-nYfnZQs97jypdhuACJ0pAeCrGQgAPk8Y2qJX9gLqc_jOZB93ZNrLe2Tf2ZYpd0-pDFyltCnjklsBLfE55lWemC6W_fjQtQ',
        caption: 'Pemeriksaan sirkuit dan pemecahan masalah modul daya',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBYn_ZLRmysywxT4zonZt98ngCWhQ7_PGc8Vc2x9OEUZma_E9JBJuWLmCFiohdeDX-DHpubBmEMCHZNz2Z3c7UnxjMSz9jUvkPKtf8f5C39fZEEmnWbCG1odRUHQMJpLyKuYoWpdGNJYInZE-IVie9Nn8N-iTQtmjjyfZ0BhGB4wD_so5hmD5nS0H0ZADDb-0ul45-HuLTGBnR62opEaxpFuDDjw57YWXfCHSA3KR1',
        caption: 'Penggantian komponen cadangan elektrik',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUbCv5mqTqBzGy1Ap3hzpwWvNYkRj8j35eFKJfcC4AqKy7fBYy7kfG3IRTTONy_GkPRcuPqPDwO-kcHYhbSMvUwJlaZTCXPbYeVx1n9rV8S8x9Wa6X6OHWLh3-kL607V_2gva6tuoPxqE25JngrnDo8jO6kCG49fS_YBJ6WGDVShnGoJ-nvDBWeRSFiIUjFQrPBUMhYpqSQmbdB3pp643GQPTZIzod3-0G95K7Nz4K',
        caption: 'Uji kinerja beban setelah perbaikan selesai',
      },
    ],
  },
  {
    id: 'prj-4',
    slug: 'maintenance-alat-kesehatan',
    title: 'Maintenance Alat Kesehatan',
    category: 'Perbaikan',
    categorySlug: 'perbaikan',
    facility: '[Nama fasilitas ditampilkan jika sudah diizinkan]',
    summary: 'Dokumentasi pemeliharaan berkala untuk menjamin akurasi dan kesiapan pakai alat.',
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCMuCEs6d37t1eDg2Jb2Iq1pivuFFh-OQlOniIvlPpDekfeeQ5hm48JemwzmRutynbLlloVOezhkH53YoqzxexDJaqLqErHB_1MjeqGunQ7jM9IVstQS5dzfIO3-U_tgL2MDW7BFeAhh0_2-892V8vxUNviAVVnWhlHenPAJ1P0Gp551Xm7pYNfWp2U41zBtqeOawMeRgeGIr-cTGH4GeOKfsnGLDRgeCAjhIAQv7B0',
    scopeOfWork: [
      'Inspeksi fisik dan pembersihan sirkuit internal',
      'Pengukuran parameter operasional dan arus bocor',
      'Pembaruan kartu catatan pemeliharaan alat',
    ],
    challenge:
      'Penjadwalan inspeksi rutin tanpa mengganggu alur pelayanan pasien di fasilitas kesehatan.',
    solution:
      'Eksekusi terstruktur di luar jam sibuk dengan checklist preventif standar pabrikan.',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida/AEtjO1VUtMRb4E6APGHHBvw1x6CbYpEEGLwKvYlmXmVzF9XBd3myTJUixpJmec7L310G5rpMpxTkZqwBzXOF51VBAUxbZWZ4ih0IBsNu0xDoCShzuF36qBTqvFI4McOIFaCbKVavGYINURvcFzC3VwWYED6_IOtFdw1PJSqEQQijyx_44oZKvxsyISCxHpcan4QkymBmKowDcq2ofZFHG_Ba4uDzXpjoSxHRT2M75paKd6RwNPDny8YF4-D2BDBn',
        caption: 'Pembersihan dan pelumasan mekanisme gerak',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBYn_ZLRmysywxT4zonZt98ngCWhQ7_PGc8Vc2x9OEUZma_E9JBJuWLmCFiohdeDX-DHpubBmEMCHZNz2Z3c7UnxjMSz9jUvkPKtf8f5C39fZEEmnWbCG1odRUHQMJpLyKuYoWpdGNJYInZE-IVie9Nn8N-iTQtmjjyfZ0BhGB4wD_so5hmD5nS0H0ZADDb-0ul45-HuLTGBnR62opEaxpFuDDjw57YWXfCHSA3KR1',
        caption: 'Pengukuran nilai parameter tegangan kerja',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUbCv5mqTqBzGy1Ap3hzpwWvNYkRj8j35eFKJfcC4AqKy7fBYy7kfG3IRTTONy_GkPRcuPqPDwO-kcHYhbSMvUwJlaZTCXPbYeVx1n9rV8S8x9Wa6X6OHWLh3-kL607V_2gva6tuoPxqE25JngrnDo8jO6kCG49fS_YBJ6WGDVShnGoJ-nvDBWeRSFiIUjFQrPBUMhYpqSQmbdB3pp643GQPTZIzod3-0G95K7Nz4K',
        caption: 'Dokumentasi lembar ceklis hasil preventif',
      },
    ],
  },
  {
    id: 'prj-5',
    slug: 'renovasi-ruang-medis',
    title: 'Renovasi Ruang Medis',
    category: 'Renovasi',
    categorySlug: 'renovasi',
    facility: '[Nama fasilitas ditampilkan jika sudah diizinkan]',
    summary: 'Dokumentasi penataan dan renovasi ruang medis fasilitas kesehatan.',
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPrzUJe5tVTlQjB5l5hYoKz4wYrLVhdhGHpnvnpMsWe6LHDxqwhVTzUI6pfoO8oFjXzK3-_oCXL2NT3RMSVvHALwfU8TXs7Qr21wwmtvX70qO3MQR64Er5kmCCWGq5--B1UaWSCS2gjDTaJ3DfOWOexsvcMDgBX2-lTBPbeHrEg0xpO4Jye_PpvcxHRNWdlndcxaI1QL7tH3e2FSG9alBOEx6577y1ky7Skv003d3X',
    scopeOfWork: [
      'Renovasi partisi dan lantai anti-bakteri',
      'Penataan tata udara dan integrasi hepa filter',
      'Pemasangan instalasi kabel tertutup dan rapi',
    ],
    challenge:
      'Pengendalian debu dan partikel konstruksi di lingkungan fasilitas kesehatan yang aktif beroperasi.',
    solution:
      'Sistem isolasi debu bertingkat dan pengerjaan bertahap sesuai zona kebersihan.',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida/AEtjO1WbR-cMqAQ21DLgZ8XIPKVIMLQQg6YiO1weujVeO-RbY4omNOOA_owEWQX_FUgIYOzDQtV5I1NZs7LyKhZo2a4lk1NTd6FDNQvaIVSTf2j3Jh8fpqNgc3zUBmFri-0vuGS511NL8wwg2L1WCrP6I_YE_NPNTHH22_hlATk6VsAaJJEqYM7JC5MA90QJvLFl7YiO9GAmQPgB9ubzSfILsWAUnECHchnC-FHwwk7yc_gvwA',
        caption: 'Pemasangan lantai vinyl antibakteri seamless',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBYn_ZLRmysywxT4zonZt98ngCWhQ7_PGc8Vc2x9OEUZma_E9JBJuWLmCFiohdeDX-DHpubBmEMCHZNz2Z3c7UnxjMSz9jUvkPKtf8f5C39fZEEmnWbCG1odRUHQMJpLyKuYoWpdGNJYInZE-IVie9Nn8N-iTQtmjjyfZ0BhGB4wD_so5hmD5nS0H0ZADDb-0ul45-HuLTGBnR62opEaxpFuDDjw57YWXfCHSA3KR1',
        caption: 'Penyelesaian plafon dan sistem pencahayaan LED klinis',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUbCv5mqTqBzGy1Ap3hzpwWvNYkRj8j35eFKJfcC4AqKy7fBYy7kfG3IRTTONy_GkPRcuPqPDwO-kcHYhbSMvUwJlaZTCXPbYeVx1n9rV8S8x9Wa6X6OHWLh3-kL607V_2gva6tuoPxqE25JngrnDo8jO6kCG49fS_YBJ6WGDVShnGoJ-nvDBWeRSFiIUjFQrPBUMhYpqSQmbdB3pp643GQPTZIzod3-0G95K7Nz4K',
        caption: 'Ruang siap digunakan setelah proses disinfeksi',
      },
    ],
  },
  {
    id: 'prj-6',
    slug: 'konsultasi-dan-instalasi',
    title: 'Konsultasi dan Instalasi',
    category: 'Instalasi Alat',
    categorySlug: 'instalasi-alat',
    facility: '[Nama fasilitas ditampilkan jika sudah diizinkan]',
    summary: 'Dokumentasi pendampingan konsultasi dan instalasi alat kesehatan.',
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBau1K-1EwJnVXcmS2J5i9gE1gczlPh2n1R63ib3zRm1WvmY5nuU2Wz6hsPqr1jyQ9HvCTbRT-W_uCQ-WvrHufXWawl5kg3tHuBq_rV1PgJ0n9lIPi_vXcPDnu0Av4cw6vERrPmZv31LLTb7FKgeoyQUfv8bReUVu9O3Vb7F2JKUKSPiun-NyhmC3U76uvPRhg3HnrVM71eKoxlwS6xJFYG-eSnfzTlJFy__YaWklbJ',
    scopeOfWork: [
      'Studi kelayakan teknis pengadaan alat',
      'Penyusunan jadwal dan prosedur instalasi',
      'Pelatihan operasional dasar untuk teknisi fasilitas',
    ],
    challenge:
      'Menyelaraskan spesifikasi unit baru dengan instalasi mekanik dan beban kelistrikan eksisting.',
    solution:
      'Simulasi instalasi pra-pengiriman dan pendampingan transfer pengetahuan langsung kepada tim internal.',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida/AEtjO1UVSF3VNnSxpyCKe19BUcteahIk_Z0LgHIsol8y83bjYENvklBRWDN9SjHaTes4EB0T8ueFu75o8NkeotvyDyHanxPJNMP-ed7wauuCABnc4qqKouIxCE-7P5JFYRqoRgaABf0idg1Zf6TEyPDQ5P2zIebDdsDLJ7R3K22WajqtCaxyYe0Y_E-vmCiOPc1vDVAvHd-2ngBcjV4icsCKpQ3SNsehB-rWcfASPjlwA_JqD3-d54-K_oyazmYK',
        caption: 'Konsultasi langsung bersama tim manajemen fasilitas',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBYn_ZLRmysywxT4zonZt98ngCWhQ7_PGc8Vc2x9OEUZma_E9JBJuWLmCFiohdeDX-DHpubBmEMCHZNz2Z3c7UnxjMSz9jUvkPKtf8f5C39fZEEmnWbCG1odRUHQMJpLyKuYoWpdGNJYInZE-IVie9Nn8N-iTQtmjjyfZ0BhGB4wD_so5hmD5nS0H0ZADDb-0ul45-HuLTGBnR62opEaxpFuDDjw57YWXfCHSA3KR1',
        caption: 'Pemeriksaan manual teknis dan sertifikat pabrikan',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUbCv5mqTqBzGy1Ap3hzpwWvNYkRj8j35eFKJfcC4AqKy7fBYy7kfG3IRTTONy_GkPRcuPqPDwO-kcHYhbSMvUwJlaZTCXPbYeVx1n9rV8S8x9Wa6X6OHWLh3-kL607V_2gva6tuoPxqE25JngrnDo8jO6kCG49fS_YBJ6WGDVShnGoJ-nvDBWeRSFiIUjFQrPBUMhYpqSQmbdB3pp643GQPTZIzod3-0G95K7Nz4K',
        caption: 'Serah terima unit dan pelatihan dasar penggunaan',
      },
    ],
  },
];

