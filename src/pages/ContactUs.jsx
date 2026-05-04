import ContactForm from "../components/ContactForm.jsx";
import Mixer from "../assets/backgroundMixer.jpg";
import Logo from "../assets/logo.png";

export default function ContactUs() {
  return (
    <section
      className="bg-cover bg-center min-h-screen relative"
      style={{ backgroundImage: `url(${Mixer})` }}>
      <div className="relative bg-black/70 min-h-screen py-10 flex items-center justify-center">
        <div className="text-white w-full px-3 pt-24">
          <div className="flex flex-col items-center justify-center px-4">
            <img src={Logo} alt="Image Logo" className="w-40" />
            <h1 className="text-3xl md:text-5xl text-center font-bold md:px-0 py-2 text-white font-heading">
              <span className="text-yellow-500">Garansi 100%</span> KUALITAS
              SUARA TERBAIK!
            </h1>
            <h2 className="font-medium text-base md:text-3xl text-gray-300 font-body">
              Konsultasi dengan Kami Spesialis Sound.
            </h2>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
