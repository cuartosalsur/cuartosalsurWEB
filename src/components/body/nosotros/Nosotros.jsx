import { Typography, Grid, Box } from '@mui/material';
import {Wifi, Weekend, LocalParking, SupervisorAccount, AirplanemodeActive, CleaningServices} from '@mui/icons-material'; 

export const Nosotros = ({
  titulo = 'NOSOTROS',
  p = `Sabemos que viajar puede ser muy cansador, por es eso, desde que abrimos nuestras puertas hemos tenido 
  un sólo objetivo en mente: ofrecer a nuestros huéspedes una opción ideal para su alojamiento y hacer que su 
  visita sea especial. Cuartos al Sur, donde se unen el estilo, el confort y la hospitalidad, tiene todo lo que 
  necesitas: excelente ubicación con vista al lago, parking, departamentos amplios y completamente equipados, 
  servicios de limpieza, servicios de comunicación y entretenimiento y servicio de atención personalizada. 
  Somos la combinación perfecta de confort y conveniencia que te garantiza la atención y la comodidad que te 
  mereces haciendo que tu experiencia con nosotros sea única e irrepetible. Navega por nuestro sitio web para 
  encontrar más información sobre nuestras habitaciones, servicios e instalaciones; contáctanos en caso de tener 
  dudas. ¡Esperamos recibirte pronto!`,
}) => {
  return (
    <>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          height: {xs: '100%', md: '90vh' },
          padding: {xs: '15% 5%', lg: '7% 5%'},
          bgcolor: '#4A5C49'
        }}
      >
        <Grid 
        container 
        justifyContent={'center'}
        alignItems={'center'}
        spacing={10}
        >
          <Grid item xs={12} md={8}>
            <Typography
              sx={{
                fontSize: {xs: '35px', lg: '60px'},
                fontWeight: '500',
                color: 'third.main',
                marginBottom: {xs: '10%', md: '2%'},
                textAlign: 'center'
              }}
            >{titulo}</Typography>
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: {xs: '18px', lg: '22px'},
                  color: 'third.main',
                }}
              >
                {p}
              </Typography>
            </Grid>
                
            <Grid item xs={12} md={4} sx={{marginTop: {xs: '20px', sm: 0}, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={'space-around'}
        alignItems={'center'}
        flexDirection={'row'}
        sx={{
          height: {xs:'45vh', sm: '35vh', md: '30vh', lg: '25vh' },
          bgcolor: '#E6F5A2'
        }}
      > 
      <Grid item xs={12} md={6} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <Wifi fontSize="large" color='primary' />
          <Typography color="#4A5C49" sx={{fontSize: {xs: '19px', md:'25px'}}}><b>Free Wifi</b></Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <Weekend fontSize="large" color='primary' />
          <Typography color="#4A5C49" sx={{fontSize: {xs: '19px', md:'25px'}}}><b>Fully</b></Typography>
          <Typography color="#4A5C49" sx={{fontSize: {xs: '19px', md:'25px'}}}><b>Furnished</b></Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <SupervisorAccount fontSize="large" color='primary' />
          <Typography color="#4A5C49" sx={{fontSize: {xs: '19px', md:'25px'}}}><b>Administration</b></Typography>
          <Typography color="#4A5C49" sx={{fontSize: {xs: '19px', md:'25px'}}}><b>Service</b></Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <LocalParking fontSize="large" color='primary' />
          <Typography color="#4A5C49" sx={{fontSize: {xs: '20px', md:'25px'}}}><b>Free</b></Typography>
          <Typography color="#4A5C49" sx={{fontSize: {xs: '20px', md:'25px'}}}><b>Parking</b></Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <CleaningServices fontSize="large" color='primary' />
          <Typography color="#4A5C49" sx={{fontSize: {xs: '20px', md:'25px'}}}><b>Cleaning</b></Typography>
          <Typography color="#4A5C49" sx={{fontSize: {xs: '20px', md:'25px'}}}><b>Service</b></Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <AirplanemodeActive fontSize="large" color='primary' />
          <Typography color="#4A5C49" sx={{fontSize: {xs: '20px', md:'25px'}}}><b>Airport</b></Typography>
          <Typography color="#4A5C49" sx={{fontSize: {xs: '20px', md:'25px'}}}><b>30′</b></Typography>
        </Box>
      </Grid>
      </Grid>
    </>
  );
}; 
