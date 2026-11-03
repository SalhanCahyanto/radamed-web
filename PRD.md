# PRODUCT REQUIREMENTS DOCUMENT (PRD)
# Website Company Profile B2B — PT Rahardia Abadi Medika (RADAMED)

## 1. Ringkasan Proyek
- **Nama Proyek:** Website Company Profile PT RADAMED
- **Nama Badan Usaha:** PT Rahardia Abadi Medika (RADAMED)
- **Tagline:** Perbaikan – Inspirasi – Kepercayaan
- **Positioning:** Mitra Ahli Instalasi dan Perbaikan Alat Kesehatan Anda
- **Jenis Produk:** Website informatif B2B (Company Profile), bukan aplikasi transaksi/operasional.
- **Target Audiens:** Manajemen rumah sakit, klinik, kepala laboratorium, dan instansi kesehatan di Indonesia.
- **Tech Stack:** Next.js (App Router, TypeScript), Tailwind CSS, Framer Motion (animasi ringan & menghormati `prefers-reduced-motion`), Sanity.io (Fase 2), Vercel.

## 2. Fase Eksekusi Saat Ini (Fase 1: Frontend & Slicing UI)
Saat ini pengembangan berada pada **Fase 1 (Inisialisasi & Implementasi UI/Desain)**.
- Seluruh halaman dibangun menggunakan komponen Next.js App Router yang modular dan *pixel-perfect* mengacu pada folder `/acuan-desain`.
- Data menggunakan *centralized mock data* (`src/data/mockData.ts`) yang strukturnya sudah disesuaikan dengan rancangan skema Sanity.io agar siap diintegrasikan pada Fase 2.
- Tidak boleh ada fitur di luar ruang lingkup (dilarang membuat sistem login, dashboard, CRM, ticketing, booking, e-commerce, atau form kontak kompleks).

## 3. Struktur Folder Referensi (`/acuan-desain`)
Agent WAJIB memeriksa folder `/acuan-desain` sebelum menulis kode UI untuk halaman mana pun:
- `/acuan-desain/DESIGN.md` -> Spesifikasi sistem desain (Clinical Precision & Corporate Modernism).
- `/acuan-desain/beranda.html` & `/acuan-desain/beranda.jpg` -> Acuan halaman Beranda (`/`).
- `/acuan-desain/tentang-kami.html` & `/acuan-desain/tentang-kami.jpg` -> Acuan halaman Tentang Kami (`/tentang-kami`).
- `/acuan-desain/layanan.html` & `/acuan-desain/layanan.jpg` -> Acuan halaman Layanan (`/layanan`).
- `/acuan-desain/portfolio.html` & `/acuan-desain/portfolio.jpg` -> Acuan halaman Daftar Portofolio (`/portfolio`).
- `/acuan-desain/detail-portfolio.html` & `/acuan-desain/detail-portfolio.jpg` -> Acuan halaman Detail Proyek (`/portfolio/[slug]`).
- `/acuan-desain/kontak.html` & `/acuan-desain/kontak.jpg` -> Acuan halaman Kontak (`/kontak`).

## 4. Sistem Desain (Ringkasan `DESIGN.md`)
Gaya visual mengusung **Clinical Corporate Modernism**: bersih, arsitektural, tanpa *drop shadow* tebal, tanpa gradien neon, dan tanpa elemen dekoratif berlebihan.
- **Palet Warna Utama:**
  - Primary Brand Blue: `#04467A` (Tombol utama, aksen aktif, ikon kunci)
  - Secondary Accent Blue: `#1E5C94` (Hover state, aksen sekunder)
  - Deep Navy Container: `#0B2343` (Hero banner halaman dalam, band CTA bawah, dan Global Footer)
  - Dark Headings: `#0F172A` / `#131B2E`
  - Light Blue Surface: `#EAF1FC` (Chip kategori, enclosure ikon)
  - Pale Background: `#F5F8FD` (Latar section berselang-seling)
  - Clean Canvas: `#FFFFFF` (Latar dasar & kartu)
  - Subtle Hairline Border: `#DCE5F0` (`1px solid` untuk pembatas kartu dan baris daftar)
- **Tipografi:**
  - Heading & Tombol: `Plus Jakarta Sans` (Weights: 600, 700; tracking `-0.01em` s/d `-0.02em`)
  - Body & Spesifikasi Teknis: `Inter` (Weights: 400, 600)
- **Layout & Spacing:**
  - Max-width container: `1200px`, 12-column grid (gutter `24px` di desktop, `16px` di mobile).
  - Jarak vertikal antar-section: `96px` (`py-24`) di desktop dan `64px` (`py-16`) di mobile.
  - Border Radius: `8px` (`rounded-lg`) untuk tombol, kartu, dan foto; `4px`–`6px` untuk tag/chip.

## 5. Arsitektur Informasi & Spesifikasi Halaman

