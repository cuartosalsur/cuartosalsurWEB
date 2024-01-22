import {Grid, Typography} from '@mui/material';
//foto
import Foto1 from '../../assets/img/fondoInicio.png';
import Logo from '../../assets/img/logo.png';

export const Inicio = () => {
  return (
    <>
    <Grid container sx={{ position: 'relative', backgroundColor: '#4A5C49', overflow: 'hidden' }}>
      <Grid item xs={12} sx={{ position: 'relative' }}>
        <img src={Foto1} alt="Fondo" className='img' />
        <Grid 
        container 
        justifyContent="center" 
        alignItems="center" 
        sx={{ 
          display: { xs: 'flex', md: 'none' },
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)' 
          }}>
          <img src={Logo} alt="Logo" className='logo-inicio'/>
        </Grid>

          <Grid 
            container 
            justifyContent="flex-end" 
            alignItems="flex-end"      
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              position: 'absolute', 
              bottom: '0', 
              right: '0',    
              margin: '8px', 
              color: '#fff', 
            }}
          >
            <img src={Logo} alt="Titulo" className='logo-inicio'/>
          </Grid>
        </Grid> 
    </Grid>
    </>
  )
}

