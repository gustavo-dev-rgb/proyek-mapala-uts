import React from "react";
import { Link } from "react-router-dom";
//import "./Navbar.css"; // Buat file CSS nanti

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>MAPALA (Mahasiswa Pecinta Alam)</h2>
      <ul>
        <li>
          <Link to="/">Beranda</Link>
        </li>
        <li>
          <Link to="/profil">Profil</Link>
        </li>
        <li>
          <Link to="/proyek-event">Proyek/Event</Link>
        </li>
        <li>
          <Link to="/kontak">Kontak</Link>
        </li>
      </ul>
    </nav>
  );
}
