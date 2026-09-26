# SIMOBILE

Prototipe aplikasi kasir mobile bernama **SIMOBILE** untuk "Toko Makmur Jaya", dibangun menggunakan **Ionic Angular** (NgModules).

**Kami dari Kelompok:** Warnet  
**Untuk Keperluan:** Project UTS Hybrid Mobile Programming

## Anggota Kelompok

| No | Nama | NRP |
|----|------|-----|
| 1 | Michael Jaya | 160424096 |
| 2 | Richard Gerard Soentanto | 160424099 |
| 3 | Geraldine Steny Lae | 160424108 |
| 4 | Dennis Alexander Kamaruddin | 160424050 |

## Cara Instalasi & Menjalankan

### Prasyarat
- **Node.js** (versi 18 atau lebih baru)
- **Ionic CLI** — install dengan perintah:
  ```bash
  npm install -g @ionic/cli
  ```

### Langkah-langkah
1. Clone repository:
   ```bash
   git clone https://github.com/user/Warnet_SIMOBILE.git
   ```
2. Masuk ke folder project:
   ```bash
   cd Warnet_SIMOBILE
   ```
3. Install dependency:
   ```bash
   npm install
   ```
4. Jalankan aplikasi:
   ```bash
   ionic serve
   ```
5. Aplikasi akan terbuka otomatis di browser pada `http://localhost:8100`

## Daftar Fitur yang Diimplementasikan

| No | Fitur | Keterangan |
|----|-------|------------|
| 1 | **Navigasi Tab + Side Menu** | 5 tab (Dashboard, Produk, Tambah, Transaksi, Profil) + Side Menu (Dashboard, Produk, Pengaturan, Tentang Aplikasi) |
| 2 | **Dashboard** | Ringkasan total produk, jumlah transaksi hari ini, total pendapatan, dan produk terlaris |
| 3 | **Pencarian Produk Real-Time** | Filter produk langsung saat mengetik menggunakan `ngModel` (two-way binding) |
| 4 | **Filter Kategori** | Segment button untuk memfilter produk berdasarkan kategori (Sembako, Makanan, Minuman, dll) |
| 5 | **Detail Produk** | Navigasi ke halaman detail via route parameter `:id`, menampilkan harga beli, harga jual, keuntungan, dan sisa stok |
| 6 | **Property & Event Binding** | Gambar default (placeholder) jika produk belum ada foto dan tombol Keranjang otomatis disabled jika stok sudah habis |
| 7 | **Form Tambah & Edit Produk** | Reactive Form dengan validasi (nama wajib diisi, harga harus > 0, stok tidak boleh negatif) |
| 8 | **3 Angular Service** | `ProductService`, `CartService`, `TransactionService` — seluruh logika data dipisahkan dari komponen menggunakan service|
| 9 | **Keranjang Belanja** | Tambah/kurangi quantity, hapus item (swipe-to-delete), hitung total belanja otomatis |
| 10 | **Checkout & Konfirmasi** | Tombol konfirmasi transaksi dengan alert dialog, menyimpan transaksi ke riwayat |
| 11 | **Riwayat Transaksi** | Daftar transaksi yang pernah dilakukan, klik untuk melihat detail barang yang dibeli dan total pembayaran|
| 12 | **Custom Theme** | Palet warna hijau-kuning sesuai permintaan Toko Makmur Jaya |
| 13 | **Mode Gelap / Terang** | Toggle dark mode dan light mode di halaman Pengaturan |
| 14 | **Animasi** | Fade-in (elemen muncul perlahan) dan Slide-up (elemen naik dari bawah) |
| 15 | **Data Dummy Produk** | Variasi harga, stok (termasuk stok habis), dan 5 kategori berbeda |
| 16 | **Halaman Tentang** | Informasi aplikasi dan foto anggota kelompok |
| 17 | **Halaman Profil** | Informasi toko dan button logout |

## Teknologi yang Digunakan
- **Ionic Framework:** 9.0.3 (@ionic/angular)
- **Angular:** 22.x (@angular/cli)
- **Capacitor:** 8.5.2
- **Node.js:** v24.19.0
- **SCSS:** untuk styling

## Struktur Folder Utama

```
src/
├── app/
│   ├── services/          # 3 Service (product, cart, transaction)
│   ├── dashboard/         # Halaman ringkasan
│   ├── produk/            # Daftar produk + pencarian
│   ├── produkdetail/      # Detail produk (route param :id)
│   ├── produkform/        # Form tambah & edit (Reactive Forms)
│   ├── transaksi/         # Keranjang belanja & checkout
│   ├── riwayattransaksi/  # Riwayat transaksi
│   ├── pengaturan/        # Toggle mode gelap/terang
│   ├── tentang/           # Tentang aplikasi
│   ├── profil/            # Profil toko
│   ├── app.component.*    # Root component (menu + tabs)
│   └── app-routing.*      # Konfigurasi routing
├── assets/
│   └── placeholder.svg    # Gambar default produk
├── theme/
│   └── variables.scss     # Custom theme & dark mode
└── global.scss            # Animasi (fade-in, slide-up)
```
