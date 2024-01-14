import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "../components/navBar/NavBar";
import { Page } from "../components/page/Page";
import { Nosotros } from "../components/body/nosotros/Nosotros";
import { NuestrosDptos } from "../components/body/nuestrosDptos/NuestrosDptos";
import Galeria from "../components/body/galeria/Galeria";
import Contacto from "../components/body/contacto/Contacto";
import Ubicacion from "../components/body/ubicacion/Ubicacion";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Inicio" element={<Page />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/NuestrosDepartamentos" element={<NuestrosDptos />} />
        <Route path="/Ubicacion" element={<Ubicacion />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path="/Contacto" element={<Contacto />} />

        <Route path="/*" element={<Navigate to="/Inicio"/>} />
      </Routes>
    </>
  )
}

