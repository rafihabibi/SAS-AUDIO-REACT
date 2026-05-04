import Mixer from "../assets/backgroundMixer.jpg";

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: `url(${Mixer})` }}
      className={`bg-cover bg-center h-screen relative`}>
      <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
        <div className=" text-center px-5 md:px-12 max-w-4xl">
          <h1 className="font-heading text-white text-4xl md:text-5xl font-bold mb-2 leading-tight">
            Jasa {"  "}
            <span className="text-yellow-500">
              Instalasi & Setting Sound System{" "}
            </span>
            Terbaik di Tangerang - Jakarta
          </h1>
          <div className="flex flex-wrap justify-center gap-4 font-body font-semibold text-xl text-gray-300 py-4">
            <span className="text-yellow-500">&bull;</span>
            <h2>Sound System</h2>
            <span className="text-yellow-500">&bull;</span>
            <h2>Karaoke</h2>
            <span className="text-yellow-500">&bull;</span>
            <h2>Live Band</h2>
            <span className="text-yellow-500">&bull;</span>
            <h2>instalasi Sound</h2>
          </div>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Spesialis instalasi dan tuning sound system terpercaya di Tangerang
            - Jakarta. Suara merata, vokal jernih, dan bebas dengung untuk
            segala kebutuhan acara Anda.
          </p>
        </div>
      </div>
    </section>
  );
}
