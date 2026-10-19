import Card from "../components/Card";
import SectionCarousel from "../components/SectionCarousel";

function Home() {
  return (
    <SectionCarousel label="Section beranda">
      {/* Tanpa gambar: teks di tengah, rata kiri-kanan */}
      <Card title="Beranda Utama Mapala">
        <p>
          Selamat datang di website resmi Mahasiswa Pecinta Alam. Geser ke kanan
          untuk melihat ringkasan profil serta proyek dan event kami.
        </p>
      </Card>

      {/* Ada gambar: gambar di kiri, teks di kanan */}
      <Card
        title="Ringkasan Profil"
        image="/Minecraft wallpaper.jpeg"
        imageAlt="Profil Mapala"
      >
        <p>
          Mahasiswa Pecinta Alam (Mapala) merupakan wadah resmi bagi mahasiswa
          untuk mengembangkan jiwa kepemimpinan, kecintaan terhadap lingkungan
          hidup, serta ketangguhan mental dan fisik melalui kegiatan
          penjelajahan alam bebas seperti pendakian gunung, susur gua, panjat
          tebing, dan konservasi alam.
        </p>
      </Card>

      <Card
        title="Ringkasan Proyek & Event"
        image="/Arung jeram.jpeg"
        imageAlt="Arung jeram Mapala"
      >
        <p>
          Kami secara rutin mengadakan berbagai kegiatan positif, mulai dari
          ekspedisi ilmiah, aksi penanaman pohon (reboisasi), hingga pelatihan
          dasar kepecintaalaman bagi anggota baru.
        </p>
      </Card>
    </SectionCarousel>
  );
}

export default Home;
