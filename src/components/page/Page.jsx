//styles
import '../../assets/css/Style.css';
//fotos
import Foto1 from '../../assets/img/fondo.jpg';
//secciones
import { Nosotros } from '../body/nosotros/Nosotros';
import { NuestrosDptos } from '../body/nuestrosDptos/NuestrosDptos';

const styles = {
  bgNosotrosStyle: {
  backgroundColor: '#f5f5dc'
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

    </>
  )
}

