import Card from "../components/Card";
import SectionCarousel from "../components/SectionCarousel";

function Profil() {
  return (
    <SectionCarousel label="Section profil">
      <Card title="Profil Organisasi Mapala">
        <p>
          Wadah pembinaan mahasiswa dalam bidang kepecintaalaman, pelestarian
          lingkungan, dan kemanusiaan.
        </p>
      </Card>

      <Card title="Sejarah Singkat">
        <p>
          Mapala didirikan sebagai wadah bagi para mahasiswa yang memiliki
          kepedulian tinggi terhadap kelestarian alam bebas dan kegiatan luar
          ruang. Sejak berdirinya, organisasi ini aktif melahirkan kader-kader
          petualang yang tidak hanya tangguh secara fisik di medan ekstrem,
          tetapi juga memiliki kepekaan sosial dan kepedulian ekologis.
        </p>
      </Card>

      <Card title="Visi">
        <p>
          Menjadi organisasi kemahasiswaan yang unggul, berkarakter, serta
          terdepan dalam pelestarian alam dan kepecintaalaman di tingkat
          nasional.
        </p>
      </Card>

      <Card title="Misi">
        <ul className="card__list">
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
      </Card>

      <Card title="Pengurus Inti">
        <div className="people">
          <figure className="people__item">
            <img src="/Yudha.png" alt="Yudha, Ketua Umum" draggable="false" />
            <figcaption>
              <strong>Ketua Umum</strong>
              <span>Yudha</span>
            </figcaption>
          </figure>
          <figure className="people__item">
            <img src="/Shindo.jpeg" alt="Shindo, Wakil Ketua" draggable="false" />
            <figcaption>
              <strong>Wakil Ketua</strong>
              <span>Shindo</span>
            </figcaption>
          </figure>
        </div>
      </Card>
    </SectionCarousel>
  );
}

export default Profil;
