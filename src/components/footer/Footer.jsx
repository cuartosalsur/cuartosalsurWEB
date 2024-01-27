import { Grid, Box, Typography, Divider } from '@mui/material';
//fotos
import Foto from '../../assets/img/footer.png';
import LogoBooking from '../../assets/img/booking-logo.png';
import LogoAirbnb from '../../assets/img/airbnb-logo.jpg';
import Logo from '../../assets/img/logo-amarillo.png';

export const Footer = () => {
  return (
    <>
      <div sx={{ backgroundColor: '#000' }}>
        <Grid 
        container 
        sx={{ height: '90vh', position: 'relative'}}>
          <Grid
            container
            justifyContent={'center'}
            alignItems={'center'}
            spacing={10}
            sx={{
              position: 'absolute',
              top: '50%',
              left: {xs: '60%', sm:'50%'},
              transform: 'translate(-50%, -50%)',
              overflow: 'hidden'
            }}
          >
            <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center'}}>
              <img src={Logo} alt="Logo" className='logo-footer'/>
            </Grid>

            <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', gap: 5}}>
              <img
                src={LogoBooking}
                alt="Booking Logo"
                className='logo-img'
              />

              <img src={LogoAirbnb} alt="Airbnb Logo"  className='logo-img' />
            </Grid>                      
          </Grid>

          <img src={Foto} className="img-full" />

          <Box
            sx={{
              position: 'absolute',
              bottom: '0',
              padding: '10px',
            }}
          >
            <Typography variant="body1" color='third.main'>&copy; 2024 Cuartos al Sur. Todos los derechos reservados.</Typography>
          </Box>
        </Grid>
      </div>
    </>
  )
}


