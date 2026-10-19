import { Link } from "react-router-dom";
import Card from "../components/Card";
import SectionCarousel from "../components/SectionCarousel";

function ProjectsEvents() {
  return (
    <SectionCarousel label="Section proyek dan event">
      <Card title="Proyek & Kegiatan Mapala">
        <p>
          Rangkaian aksi nyata, ekspedisi alam bebas, serta program pelestarian
          lingkungan yang kami laksanakan secara berkelanjutan.
        </p>
      </Card>

      <Card
        title="Konservasi & Reboisasi Hutan"
        image="/Reboisasi.jpeg"
        imageAlt="Penanaman bibit pohon"
      >
        <p>
          Aksi penanaman ribuan bibit pohon di kawasan lereng gunung dan pesisir
          guna mencegah erosi, menjaga sumber mata air, serta memulihkan
          ekosistem alam yang rusak.
        </p>
      </Card>

      <Card
        title="Pendidikan & Pelatihan Dasar (DIKSAR)"
        image="/Api unggun.jpeg"
        imageAlt="Api unggun saat DIKSAR"
      >
        <p>
          Program pembinaan rutin bagi calon anggota baru mencakup navigasi
          darat, teknik bertahan hidup (survival), pertolongan pertama (P3K
          lapangan), dan etika lingkungan.
        </p>
      </Card>

      <Card
        title="Pendakian Bersama & Pendataan Jalur"
        image="/Hiking.jpeg"
        imageAlt="Pendakian bersama"
      >
        <p>
          <strong>Waktu:</strong> Semester ini. Pendakian eksplorasi sekaligus
          pemetaan kembali kondisi jalur pendakian dan penandaan titik-titik
          rawan longsor.
        </p>
        <p>
          <Link to="/event/1" className="card__link">
            Lihat detail event
          </Link>
        </p>
      </Card>

      <Card title="Arsip & Pencapaian">
        <p>
          Seluruh rekam jejak kegiatan, laporan hasil ekspedisi, dan dokumentasi
          lapangan tersimpan dalam arsip resmi organisasi sebagai bahan evaluasi
          serta pembelajaran bagi generasi penerus.
        </p>
      </Card>
    </SectionCarousel>
  );
}

export default ProjectsEvents;
