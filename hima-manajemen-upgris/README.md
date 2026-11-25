# Website HIMA Manajemen UPGRIS – Kabinet Cakra Samudra

Website multi-halaman bertema glassmorphism untuk Himpunan Mahasiswa Manajemen
Universitas PGRI Semarang. Dibuat dengan HTML, CSS, dan JavaScript biasa
(tanpa framework dan tanpa proses build), jadi bisa langsung dipasang di GitHub Pages.

## Isi folder

```
index.html          Beranda
filosofi.html       Filosofi logo
struktur.html       Struktur dan program (tab pengurus harian + 5 bidang)
dokumentasi.html    Galeri dokumentasi + lightbox
kontak.html         Instagram, TikTok, YouTube, email
css/style.css       Semua tampilan (warna ada di bagian :root)
js/data.js          Data pengurus, program kerja, dan daftar foto dokumentasi
js/script.js        Tab bidang, galeri, menu mobile, tema terang/gelap
assets/img/         Semua foto dan logo
.nojekyll           Menonaktifkan Jekyll di GitHub Pages
```

## Cara mengunggah ke GitHub Pages

1. Buat akun di https://github.com lalu klik **New repository**.
   Beri nama, misalnya `hima-manajemen-upgris`, pilih **Public**, klik **Create repository**.
   (Kalau ingin alamat `username.github.io`, nama repo harus persis `username.github.io`.)
2. Ekstrak file ZIP ini. Di halaman repo, klik **Add file → Upload files**,
   lalu seret **isi** folder (`index.html`, folder `css`, `js`, `assets`, dan lainnya),
   bukan folder induknya. Klik **Commit changes**.
   Pastikan `index.html` berada di lapisan paling luar repo.
3. Buka **Settings → Pages**. Pada *Build and deployment* pilih
   **Deploy from a branch**, branch **main**, folder **/ (root)**, lalu **Save**.
4. Tunggu 1–2 menit. Alamat website muncul di halaman yang sama:
   `https://username.github.io/nama-repo/`

Lewat terminal (opsional):

```bash
git init
git add .
git commit -m "Website HIMA Manajemen UPGRIS"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

## Cara mengubah isi

- **Nama, jabatan, program, dan agenda kerja:** edit `js/data.js`.
- **Foto pengurus dan dokumentasi:** ganti file di `assets/img/` dengan nama yang sama,
  atau tambahkan file baru lalu daftarkan namanya di `js/data.js`.
- **Judul foto dokumentasi:** edit baris `const G=[...]` di `js/data.js`.
- **Warna:** ubah variabel di bagian `:root` pada `css/style.css`
  (`--goldfill` untuk emas, `--bg1` dan `--bg2` untuk latar).
- **Teks halaman, link media sosial, dan email:** edit file `.html` yang bersangkutan
  (kontak ada di `kontak.html`).
- Gunakan nama file huruf kecil tanpa spasi. GitHub Pages membedakan huruf besar dan kecil.

## Catatan

- Font Poppins dan Sora dimuat dari Google Fonts, jadi perlu koneksi internet.
  Tanpa internet, tampilan memakai font bawaan perangkat.
- Pilihan tema terang/gelap disimpan di browser pengunjung.
- Website ini memuat foto dan nama pengurus. Pastikan semua pihak setuju
  sebelum dipublikasikan.
