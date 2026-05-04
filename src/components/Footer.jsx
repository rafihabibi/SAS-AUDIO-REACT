import Logo from "../assets/logo.png";
import Gmail from "../assets/gmail.png";
import Phone from "../assets/phone.png";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="font-body bg-[#2C2C2C] pt-2 pb-2">
      <div className="container mx-auto px-3 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-5 items-start">
          {/* Kolom 1 */}
          <div>
            <div className="flex items-center gap-3 h-14">
              <NavLink to="/">
                <img src={Logo} alt="Gambar logo SAS" className="w-14" />
              </NavLink>
              <h3 className="font-semibold text-2xl text-yellow-500">
                Sas Audio System
              </h3>
            </div>
            <hr className="border-yellow-500 mt-2" />
            <p className="py-4 text-white">
              Spesialis instalasi dan tuning sound system terpercaya di
              Tangerang - Jakarta. Suara merata, vokal jernih, dan bebas dengung
              untuk segala kebutuhan acara Anda.
            </p>
          </div>

          {/* Kolom 2 */}
          <div>
            <div className="flex items-center h-14">
              <h3 className="text-2xl font-semibold text-yellow-500">
                About Us
              </h3>
            </div>
            <hr className="border-yellow-500 mt-2" />
            <div className="flex flex-col py-3 gap-2 text-base text-white">
              <NavLink to="/layanan" className="hover:text-yellow-300">
                Layanan
              </NavLink>
              <NavLink to="#" className="hover:text-yellow-300">
                Portofolio
              </NavLink>
              <NavLink to="#" className="hover:text-yellow-300">
                Tentang Kami
              </NavLink>
            </div>
          </div>

          {/* Kolom 3 */}
          <div>
            <div className="flex items-center h-14">
              <h3 className="font-semibold text-2xl text-yellow-500">
                Hubungi Kami
              </h3>
            </div>
            <hr className="border-yellow-500 mt-2" />
            <div className="flex flex-col gap-2 py-3 text-white">
              <div className="flex items-center gap-2">
                <img src={Phone} alt="gambar whatsapp" className="w-5" />
                <a
                  href="https://wa.me/+6285695658453"
                  target="_blank"
                  className="hover:text-yellow-300">
                  085695658453
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img src={Gmail} alt="gambar gmail" className="w-4" />
                <a
                  href="mailto:sasaudio@gmail.com"
                  target="_blank"
                  className="hover:text-yellow-300">
                  sasaudio@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} SAS Audio System. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