### 5.1 Komponen Global (Navbar & Footer)
- **Navbar:** Latar putih (`#FFFFFF`) dengan border bawah tipis `#DCE5F0`, menampilkan logo RADAMED di kiri, menu tengah (`Beranda`, `Tentang Kami`, `Layanan`, `Portofolio`, `Kontak`) dengan indikator garis bawah aktif, serta tombol CTA kanan `Hubungi Kami` (`#04467A`). Responsif dengan menu mobile.
- **Footer:** Latar Deep Navy (`#0B2343`), 4 kolom:
  1. Logo RADAMED + Tagline *"Perbaikan – Inspirasi – Kepercayaan"* + deskripsi singkat.
  2. Navigasi Cepat (`Beranda`, `Tentang Kami`, `Layanan`, `Portofolio`, `Kontak`).
  3. Layanan (`Konsultasi & Instalasi`, `Maintenance Preventif`, `Service & Troubleshooting`, `Renovasi Ruang Medis`).
  4. Kontak Resmi (Telepon: `+62 821-3331-7627`, Email: `id.radamed@gmail.com`, Alamat: `Megah Residence Kav 5A, Jalan Bandungsari, Tambangan, Mijen, Kota Semarang, Jawa Tengah 50215`).

### 5.2 Halaman 1: Beranda (`/`)
- **Hero Section:** Latar Deep Navy (`#0B2343`), grid 2 kolom. Kiri: Headline *"Mitra ahli instalasi dan perbaikan alat kesehatan Anda."*, subheadline layanan spesialisasi radiologi, 2 tombol (*Hubungi Kami* putih & *Lihat Portofolio* outline), serta 3 metrik terpisah garis tipis (`3 Engineer` | `10+ Tahun pengalaman` | `Kantor di Semarang`). Kanan: Foto instalasi alat radiologi (`rounded-lg`).
- **Layanan Kami:** Latar putih, daftar baris arsitektural bernomor (`01` s/d `04`) dengan pemisah garis `#DCE5F0` dan panah kanan (`->`), diakhiri tautan *"Lihat semua layanan ->"*.
- **Pekerjaan Kami (Featured Portfolio):** Latar `#F5F8FD`, header dengan link *"Lihat semua portofolio ->"*, layout Bento/Grid asimetris (1 kartu besar di kiri: *Instalasi Alat Radiologi*, 2 kartu bertumpuk di kanan: *Instalasi Ruang Radiologi* & *Perbaikan Alat Kesehatan*). Semua kartu wajib bisa diklik menuju `/portfolio/[slug]`.
- **Pengenalan Singkat:** Latar putih, grid 2 kolom. Kiri: *"Dibangun dari pengalaman lapangan."*, narasi singkat 3 engineer berpengalaman >10 tahun, link *"Selengkapnya ->"* ke `/tentang-kami`. Kanan: Foto teknisi bekerja. Di bawahnya terdapat bar horizontal 5 Nilai Perusahaan yang dipisahkan garis vertikal tipis.
- **CTA Band:** Latar Deep Navy (`#0B2343`), teks *"Butuh instalasi, perawatan, atau perbaikan alat kesehatan? Hubungi tim kami."*, tombol `Telepon Sekarang` dan `Kirim Email`.

### 5.3 Halaman 2: Tentang Kami (`/tentang-kami`)
- **Page Header:** Latar Deep Navy (`#0B2343`), judul *"Tentang Kami"*, subjudul *"Perbaikan - Inspirasi - Kepercayaan"*.
- **Profil Perusahaan:** Grid 2 kolom. Kiri: Judul *"Dibangun dari pengalaman lapangan."*, deskripsi lengkap profil PT Rahardia Abadi Medika (RADAMED), dan bar 3 metrik (`3 Engineer` | `10+ Tahun pengalaman` | `Kantor di Semarang`). Kanan: Foto engineer di laboratorium dengan aksen frame belakang `#EAF1FC`.
- **Visi & Misi:** Latar `#F5F8FD`, 2 kolom sejajar dengan pembatas vertikal `#DCE5F0`.
  - **VISI:** *"Menjadi solusi terkemuka dalam menyediakan layanan alat kesehatan yang optimal."*
  - **MISI:** *"Memberikan layanan berkualitas tinggi dengan fokus pada keamanan pasien dan kepuasan pelanggan."*
- **Nilai Perusahaan:** Latar putih, judul *"Nilai Perusahaan"*, daftar editorial bernomor `01` sampai `05` dengan garis pembatas horizontal `#DCE5F0`:
  - `01` Komitmen terhadap Kualitas
  - `02` Inovasi dan Riset
  - `03` Kemitraan dengan Pelanggan
  - `04` Keberlanjutan Lingkungan
  - `05` Pelatihan dan Pengembangan
- **Bottom Banner:** Strip `#EAF1FC` berisi ringkasan 4 layanan dan tautan *"Lihat semua layanan ->"*.

