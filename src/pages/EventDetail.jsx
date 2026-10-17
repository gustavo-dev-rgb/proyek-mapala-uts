import React from "react";
import { useParams } from "react-router-dom";

export default function EventDetail() {
  const { id } = useParams();

  return (
    <div className="event-detail-page">
      <h1>Detil Event #{id}</h1>
      <p>
        [Placeholder: Informasi lengkap mengenai event yang dipilih, tanggal,
        lokasi, dan deskripsi kegiatan]
      </p>
    </div>
  );
}
