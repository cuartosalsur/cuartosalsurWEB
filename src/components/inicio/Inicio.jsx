//foto
import Foto1 from '../../assets/img/fondoInicio.png';

const styles = {
    bgInicioStyle: {
    backgroundColor: '#FDF2D9'
    },
};

export const Inicio = () => {
  return (
    <>
       <div style={styles.bgInicioStyle}>
           <img src={Foto1} className='img'/>
       </div>
    </>
  )
}

