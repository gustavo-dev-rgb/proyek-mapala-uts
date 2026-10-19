import { Link } from "react-router-dom";

// Ganti file logo di sini kalau logo PNG-nya sudah ada (taruh di folder public/).
const LOGO_SRC = "/logo.svg";

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-header__brand" aria-label="MAPALA, ke beranda">
        <span className="site-header__logo">
          <img src={LOGO_SRC} alt="" />
        </span>
        <span className="site-header__title">MAPALA</span>
      </Link>
    </header>
  );
}
