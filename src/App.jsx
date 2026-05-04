import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs.jsx";
import Layanan from "./pages/Layanan.jsx";
import FloatingWA from "./components/FloatingWA.jsx";
function App() {
  return (
    <>
      <Navbar activePage="Home" />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hubungiKami" element={<ContactUs />}></Route>
        <Route path="/layanan" element={<Layanan />}></Route>
      </Routes>
      <Footer />
      <FloatingWA />
    </>
  );
}

export default App;