### 5.4 Halaman 3: Layanan (`/layanan`)
- **Page Header:** Latar Deep Navy (`#0B2343`), judul *"Layanan Kami"*, subjudul *"Dari konsultasi hingga perawatan berkala, kami mendampingi kebutuhan alat dan ruang medis Anda."*
- **Daftar 4 Layanan Utama (Zig-Zag / Alternating Sections):** Setiap section bergantian latar (`#FFFFFF` dan `#F5F8FD`) dan posisi gambar (kiri-kanan):
  - `01` **Konsultasi dan Instalasi:** Pendampingan kebutuhan pengguna serta instalasi alat dan ruang medis sesuai standar yang dibutuhkan.
  - `02` **Maintenance Preventif:** Pemeliharaan berkala agar peralatan kesehatan tetap berfungsi optimal dan aman digunakan.
  - `03` **Service dan Troubleshooting:** Identifikasi gangguan dan perbaikan peralatan kesehatan, dengan pengalaman di bidang radiologi dan berbagai jenis alat.
  - `04` **Renovasi Fasilitas Medis:** Penataan dan renovasi ruang medis yang menyesuaikan kebutuhan pengguna dan peralatan.
  - Setiap item memiliki tautan CTA *"Hubungi kami tentang layanan ini ->"*.

### 5.5 Halaman 4: Portofolio (`/portfolio`)
- **Page Header:** Latar Deep Navy (`#0B2343`), judul *"Portofolio"*, subjudul *"Dokumentasi pekerjaan instalasi, perbaikan, dan penataan ruang medis yang kami kerjakan."*
- **Filter Kategori:** Bar tab minimalis (`Semua`, `Instalasi Alat`, `Instalasi Ruang`, `Perbaikan`, `Renovasi`) dengan indikator garis bawah biru pada tab aktif.
- **Grid Proyek:** Latar `#F5F8FD`, grid 3 kolom di desktop (1 kolom di mobile). Setiap kartu berlatar `#FFFFFF`, border `1px solid #DCE5F0`, `rounded-lg`, memuat: foto cover, label kategori uppercase (`12px`), judul proyek, deskripsi singkat, dan ikon panah `->` di kanan bawah. Seluruh kartu adalah `Link` aktif menuju `/portfolio/[slug]`.

### 5.6 Halaman 5: Detail Portofolio (`/portfolio/[slug]`)
- **Header Detail:** Latar Deep Navy (`#0B2343`), navigasi kembali (`<- Kembali ke Portofolio`) di kiri dan *breadcrumb* (`Portofolio / [Judul Proyek]`) di kanan. Menampilkan Judul Proyek, ringkasan satu kalimat, dan label nama fasilitas.
- **Hero Image Proyek:** Gambar utama berukuran besar (`1200px` container) yang menjorok (*overlap*) dari batas bawah header navy ke area konten putih, `rounded-lg`.
- **Info Lingkup & Kategori:** 2 kolom di bawah foto utama dengan pembatas vertikal (`Lingkup Pekerjaan` berupa bullet list & `Kategori Layanan`).
- **Tantangan & Solusi:** Band berlatar `#F5F8FD` berisi 2 kolom sejajar: **Tantangan** di kiri dan **Solusi dan Proses** di kanan.
- **Galeri Dokumentasi:** Judul *"Galeri"*, layout foto asimetris (1 foto besar di kiri, 2 foto bertumpuk di kanan) lengkap dengan `alt` text dan *caption* di bawah tiap foto (`Keterangan foto`).
- **Proyek Lainnya & Bottom CTA:** Band `#F5F8FD` menampilkan 3 kartu proyek terkait + link *"Lihat semua portofolio ->"*, diikuti band putih bersih di bagian bawah dengan teks *"Butuh pekerjaan serupa?"* dan tombol `Hubungi Kami`.
- **Penanganan 404:** Jika `slug` tidak ditemukan, panggil `notFound()` dari Next.js.

### 5.7 Halaman 6: Kontak (`/kontak`)
- **Page Header:** Latar Deep Navy (`#0B2343`), judul *"Hubungi Kami"*, subjudul *"Sampaikan kebutuhan instalasi, perawatan, atau perbaikan alat kesehatan Anda."*
- **Kanal Kontak Langsung:** Latar putih, grid 2 kolom dengan pembatas vertikal `#DCE5F0`:
  - Kolom Kiri (Telepon): Ikon telepon, label `TELEPON`, nomor besar `+62 821-3331-7627`, tombol utama `Telepon Sekarang` (`tel:+6282133317627` / WhatsApp).
  - Kolom Kanan (Email): Ikon amplop, label `EMAIL`, alamat besar `id.radamed@gmail.com`, tombol outline `Kirim Email ->` (`mailto:id.radamed@gmail.com`).
- **Alamat Kantor & Peta:** Band `#F5F8FD`, grid 2 kolom. Kiri: Judul *"Alamat Kantor"*, alamat lengkap di Mijen, Kota Semarang, dan tautan *"Buka di Peta ->"*. Kanan: Visual/embed peta lokasi dengan pin penanda `Megah Residence Kav 5A, Mijen`.

## 6. Aturan Keakuratan Konten (Wajib Dipatuhi Agent)
- DILARANG mengarang klaim sertifikasi (seperti ISO 13485), klaim SLA waktu respons, atau statistik pasar yang tidak terverifikasi.
- DILARANG mengarang nama rumah sakit/klien tanpa izin; gunakan label netral sesuai desain jika nama instansi belum dipublikasikan.