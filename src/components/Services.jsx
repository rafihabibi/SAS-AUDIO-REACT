import CardServices from "../components/ServiceCard.jsx";

export default function Services() {
  const serviceData = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 mb-4 text-white">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
          />
        </svg>
      ),
      titleHigh: "Instalasi",
      titleRest: "Sound System",
      description: `Untuk ruangan meeting, cafe, restoran, tempat ibadah, aula, hingga
              event hall. Kami bantu dari perancangan tata suara, penentuan
              posisi speaker, hingga kalibrasi akhir agar suara merata dan
              optimal di seluruh area.`,
      checklist: [],
    },

    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 mb-4 text-white">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
          />
        </svg>
      ),
      titleHigh: "Setting",
      titleRest: "Suara & Setup Karaoke",
      description: `Ingin suasana karaoke premium seperti di lounge atau studio
              profesional?`,
      checklist: [
        "Mixer Karaoke & Amplifier",
        "Mic wireless & speaker karaoke",
        "Setting ruangan & equalizer",
      ],
    },

    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 mb-4 text-white">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
          />
        </svg>
      ),

      titleHigh: "Mixing",
      titleRest: " Live & Event Setup",
      description: `Kami mengawal penuh tata suara acara Anda dari tahap instalasi,
              sound check, hingga acara selesai. Menjamin kejernihan akustik dan
              vokal untuk live music, wedding, maupun private party eksklusif.`,
      checklist: [],
    },
  ];
  return (
    <section className="bg-gray-900 py relative z-10">
      <div className="container font-body mx-auto px-6 py-10 max-w-6xl">
        <h1 className="font-heading text-white text-center text-2xl md:text-4xl font-bold mb-12">
          Layanan yang Kami Tawarkan
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map((item) => (
            <CardServices
              key={item.id}
              icon={item.icon}
              titleHigh={item.titleHigh}
              titleRest={item.titleRest}
              description={item.description}
              checklist={item.checklist}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
