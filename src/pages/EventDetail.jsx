import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import SectionCarousel from "../components/SectionCarousel";

export default function EventDetail() {
  const { id } = useParams();

  return (
    <SectionCarousel label={`Detail event ${id}`}>
      <Card title={`Detil Event #${id}`}>
        <p>
          [Placeholder: Informasi lengkap mengenai event yang dipilih, tanggal,
          lokasi, dan deskripsi kegiatan]
        </p>
        <p>
          <Link to="/proyek-event" className="card__link">
            Kembali ke Event/Proyek
          </Link>
        </p>
      </Card>
    </SectionCarousel>
  );
}
