import { Link, useLocation } from "react-router-dom";

const TABS = [
  { to: "/", label: "Beranda", match: (p) => p === "/" },
  { to: "/profil", label: "Profil", match: (p) => p.startsWith("/profil") },
  {
    to: "/proyek-event",
    label: "Event/Proyek",
    match: (p) => p.startsWith("/proyek-event") || p.startsWith("/event"),
  },
  { to: "/kontak", label: "Contact us", match: (p) => p.startsWith("/kontak") },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="nav" aria-label="Halaman utama">
      {TABS.map((tab) => {
        const active = tab.match(pathname);
        return (
          <Link
            key={tab.to}
            to={tab.to}
            className={`nav__tab${active ? " is-active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
