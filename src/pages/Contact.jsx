import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      {/* Header Kontak */}
      <section className="contact-header">
        <h1>Hubungi & Bergabung Bersama Kami</h1>
        <p>
          Ingin bergabung dengan Mapala, mengajukan kolaborasi, atau sekadar
          bertanya mengenai kegiatan kami? Simak informasi di bawah ini.
        </p>
      </section>

      {/* Foto Ilustrasi Kontak */}
      <section className="contact-image-section">
        <img
          src="/Hompimpa.jpeg"
          alt="Hompimpa Mapala"
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        />
      </section>

      {/* Informasi Sekretariat & Kontak */}
      <section className="contact-info">
        <h2>Sekretariat & Kontak</h2>
        <p>
          <strong>Alamat Sekretariat:</strong>
          <br />
          Jalan Paingan, Krodan, Maguwoharjo, Kecamatan Depok, Kabupaten Sleman,
          Daerah Istimewa Yogyakarta
        </p>
        <p>
          <strong>Telepon / WhatsApp:</strong>
          <br />
          081575904325 (Shindo)
        </p>
      </section>

      {/* Media Sosial */}
      <section className="contact-socials">
        <h2>Media Sosial</h2>
        <p>
          <strong>Instagram:</strong>{" "}
          <a
            href="https://www.instagram.com/yasashindo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @yasashindo
          </a>
        </p>
        <p>
          <strong>YouTube:</strong>{" "}
          <a
            href="https://www.youtube.com/@OutdoorBoys"
            target="_blank"
            rel="noopener noreferrer"
          >
            Outdoor Boys
          </a>
        </p>
      </section>

      {/* Informasi Pendaftaran */}
      <section className="contact-pendaftaran">
        <h2>Pendaftaran Anggota Baru</h2>
        <p>
          Bagi Anda yang berminat bergabung menjadi bagian dari keluarga besar
          Mapala, silakan kirimkan surat lamaran dan berkas pendaftaran ke email
          kami di:
        </p>
        <p style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#1b5e20" }}>
          apaitukenapa@gmail.com
        </p>
        <p>
          Jika ada pertanyaan mengenai alur pendaftaran, Anda juga dapat
          menghubungi kontak WhatsApp di atas.
        </p>
      </section>
    </div>
  );
}

export default Contact;
