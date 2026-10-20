MAPALA Website

Website Unit kegiatan Mahasiswa Pecinta Alam (MAPALA) yang dibuat dengan React, Vite, dan React Router. Tiap halaman berisi kartu section yang bisa digeser kiri dan kanan. untuk mejalankan menjalankan program tersebut secara lokal, anda dapat mengikuti langkah langkah berikut 

Persyaratan

- [Node.js](https://nodejs.org/) versi 20.19 atau lebih baru (atau 22.12+), sesuai kebutuhan Vite 8
- npm (ikut terpasang bersama Node.js)
- Koneksi internet, karena font Roboto Condensed dimuat dari Google Fonts

Cek versi Node.js dengan:

```bash
node -v
```

Cara menjalankan secara lokal

1. Clone repositori dan masuk ke foldernya:

```bash
   git clone <https://github.com/gustavo-dev-rgb/proyek-mapala-uts>
   cd proyek-mapala-uts
```

2. Pasang dependensi:

```bash
   npm install
```

3. Jalankan server pengembangan:

```bash
   npm run dev
```

4. Buka alamat yang tampil di terminal, biasanya http://localhost:5173.

Tekan `Ctrl + C` di terminal untuk menghentikan server.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
