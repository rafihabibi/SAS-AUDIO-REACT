import { useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="relative flex justify-between font-body items-center px-8 py-4 shadow bg-[#2C2C2C] z-50">
      <div>
        <NavLink to="/">
          <img src={Logo} alt="logo sas" className="h-16" />
        </NavLink>
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        id="btn-humberger"
        className="md:hidden text-3xl cursor-pointer text-white hover:text-yellow-500">
        &#9776;
      </button>

      <nav className="hidden md:flex gap-5 font-semibold text-xl text-white">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-yellow-500" : "text-white"} hover:text-yellow-500 transition-all`
          }>
          Home
        </NavLink>
        <NavLink
          to="/layanan"
          className={({ isActive }) =>
            `${isActive ? "text-yellow-500" : "text-white"} hover:text-yellow-500 transition-all`
          }>
          Layanan
        </NavLink>
        <NavLink
          to="/portofolio"
          className={({ isActive }) =>
            `${isActive ? "text-yellow-500" : "text-white"} hover:text-yellow-500 transition-all`
          }>
          Portofolio
        </NavLink>
        <NavLink
          to="/hubungiKami"
          className={({ isActive }) =>
            `${isActive ? "text-yellow-500" : "text-white"} hover:text-yellow-500 transition-all`
          }>
          Hubungi Kami
        </NavLink>
      </nav>

      <nav
        id="menu-mobile"
        className={`absolute top-full left-0 w-full bg-[#2C2C2C] flex flex-col items-center p-5 gap-4 font-semibold shadow-md text-yellow-500 transition-all duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"} md:hidden`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-yellow-500" : "text-white"} hover:text-yellow-500 transition-all`
          }>
          Home
        </NavLink>
        <NavLink
          to="/layanan"
          className={({ isActive }) =>
            `${isActive ? "text-yellow-500" : "text-white"} hover:text-yellow-500 transition-all`
          }>
          Layanan
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive }) =>
            `${isActive ? "text-yellow-500" : "text-white"} hover:text-yellow-500 transition-all`
          }>
          Portofolio
        </NavLink>
        <NavLink
          to="/hubungiKami"
          className={({ isActive }) =>
            `${isActive ? "text-yellow-500" : "text-white"} hover:text-yellow-500 transition-all`
          }>
          Hubungi Kami
        </NavLink>
      </nav>
    </header>
  );
}
