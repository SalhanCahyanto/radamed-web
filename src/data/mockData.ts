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
  aspect?: 'landscape' | 'portrait';
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
  heroImage: string;
  aboutImage: string;
  aboutPortraitImage: string;
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
  heroImage: '/images/portfolio/rsud-merah-putih-magelang/ruang-panel-dan-pintu-dalam.jpeg',
  aboutImage: '/images/portfolio/rsud-margono-soekarjo/pemasangan-panel-dinding-timbal.jpeg',
  aboutPortraitImage: '/images/portfolio/rsud-kardinah-tegal/instalasi-kabel-daya-dan-stopkontak.jpeg',
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
      'Pendampingan mulai dari asesmen kebutuhan teknis, perencanaan tata ruang proteksi radiasi, pemasangan panel daya, hingga instalasi pintu dan perangkat ruang medis sesuai ketentuan keselamatan fasilitas kesehatan.',
    image: '/images/portfolio/rsud-merah-putih-magelang/ruang-panel-dan-pintu-dalam.jpeg',
  },
  {
    id: 'srv-2',
    number: '02',
    title: 'Maintenance Preventif',
    slug: 'maintenance-preventif',
    summary: 'Pemeliharaan berkala agar peralatan kesehatan tetap berfungsi optimal dan aman digunakan.',
    fullDescription:
      'Pemeriksaan terjadwal pada komponen mekanik, kelistrikan, pintu pelindung radiasi, dan instrumen penunjang ruang pemeriksaan agar peralatan tetap siap pakai dan akurat.',
    image: '/images/portfolio/rsud-merah-putih-magelang/pintu-anti-radiasi.jpeg',
  },
  {
    id: 'srv-3',
    number: '03',
    title: 'Service dan Troubleshooting',
    slug: 'service-dan-troubleshooting',
    summary: 'Identifikasi gangguan dan perbaikan peralatan kesehatan, dengan pengalaman di bidang radiologi dan berbagai jenis alat.',
    fullDescription:
      'Penelusuran gangguan kelistrikan, kontrol panel, dan fungsi mekanis unit alat kesehatan maupun sistem instalasi ruang radiologi agar operasional kembali berjalan normal.',
    image: '/images/portfolio/rsud-margono-soekarjo/instalasi-rangka-pintu-dan-panel-listrik.jpeg',
  },
  {
    id: 'srv-4',
    number: '04',
    title: 'Renovasi Fasilitas Medis',
    slug: 'renovasi-fasilitas-medis',
    summary: 'Penataan dan renovasi ruang medis yang menyesuaikan kebutuhan pengguna dan peralatan.',
    fullDescription:
      'Pekerjaan renovasi ruang radiologi mencakup perakitan rangka metal, pelapisan lembaran timbal (Pb) proteksi radiasi, pembuatan pintu anti-radiasi, instalasi tata udara, kelistrikan, hingga finishing interior ruang.',
    image: '/images/portfolio/rsud-merah-putih-magelang/interior-dinding-biru-dan-mural.jpeg',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'prj-margono-soekarjo',
    slug: 'renovasi-ruang-dan-pintu-anti-radiasi-rsud-prof-dr-margono-soekarjo',
    title: 'Pembuatan Pintu & Renovasi Ruang Anti-Radiasi RSUD Prof. Dr. Margono Soekarjo',
    category: 'Instalasi Ruang',
    categorySlug: 'instalasi-ruang',
    facility: 'RSUD Prof. Dr. Margono Soekarjo',
    summary:
      'Pembuatan dan pemasangan pintu geser anti-radiasi, pelapisan lembaran timbal dinding penuh, penataan panel listrik, dan finishing interior ruang radiologi.',
    coverImage: '/images/portfolio/rsud-margono-soekarjo/pemasangan-panel-dinding-timbal.jpeg',
    scopeOfWork: [
      'Pembuatan, pemasangan, dan finishing pintu geser anti-radiasi berlapis timbal',
      'Perakitan rangka hollow metal dan pelapisan lembaran timbal (Pb) dari lantai hingga plafon',
      'Pemasangan boks panel listrik, jalur stopkontak dinding, lampu indikator radiasi, dan gauge kontrol',
      'Penutupan papan pelapis, pendempulan sambungan, serta finishing wallcovering interior ruang',
    ],
    challenge:
      'Melapisi seluruh bidang dinding dan akses pintu dengan lembaran timbal (Pb) secara rapat di sekitar posisi unit pendingin udara, bukaan pintu geser berbobot berat, serta sejumlah titik kabel listrik.',
    solution:
      'Tim RADAMED merakit rangka kisi baja ringan untuk menopang lembaran timbal dan papan penutup secara merata, menanam jalur kabel daya dan boks panel di sisi depan lapisan timbal agar proteksi tidak terputus, lalu menuntaskan pendempulan dan pemasangan wallcovering ruang.',
    gallery: [
      {
        url: '/images/portfolio/rsud-margono-soekarjo/pemasangan-panel-dinding-timbal.jpeg',
        caption: 'Tim teknisi memasang papan penutup dan mengerjakan tahap finishing di atas dinding yang telah dilapisi lembaran timbal anti-radiasi.',
        aspect: 'landscape',
      },
      {
        url: '/images/portfolio/rsud-margono-soekarjo/rangka-metal-dan-timbal-penuh.jpeg',
        caption: 'Pemasangan rangka kisi metal dan pelapisan penuh lembaran timbal (Pb) dari lantai hingga batas plafon.',
        aspect: 'landscape',
      },
      {
        url: '/images/portfolio/rsud-margono-soekarjo/instalasi-rangka-pintu-dan-panel-listrik.jpeg',
        caption: 'Pemasangan rangka kusen pintu ruang radiologi lengkap dengan boks panel kontrol listrik dan titik jalur daya.',
        aspect: 'landscape',
      },
      {
        url: '/images/portfolio/rsud-margono-soekarjo/pintu-anti-radiasi.jpeg',
        caption: 'Hasil akhir pembuatan dan pemasangan pintu geser anti-radiasi, lengkap dengan handle stainless steel, lampu indikator merah, dan dua gauge kontrol di atas kusen.',
        aspect: 'portrait',
      },
      {
        url: '/images/portfolio/rsud-margono-soekarjo/persiapan-material-timbal-dan-rangka.jpeg',
        caption: 'Persiapan gulungan serta lembaran timbal (Pb) anti-radiasi, papan penutup, dan rangka hollow metal di area kerja.',
        aspect: 'landscape',
      },
      {
        url: '/images/portfolio/rsud-margono-soekarjo/pelapisan-lembaran-timbal-dinding.jpeg',
        caption: 'Pelapisan lembaran timbal rapat sambungan pada bidang dinding dan penyesuaian di sekitar dudukan unit pendingin ruangan.',
        aspect: 'landscape',
      },
      {
        url: '/images/portfolio/rsud-margono-soekarjo/finishing-perekat-dinding-atas.jpeg',
        caption: 'Aplikasi perekat dan perataan permukaan dinding bagian atas di atas lapisan timbal proteksi radiasi.',
        aspect: 'landscape',
      },
      {
        url: '/images/portfolio/rsud-margono-soekarjo/pendempulan-sambungan-dan-stopkontak.jpeg',
        caption: 'Pendempulan sambungan papan penutup gypsum serta perapihan jalur kabel untuk titik stopkontak dinding.',
        aspect: 'landscape',
      },
      {
        url: '/images/portfolio/rsud-margono-soekarjo/persiapan-finishing-wallcovering.jpeg',
        caption: 'Persiapan permukaan dinding rata dan lembar mural sebelum pemasangan pelapis interior ruang.',
        aspect: 'portrait',
      },
      {
        url: '/images/portfolio/rsud-margono-soekarjo/hasil-akhir-wallcovering-ruang.jpeg',
        caption: 'Hasil akhir pemasangan wallcovering ruang pemeriksaan lengkap dengan penataan dua unit pendingin udara.',
        aspect: 'portrait',
      },
    ],
  },
  {
    id: 'prj-merah-putih-magelang',
    slug: 'pintu-dan-ruang-anti-radiasi-rsud-merah-putih-magelang',
    title: 'Pintu Anti-Radiasi & Renovasi Ruang Radiologi RSUD Merah Putih Kabupaten Magelang',
    category: 'Renovasi',
    categorySlug: 'renovasi',
    facility: 'RSUD Merah Putih Kabupaten Magelang',
    summary:
      'Pembuatan serta finishing pintu geser dan pintu swing anti-radiasi, pelapisan timbal dinding, instalasi panel listrik 3-fase R-S-T, dan finishing interior ruang.',
    coverImage: '/images/portfolio/rsud-merah-putih-magelang/ruang-panel-dan-pintu-dalam.jpeg',
    scopeOfWork: [
      'Pembuatan, pemasangan, dan finishing pintu geser ganda serta pintu swing anti-radiasi',
      'Renovasi, pemasangan timbal (Pb) dinding penuh, dan pengecatan finishing klinis',
      'Instalasi panel distribusi listrik 3-fase R-S-T, lampu indikator radiasi, dan wastafel ruang',
      'Pemasangan AC ruangan dan wallcovering mural Candi Borobudur',
    ],
    challenge:
      'Menyatukan instalasi dua jenis pintu anti-radiasi (pintu geser utama pasien dan pintu swing akses petugas) bersama jalur panel listrik 3-fase dan wastafel medis di dalam satu ruang berstandar klinis.',
    solution:
      'Tim RADAMED memasang rel penutup pintu geser lengkap dengan indikator radiasi di atas kusen, menata panel 3-fase R-S-T dalam casing pelindung rapi di samping pintu, serta menyelesaikan permukaan dinding dengan cat biru muda mengilap dan mural lokal.',
    gallery: [
      {
        url: '/images/portfolio/rsud-merah-putih-magelang/ruang-panel-dan-pintu-dalam.jpeg',
        caption: 'Sisi dalam ruang radiologi dengan pintu geser anti-radiasi, panel distribusi listrik 3-fase R-S-T, dan wastafel medis.',
        aspect: 'landscape',
      },
      {
        url: '/images/portfolio/rsud-merah-putih-magelang/pintu-anti-radiasi.jpeg',
        caption: 'Pembuatan, pemasangan, dan finishing pintu geser anti-radiasi berlapis timbal lengkap dengan rel penutup, handle stainless steel, dan lampu indikator radiasi.',
        aspect: 'landscape',
      },
      {
        url: '/images/portfolio/rsud-merah-putih-magelang/interior-dinding-biru-dan-mural.jpeg',
        caption: 'Hasil renovasi dan finishing cat dinding biru klinis, plafon akustik dengan downlight, AC, dan mural ruang.',
        aspect: 'landscape',
      },
      {
        url: '/images/portfolio/rsud-merah-putih-magelang/pintu-akses-dan-kontrol-ruang.jpeg',
        caption: 'Finishing pintu swing anti-radiasi akses petugas, saklar kontrol pencahayaan dan AC, serta area wastafel.',
        aspect: 'landscape',
      },
      {
        url: '/images/portfolio/rsud-merah-putih-magelang/finishing-dinding-dan-wastafel.jpeg',
        caption: 'Pengecekan pemasangan wastafel dan perapihan area pintu akses petugas pada dinding proteksi timbal.',
        aspect: 'landscape',
      },
      {
        url: '/images/portfolio/rsud-merah-putih-magelang/dinding-proteksi-siap-alat.jpeg',
        caption: 'Bidang dinding ruang pemeriksaan yang telah rampung dilapis timbal (Pb), gypsum, dan pengecatan finishing.',
        aspect: 'landscape',
      },
      {
        url: '/images/portfolio/rsud-merah-putih-magelang/finishing-mural-borobudur.jpeg',
        caption: 'Finishing dinding mural Candi Borobudur lengkap dengan dua unit pendingin ruangan dan baris stopkontak tertanam rapi.',
        aspect: 'landscape',
      },
    ],
  },
  {
    id: 'prj-kardinah-tegal',
    slug: 'renovasi-timbal-anti-radiasi-rsud-kardinah-tegal',
    title: 'Renovasi & Pelapisan Timbal Anti-Radiasi RSUD Kardinah Kota Tegal',
    category: 'Renovasi',
    categorySlug: 'renovasi',
    facility: 'RSUD Kardinah, Kota Tegal',
    summary:
      'Renovasi ruang radiologi mencakup perakitan rangka baja ringan, pelapisan timbal (Pb) penuh pada dinding dan jendela kaca operator, penarikan jalur kabel daya, dan finishing mural.',
    coverImage: '/images/portfolio/rsud-kardinah-tegal/pemasangan-mural-finishing.jpeg',
    scopeOfWork: [
      'Perakitan rangka kisi baja ringan dan pemasangan lembaran timbal (Pb) di seluruh sisi dinding',
      'Pelapisan timbal anti-radiasi pada dinding sekitar pintu akses dan jendela kaca operator',
      'Penarikan kabel daya berkapasitas besar serta pemasangan kotak inbow stopkontak',
      'Penutupan dinding dan finishing mural ruang pemeriksaan',
    ],
    challenge:
      'Menjaga sambungan lembaran timbal tetap rapat di bagian sudut dinding dan sekeliling jendela pengamatan ruang operator, sambil menempatkan banyak jalur kabel listrik bertegangan.',
    solution:
      'Mengunci lembaran timbal pada rangka metal secara bertumpuk di setiap pertemuan sudut dan kusen jendela operator, lalu merangkai seluruh kabel daya serta boks stopkontak pada ruang rongga rangka di depan bidang timbal sebelum penutupan panel.',
    gallery: [
      {
        url: '/images/portfolio/rsud-kardinah-tegal/pemasangan-mural-finishing.jpeg',
        caption: 'Pemasangan dan perapihan akhir dinding mural panorama pada ruang pemeriksaan lengkap dengan dua unit AC.',
        aspect: 'landscape',
      },
      {
        url: '/images/portfolio/rsud-kardinah-tegal/hasil-finishing-ruang-radiologi.jpeg',
        caption: 'Tampilan dinding ruang radiologi yang telah tertutup panel pelindung timbal dan selesai dilapis mural interior.',
        aspect: 'landscape',
      },
      {
        url: '/images/portfolio/rsud-kardinah-tegal/tim-perakitan-rangka-timbal.jpeg',
        caption: 'Tim teknisi bekerja di dalam ruang merakit rangka kisi baja ringan dan lembaran timbal (Pb) di ketiga sisi dinding.',
        aspect: 'portrait',
      },
      {
        url: '/images/portfolio/rsud-kardinah-tegal/instalasi-kabel-daya-dan-stopkontak.jpeg',
        caption: 'Pemasangan jalur kabel daya dan deretan kotak inbow stopkontak pada rangka di depan lapisan lembaran timbal.',
        aspect: 'portrait',
      },
      {
        url: '/images/portfolio/rsud-kardinah-tegal/pintu-dan-jendela-kaca-operator.jpeg',
        caption: 'Pelapisan penuh lembaran timbal anti-radiasi di area pintu akses ruang dan sekeliling jendela kaca ruang operator.',
        aspect: 'portrait',
      },
      {
        url: '/images/portfolio/rsud-kardinah-tegal/detail-sambungan-sudut-timbal.jpeg',
        caption: 'Detail sambungan sudut ruangan berproteksi timbal (Pb) yang terkunci rapat dengan kisi rangka metal.',
        aspect: 'portrait',
      },
    ],
  },
];
