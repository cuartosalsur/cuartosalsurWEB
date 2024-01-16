import { Grid, Box, Typography } from '@mui/material';
//fotos
import Foto from '../../assets/img/footer.png';
import LogoBooking from '../../assets/img/booking-logo.png';
import LogoAirbnb from '../../assets/img/airbnb-logo.jpg';

export const Footer = () => {
  return (
    <>
      <div sx={{ backgroundColor: '#FDF2D9' }}>
        <Grid container sx={{ height: '90vh', position: 'relative' }}>
          <Grid
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              alignItems: 'center',
              gap: {xs: 0, sm: 10, md: '20'}
            }}
          >
            <img
                src={LogoBooking}
                alt="Booking Logo"
                className='logo-img'
            />

            <img src={LogoAirbnb} alt="Airbnb Logo"  className='logo-img' /> 
                      
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


