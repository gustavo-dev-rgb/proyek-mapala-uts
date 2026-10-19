import React from "react";

function Profil() {
  return (
    <div className="profil-container">
      {/* Header Profil */}
      <section className="profil-header">
        <h1>Profil Organisasi Mapala</h1>
        <p>
          Wadah pembinaan mahasiswa dalam bidang kepecintaalaman, pelestarian
          lingkungan, dan kemanusiaan.
        </p>
      </section>

      {/* Sejarah Singkat */}
      <section className="profil-sejarah">
        <h2>Sejarah Singkat</h2>
        <p>
          Mapala didirikan sebagai wadah bagi para mahasiswa yang memiliki
          kepedulian tinggi terhadap kelestarian alam bebas dan kegiatan luar
          ruang. Sejak berdirinya, organisasi ini aktif melahirkan kader-kader
          petualang yang tidak hanya tangguh secara fisik di medan ekstrem,
          tetapi juga memiliki kepekaan sosial dan kepedulian ekologis.
        </p>
      </section>

      {/* Visi & Misi */}
      <section className="profil-visi-misi">
        <h2>Visi & Misi</h2>

        <div className="visi-box">
          <h3>Visi</h3>
          <p>
            Menjadi organisasi kemahasiswaan yang unggul, berkarakter, serta
            terdepan dalam pelestarian alam dan kepecintaalaman di tingkat
            nasional.
          </p>
        </div>

        <div className="misi-box">
          <h3>Misi</h3>
          <ul>
            <li>
              Mengembangkan potensi dan ketrampilan anggota dalam kegiatan alam
              bebas (mountaineering, caving, rafting, climbing).
            </li>
            <li>
              Menggalakkan aksi nyata konservasi lingkungan dan edukasi
              masyarakat mengenai pentingnya menjaga ekosistem.
            </li>
            <li>
              Membentuk mental kepemimpinan, loyalitas, dan rasa persaudaraan
              yang erat antaranggota.
            </li>
            <li>
              Menyediakan bantuan kemanusiaan dan tanggap darurat bencana alam.
            </li>
          </ul>
        </div>
      </section>

      {/* Pengurus Inti: Ketua & Wakil Ketua */}
      <section className="profil-pengurus">
        <h2>Pengurus Inti</h2>
        <div className="pengurus-list">
          <div className="pengurus-card">
            <img
              src="/Yudha.png"
              alt="Yudha - Ketua Umum"
              style={{
                width: "100%",
                maxWidth: "200px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <h3>Ketua Umum</h3>
            <p>Yudha</p>
          </div>

          <div className="pengurus-card">
            <img
              src="/Shindo.jpeg"
              alt="Shindo - Wakil Ketua"
              style={{
                width: "100%",
                maxWidth: "200px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <h3>Wakil Ketua</h3>
            <p>Shindo</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profil;
