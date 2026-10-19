import Card from "../components/Card";
import SectionCarousel from "../components/SectionCarousel";

function Contact() {
  return (
    <SectionCarousel label="Section kontak">
      <Card
        title="Hubungi & Bergabung Bersama Kami"
        image="/Hompimpa.jpeg"
        imageAlt="Hompimpa Mapala"
      >
        <p>
          Ingin bergabung dengan Mapala, mengajukan kolaborasi, atau sekadar
          bertanya mengenai kegiatan kami? Simak informasi di bawah ini.
        </p>
      </Card>

      <Card title="Sekretariat & Kontak">
        <p>
          <strong>Alamat Sekretariat</strong>
          <br />
          Jalan Paingan, Krodan, Maguwoharjo, Kecamatan Depok, Kabupaten Sleman,
          Daerah Istimewa Yogyakarta
        </p>
        <p>
          <strong>Telepon / WhatsApp</strong>
          <br />
          081575904325 (Shindo)
        </p>
      </Card>

      <Card title="Media Sosial">
        <p>
          <strong>Instagram:</strong>{" "}
          <a
            className="card__link"
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
            className="card__link"
            href="https://www.youtube.com/@OutdoorBoys"
            target="_blank"
            rel="noopener noreferrer"
          >
            Outdoor Boys
          </a>
        </p>
      </Card>

      <Card title="Pendaftaran Anggota Baru">
        <p>
          Bagi Anda yang berminat bergabung menjadi bagian dari keluarga besar
          Mapala, silakan kirimkan surat lamaran dan berkas pendaftaran ke email
          kami di:
        </p>
        <p className="card__highlight">apaitukenapa@gmail.com</p>
        <p>
          Jika ada pertanyaan mengenai alur pendaftaran, Anda juga dapat
          menghubungi kontak WhatsApp di atas.
        </p>
      </Card>
    </SectionCarousel>
  );
}

export default Contact;
