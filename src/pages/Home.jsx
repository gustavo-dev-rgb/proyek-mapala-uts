import React from "react";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Beranda Utama Mapala</h1>
        <p>Selamat datang di website resmi Mahasiswa Pecinta Alam.</p>
      </section>

      {/* Ringkasan Profil */}
      <section className="profile-summary">
        <h2>Ringkasan Profil</h2>
        <div className="content-group">
          <img
            src="/Minecraft wallpaper.jpeg"
            alt="Profil Mapala"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "8px",
              margin: "10px 0",
            }}
          />
          <p>
            Mahasiswa Pecinta Alam (Mapala) merupakan wadah resmi bagi mahasiswa
            untuk mengembangkan jiwa kepemimpinan, kecintaan terhadap lingkungan
            hidup, serta ketangguhan mental dan fisik melalui kegiatan
            penjelajahan alam bebas seperti pendakian gunung, susur gua, panjat
            tebing, dan konservasi alam.
          </p>
        </div>
      </section>

      {/* Ringkasan Proyek & Event */}
      <section className="events-summary">
        <h2>Ringkasan Proyek & Event</h2>
        <div className="content-group">
          <img
            src="/Arung jeram.jpeg"
            alt="Arung Jeram Mapala"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "8px",
              margin: "10px 0",
            }}
          />
          <p>
            Kami secara rutin mengadakan berbagai kegiatan positif, mulai dari
            ekspedisi ilmiah, aksi penanaman pohon (reboisasi), hingga pelatihan
            dasar kepecintaalaman bagi anggota baru.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
