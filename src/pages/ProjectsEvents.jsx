import React from "react";

function ProjectsEvents() {
  return (
    <div className="proyek-container">
      {/* Header Halaman */}
      <section className="proyek-header">
        <h1>Proyek & Kegiatan Mapala</h1>
        <p>
          Rangkaian aksi nyata, ekspedisi alam bebas, serta program pelestarian
          lingkungan yang kami laksanakan secara berkelanjutan.
        </p>
      </section>

      {/* Program Unggulan */}
      <section className="proyek-section">
        <h2>Program Unggulan</h2>
        <div className="proyek-grid">
          <div className="proyek-card">
            <img
              src="/Reboisasi.jpeg"
              alt="Konservasi & Reboisasi Hutan"
              style={{
                width: "100%",
                maxWidth: "300px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <h3>Konservasi & Reboisasi Hutan</h3>
            <p>
              Aksi penanaman ribuan bibit pohon di kawasan lereng gunung dan
              pesisir guna mencegah erosi, menjaga sumber mata air, serta
              memulihkan ekosistem alam yang rusak.
            </p>
          </div>

          <div className="proyek-card">
            <img
              src="/Api unggun.jpeg"
              alt="Pendidikan & Pelatihan Dasar (DIKSAR)"
              style={{
                width: "100%",
                maxWidth: "300px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <h3>Pendidikan & Pelatihan Dasar (DIKSAR)</h3>
            <p>
              Program pembinaan rutin bagi calon anggota baru mencakup navigasi
              darat, teknik bertahan hidup (survival), pertolongan pertama (P3K
              lapangan), dan etika lingkungan.
            </p>
          </div>
        </div>
      </section>

      {/* Kegiatan Mendatang */}
      <section className="proyek-section">
        <h2>Kegiatan Mendatang</h2>
        <div className="proyek-grid">
          <div className="proyek-card highlight">
            <img
              src="/Hiking.jpeg"
              alt="Pendakian Bersama & Pendataan Jalur"
              style={{
                width: "100%",
                maxWidth: "300px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <h3>Pendakian Bersama & Pendataan Jalur</h3>
            <p>
              <strong>Waktu:</strong> Semester Ini
            </p>
            <p>
              Pendakian eksplorasi sekaligus pemetaan kembali kondisi jalur
              pendakian dan penandaan titik-titik rawan longsor.
            </p>
          </div>
        </div>
      </section>

      {/* Arsip / Galeri Singkat */}
      <section className="proyek-section">
        <h2>Arsip & Pencapaian</h2>
        <p>
          Seluruh rekam jejak kegiatan, laporan hasil ekspedisi, dan dokumentasi
          lapangan tersimpan dalam arsip resmi organisasi sebagai bahan evaluasi
          serta pembelajaran bagi generasi penerus.
        </p>
      </section>
    </div>
  );
}

export default ProjectsEvents;
