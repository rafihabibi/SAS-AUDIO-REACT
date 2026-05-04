import Mixer from "../assets/backgroundMixer.jpg";
import Logo from "../assets/logo.png";
import Layanan1 from "../assets/layanan1.png";
import Layanan2 from "../assets/layanan2.png";
import Layanan3 from "../assets/layanan3.png";
import { NavLink } from "react-router";

export default function Layanan() {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${Mixer})` }}
        className="bg-cover bg-center min-h-[50vh] relative">
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <div className="flex items-center justify-center flex-col text-center px-6 md:px-12 mb-4">
            <img src={Logo} alt="logo SAS" className="h-24" />
            <h1 className="text-white font-bold text-3xl md:text-5xl py-2 font-heading">
              Layanan <span className="text-yellow-500">Profesional</span> SAS
              Audio
            </h1>
            <h2 className="font-semibold text-base text-white/80  font-body">
              Solusi menyeluruh dari instalasi hingga kalibrasi audio.
            </h2>
          </div>
        </div>
      </section>
      <section className="w-full mx-auto bg-gray-900 text-white">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-center gap-10 py-10 px-4">
          <div className="w-full md:w-1/2 border border-none rounded-md px-4 text-justify">
            <h2 className="flex items-center justify-center md:justify-start gap-3 font-bold text-left py-2 text-2xl md:text-3xl text-white mt-2">
              <span className="flex shrink-0 items-center justify-center border rounded-full w-10 h-10 bg-yellow-500 border-none py-1 text-black">
                1
              </span>
              <span className="text-yellow-500">Instalasi</span> Sound System
            </h2>

            <p className="text-base py-5 leading-relaxed text-gray-300">
              Suara yang jernih dan enak didengar berawal dari penempatan alat
              yang pas. Kami siap membantu perancangan dan pemasangan sound
              system untuk cafe, restoran, ruang meeting, hingga tempat ibadah.
              Kami pastikan suara tersebar merata di setiap sudut ruangan dengan
              hasil akhir pemasangan yang rapi dan bersih.
            </p>
            <ol className="px-4 space-y-3">
              <li className="flex gap-2">
                <span className="text-yellow-500">✓</span>
                <div>
                  <span className="font-bold text-yellow-500">
                    Cek Lokasi & Titik Suara:
                  </span>
                  <span className="text-gray-300">
                    Kami survei ruangan Anda terlebih dahulu untuk mencari
                    posisi speaker terbaik agar suara tidak mantul atau
                    mendengung (storing).
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-500">✓</span>
                <div>
                  <span className="font-bold text-yellow-500">
                    Rekomendasi Alat Sesuai Kebutuhan:
                  </span>
                  <span className="text-gray-300">
                    Kami bantu pilihkan perangkat yang tepat sasaran (mulai dari
                    speaker gantung hingga subwoofer tambahan) agar sesuai
                    dengan ukuran ruangan dan anggaran Anda.
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-500">✓</span>
                <div>
                  <span className="font-bold text-yellow-500">
                    Jalur Kabel Aman & Rapi:
                  </span>
                  <span className="text-gray-300">
                    Penarikan kabel dijamin tersembunyi, tidak mengganggu jalur
                    listrik, dan menjaga keindahan interior ruangan Anda.
                  </span>
                </div>
              </li>
            </ol>
            <div className="flex justify-center py-8">
              <NavLink to="/hubungiKami">
                <button className="border rounded-full w-40 h-10 bg-yellow-400 text-black font-bold hover:bg-yellow-300 cursor-pointer">
                  Konsultasi Instalasi
                </button>
              </NavLink>
            </div>
          </div>

          <div className="w-full md:w-1/2 group overflow-hidden rounded-md shadow-2xl">
            <img
              src={Layanan1}
              alt="Instalasi Speaker"
              className="rounded-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="container flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-10 py-10 px-4">
          <div className="w-full md:w-1/2 border border-none rounded-md px-4 text-justify">
            <h2 className="flex items-center justify-center md:justify-start gap-3 font-bold text-left py-2 text-2xl md:text-3xl text-white mt-2">
              <span className="flex shrink-0 items-center justify-center border rounded-full w-10 h-10 bg-yellow-500 border-none py-1 text-black">
                2
              </span>
              <span className="text-yellow-500">Setting </span>Suara (Kalibrasi
              Sound)
            </h2>

            <p className="text-base py-5 leading-relaxed text-gray-300">
              Suara sound system mendem, pecah, atau sering bikin kaget karena
              storing? Masalahnya belum tentu pada alatnya, melainkan pada
              pengaturannya. Kami bantu memaksimalkan potensi perangkat audio
              Anda—baik alat standar maupun premium—dengan menyeimbangkan
              frekuensi agar suaranya jernih dan nyaman didengar untuk cafe,
              restoran, ruang rapat, tempat ibadah,hingga karaoke Rumahan.
            </p>
            <ol className="px-4 space-y-3">
              <li className="flex gap-2">
                <span className="text-yellow-500">✓</span>
                <div>
                  <span className="font-bold text-yellow-500">
                    Penyesuaian kalibrasi Ruangan:
                  </span>
                  <span className="text-gray-300">
                    Kami atur suara agar pas dengan kondisi ruangan (baik itu
                    cafe yang padat atau tempat ibadah yang bergema luas),
                    supaya suara tidak mantul.
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-500">✓</span>
                <div>
                  <span className="font-bold text-yellow-500">
                    Bebas Storing (Anti-Dengung):
                  </span>
                  <span className="text-gray-300">
                    Kami potong frekuensi yang bocor, jadi Anda tidak akan lagi
                    mendengar suara "ngiiiing" yang bikin kaget saat mic dipakai
                    oleh penceramah atau penyanyi.
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-500">✓</span>
                <div>
                  <span className="font-bold text-yellow-500">
                    Suara Jernih & Nyaman:
                  </span>
                  <span className="text-gray-300">
                    Hasil akhirnya, alunan musik maupun intonasi vokal akan
                    terdengar bulat, jelas, dan tidak membuat telinga pendengar
                    cepat lelah.
                  </span>
                </div>
              </li>
            </ol>
            <div className="flex justify-center py-8">
              <NavLink to="/hubungiKami">
                <button className="border rounded-full w-40 h-10 bg-yellow-400 text-black font-bold hover:bg-yellow-300 cursor-pointer">
                  Konsultasi Setting
                </button>
              </NavLink>
            </div>
          </div>

          <div className="w-full md:w-1/2 group overflow-hidden rounded-md shadow-2xl">
            <img
              src={Layanan2}
              alt="Instalasi Speaker"
              className="rounded-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="container flex flex-col-reverse md:flex-row items-center justify-center gap-10 py-10 px-4">
          <div className="w-full md:w-1/2 border border-none rounded-md px-4 text-justify">
            <h2 className="flex items-center justify-center md:justify-start gap-3 font-bold text-left py-2 text-2xl md:text-3xl text-white mt-2">
              <span className="flex shrink-0 items-center justify-center border rounded-full w-10 h-10 bg-yellow-500 border-none py-1 text-black">
                3
              </span>
              <span className="text-yellow-500">Operator</span> Live Mixing
            </h2>

            <p className="text-base py-5 leading-relaxed text-gray-300">
              Jangan biarkan momen penting Anda terganggu karena mic tiba-tiba
              mati atau suara musik pecah. Kami menyediakan Soundman profesional
              yang akan standby di lokasi untuk mengontrol, menjaga, dan
              memastikan kualitas audio tetap prima dari awal hingga acara
              selesai.
            </p>
            <ol className="px-4 space-y-3">
              <li className="flex gap-2">
                <span className="text-yellow-500">✓</span>
                <div>
                  <span className="font-bold text-yellow-500">
                    Soundman Berpengalaman:
                  </span>
                  <span className="text-gray-300">
                    Teknisi kami siap siaga di belakang mixer untuk
                    mengantisipasi segala kendala teknis audio secara langsung
                    di lapangan.
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-500">✓</span>
                <div>
                  <span className="font-bold text-yellow-500">
                    Mixing Suara Real-Time:
                  </span>
                  <span className="text-gray-300">
                    Apapun acaranya—Live Band, Acara Ulang tahun, Resepsi atau
                    seminar kami akan mengatur keseimbangan volume dan
                    kejernihan vokal secara dinamis mengikuti jalannya acara.
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-500">✓</span>
                <div>
                  <span className="font-bold text-yellow-500">
                    Kualitas Suara Konsisten:
                  </span>
                  <span className="text-gray-300">
                    Dari detik pembukaan hingga penutupan acara, kami menjaga
                    level volume dan kejernihan suara tetap stabil, tidak
                    mendadak kebesaran atau kekecilan.
                  </span>
                </div>
              </li>
            </ol>
            <div className="flex justify-center py-8">
              <NavLink to="/hubungiKami">
                <button className="border rounded-full w-40 h-10 bg-yellow-400 text-black font-bold hover:bg-yellow-300 cursor-pointer">
                  Booking Operator
                </button>
              </NavLink>
            </div>
          </div>

          <div className="w-full md:w-1/2 group overflow-hidden rounded-md shadow-2xl">
            <img
              src={Layanan3}
              alt="Instalasi Speaker"
              className="rounded-md group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </>
  );
}
