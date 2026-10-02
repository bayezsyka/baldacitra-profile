# PT. Balda Citra Mandiri — Website Profil

Website resmi penyelenggara perjalanan ibadah Haji Khusus & Umrah PT. Balda Citra Mandiri (Balda Hajj & Umrah Indonesia).

## Tech Stack

- **Backend:** Laravel 12 (PHP 8.2+)
- **Frontend SPA Bridge:** Inertia.js (v3)
- **Frontend Framework:** React 19 (TypeScript)
- **Styling:** Tailwind CSS (v4) with custom Balda Royal Blue & Gold theme
- **Animations:** AOS (Animate On Scroll)
- **Database:** MySQL (`baldacitra_profile`)
- **Authentication & Dashboard:** Laravel Breeze / Fortify (React Inertia stack)
- **Icons:** Lucide React

## Struktur Halaman

- **Beranda (`/`):** Hero section, statistik pengalaman 30+ tahun, jadwal keberangkatan paket, dokumentasi galeri, nilai keunggulan layanan, dan CTA.
- **Paket Umrah (`/umrah`):** Program Umrah reguler & plus 12-15 hari, fasilitas hotel bintang 5, badge status ketersediaan.
- **Haji Khusus (`/haji`):** Rincian program haji khusus 2026 (±26 hari), legalitas resmi PIHK & HIMPUH, fasilitas eksklusif.
- **Galeri (`/galeri`):** Dokumentasi foto perjalanan jamaah dengan filter kategori (Umrah, Haji, Kegiatan Sosial) dan modal lightbox interaktif.
- **Profil Perusahaan (`/profil`):** Sejarah sejak 1996, legalitas resmi Kemenag RI, statistik capaian, visi dan misi perusahaan.
- **Kontak & Pendaftaran (`/kontak`):** Alamat kantor, saluran telepon & WhatsApp interaktif, serta form pesan yang langsung tersimpan ke database MySQL.
- **Dashboard Admin (`/dashboard`):** Panel kelola pesan masuk dari jamaah, data pendaftaran, dan pengaturan akun.

## Instalasi & Menjalankan Lokal

### 1. Prasyarat
- PHP >= 8.2 (ekstensi: pdo_mysql, mbstring, openssl, tokenizer, xml, ctype, json, bcmath)
- Composer >= 2.0
- Node.js >= 20.x & npm
- Server MySQL berjalan di `127.0.0.1:3306`

### 2. Konfigurasi Database
Buat database MySQL:
```sql
CREATE DATABASE baldacitra_profile CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 3. Setup Project
```bash
# Clone atau masuk ke direktori
cd apps/profile

# Salin file environment
cp .env.example .env

# Generate Application Key
php artisan key:generate

# Jalankan migrasi dan seeder database
php artisan migrate --seed
```

Default akun administrator yang dibuat oleh seeder:
- **Email:** `admin@baldacitra.com`
- **Password:** `password`

### 4. Menjalankan Server Development
```bash
# Jalankan Vite dev server untuk frontend (Hot Reload)
npm run dev

# Jalankan Laravel development server
php artisan serve
```
Akses aplikasi melalui browser di `http://localhost:8000`.

### 5. Build Produksi
```bash
npm run build
```

## Pengujian (Testing)
Jalankan pengujian unit dan fitur:
```bash
php artisan test
npm run types:check
```
