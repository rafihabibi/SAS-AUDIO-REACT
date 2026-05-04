import GalleryCard from "../components/GalleryCard.jsx";
import Instalasi1 from "../assets/instalasi.png";
import instalasi2 from "../assets/instalasiSpeaker1.png";
import SoundMan from "../assets/layanan3.png";

export default function Gallery() {
  const galleryData = [
    {
      id: 1,
      image: instalasi2,
      teks: "GPDI Keramat Jati, Jakarta Timur",
    },

    {
      id: 2,
      image: SoundMan,
      teks: "GPDI Ketapang, Jakarta Barat",
    },

    {
      id: 3,
      image: Instalasi1,
      teks: "Coffe Ground, Sunter Agung",
    },
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto max-w-8xl">
        <h2 className="text-3xl md:text-4xl text-center font-semibold text-white font-heading">
          Galeri <span className="text-yellow-500">Proyek</span> Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 px-4 py-6">
          {galleryData.map((item) => (
            <GalleryCard key={item.id} img={item.image} teks={item.teks} />
          ))}
        </div>
        <div className="flex items-center justify-center py-2 ">
          <button className="border border-none rounded-full bg-yellow-500 px-2 py-1 font-semibold cursor-pointer hover:bg-yellow-300 ">
            Lihat Semua Portofolio
          </button>
        </div>
      </div>
    </section>
  );
}
