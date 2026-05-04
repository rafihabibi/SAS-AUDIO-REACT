import WA from "../assets/whatsapp.png";

export default function FloatingWA() {
  return (
    <>
      <a
        href="https://wa.me/+6285695658453"
        target="_blank"
        className="fixed bottom-10 right-10 z-10">
        <img src={WA} alt="logo wa" className="w-14" />
      </a>
    </>
  );
}
