import Grid from '@mui/material/Grid';
//foto
import Foto1 from '../../assets/img/fondoInicio.png';
import Logo from '../../assets/img/logo.png';


export const Inicio = () => {
  return (
    <>
    <Grid container sx={{ position: 'relative', backgroundColor: '#FFF' }}>
      <Grid item xs={12} sx={{ position: 'relative' }}>
        <img src={Foto1} alt="Fondo" className='img' />
        <Grid 
        container 
        justifyContent="center" 
        alignItems="center" 
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)' 
          }}>
          <img src={Logo} alt="Logo" />
        </Grid>
      </Grid>
    </Grid>
    </>
  )
}

