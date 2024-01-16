//styles
import '../../assets/css/Style.css';
//fotos
import Foto1 from '../../assets/img/fondoInicio.png';
//secciones
import { Nosotros } from '../body/nosotros/Nosotros';
import { NuestrosDptos } from '../body/nuestrosDptos/NuestrosDptos';
import { Ubicacion } from '../body/ubicacion/Ubicacion';
import { Contacto } from '../body/contacto/Contacto';
import { Galeria } from '../body/galeria/Galeria';

const styles = {
  bgNosotrosStyle: {
  backgroundColor: '#FDF2D9'
  },
};

export const Page = () => {
  return (
    <>
    <div style={styles.bgNosotrosStyle}>
        <img src={Foto1} className='img'/>
    </div>
      
      <Nosotros />

      <NuestrosDptos />

      <Ubicacion />

      <Galeria />

      <Contacto />
    </>
  )
}

