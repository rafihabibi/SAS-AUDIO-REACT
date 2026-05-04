import { useState } from "react";

export default function ContactForm() {
  const [nameInput, setNameInput] = useState("");
  const [needArea, setNeedArea] = useState("");
  const [errorHandleInput, setErrorHandleInput] = useState("");
  const [errorHandleArea, setErrorHandleArea] = useState("");

  const handleWA = () => {
    const pesan = `Halo, Nama saya ${nameInput}. Saya ingin bertanya Mengenai ${needArea}`;
    const encodePesan = encodeURIComponent(pesan);

    const urlWA = `https://wa.me/6285695658453?text=${encodePesan}`;

    if (nameInput === "") {
      setErrorHandleInput("Nama harus di Isi!");
      return;
    }

    if (needArea === "") {
      setErrorHandleArea("Keperluan tidak boleh kosong.");
      return;
    }

    setErrorHandleArea("");
    setErrorHandleInput("");
    window.open(urlWA, "_blank");
  };
  return (
    <form action="" className="max-w-2xl mx-auto font-body">
      <div className="py-5 md:py-10 m-2 px-2">
        <div className="flex flex-col gap-2 md:w-full relative py-6">
          <label htmlFor="name" className="font-semibold">
            Nama <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={`border ${errorHandleInput ? "border-red-500" : "border-none"} rounded-md bg-white text-black px-2 py-2 outline-none`}
            placeholder="Masukan nama anda"
            value={nameInput}
            onChange={(e) => {
              setNameInput(e.target.value);
              setErrorHandleInput("");
            }}
          />
          <p
            className={` absolute top-26 text-sm left-0 text-red-500 ${errorHandleInput ? "block" : "hidden"}`}>
            {errorHandleInput}
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full py-4 relative">
          <label htmlFor="need" className="font-semibold">
            Keperluan <span className="text-red-500">*</span>
          </label>
          <textarea
            name="need"
            id="need"
            className={`border ${errorHandleArea ? "border-red-500" : "border-none"} rounded-md bg-white text-black px-2 py-2 outline-none resize-none h-32`}
            placeholder="Contoh: Saya butuh instalasi sound system untuk cafe.."
            value={needArea}
            onChange={(e) => {
              setNeedArea(e.target.value);
              setErrorHandleArea("");
            }}></textarea>
          <p
            className={`absolute top-45 left-0 text-red-500 ${errorHandleArea ? "block" : "hidden"}`}>
            {errorHandleArea}
          </p>
        </div>
        <div className="py-5">
          <button
            type="button"
            onClick={handleWA}
            className="flex items-center justify-center gap-2 border border-yellow-400 rounded-md bg-[#fcd546] text-black py-2 w-full cursor-pointer hover:bg-yellow-500">
            Chat di Whatsapp
          </button>
        </div>
      </div>
    </form>
  );
}
