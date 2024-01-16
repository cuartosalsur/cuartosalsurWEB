//styles
import '../../assets/css/Style.css';
//secciones
import { Inicio } from '../inicio/Inicio';
import { Nosotros } from '../body/nosotros/Nosotros';
import { NuestrosDptos } from '../body/nuestrosDptos/NuestrosDptos';
import { Ubicacion } from '../body/ubicacion/Ubicacion';
import { Galeria } from '../body/galeria/Galeria';
import { Contacto } from '../body/contacto/Contacto';
import { Footer } from '../footer/Footer';

export const Page = () => {
  return (
    <>
      <Inicio/>
      
      <Nosotros />

      <NuestrosDptos />

      <Ubicacion />

      <Galeria />

      <Contacto />

      <Footer />
    </>
  )
}

