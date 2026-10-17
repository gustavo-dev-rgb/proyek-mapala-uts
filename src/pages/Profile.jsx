import React from "react";

export default function Profile() {
  return (
    <div className="profile-page">
      <h1>Profil Organisasi</h1>

      <section id="kartu-profil">
        <h2>Kartu Profil</h2>
        <p>[Placeholder: Informasi singkat organisasi / Logo / Badge]</p>
      </section>

      <section id="visi-misi">
        <h2>Visi & Misi</h2>
        <p>[Placeholder: Teks Visi dan Misi Mapala]</p>
      </section>

      <section id="pengurus-inti">
        <h2>Pengurus Inti</h2>
        <p>[Placeholder: Daftar pengurus menggunakan komponen Card]</p>
      </section>

      <section id="about-us">
        <h2>About Us</h2>
        <p>[Placeholder: Sejarah singkat dan latar belakang Mapala]</p>
      </section>
    </div>
  );
}
