import {Grid, Typography} from '@mui/material';
//foto
import Fondo from '../../assets/img/fondoInicio3.png';
import Logo from '../../assets/img/inicio-logo-amarillo.png';
import LogoPhone from '../../assets/img/inicio-phone-amarillo.png';

export const Inicio = () => {
  return (
    <>
    <Grid container sx={{ position: 'relative', backgroundColor: '#4A5C49', overflow: 'hidden' }}>
      <Grid item xs={12} sx={{ position: 'relative' }}>

        <img src={Fondo} alt="Fondo" className='img' />

        <Grid 
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            display: { xs: 'none', sm: 'flex' },
            position: 'absolute',
            top: '55%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }}>
          <img src={Logo} alt="Logo" className='logo-inicio'/>
        </Grid>

          <Grid 
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              display: { xs: 'flex', sm: 'none' },
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}>
            <img src={LogoPhone} alt="Logo" className='logo-inicio-phone'/>
          </Grid>

        </Grid> 
    </Grid>
    </>
  )
}

