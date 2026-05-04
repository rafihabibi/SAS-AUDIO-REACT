export default function GalleryCard({ img, teks }) {
  return (
    <>
      <div className="font-body relative rounded-xl overflow-hidden cursor-pointer group">
        <img
          src={img}
          alt="Foto portofolio kami"
          className="rounded-xl w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute flex items-center justify-center text-white opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-0 bg-black/20 md:bg-black/40">
          <p className="font-bold text-base md:font-semibold md:text-lg">
            {teks}
          </p>
        </div>
      </div>
    </>
  );
}
