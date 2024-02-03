import { Typography, Grid, Box, CardMedia } from '@mui/material';
import {Wifi, Weekend, LocalParking, SupervisorAccount, AirplanemodeActive, CleaningServices} from '@mui/icons-material'; 
import FotoNosotros from '../../../assets/img/nosotros.png';

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
  dudas.`,
  p2 = `¡Esperamos recibirte pronto!`,
}) => {
  return (
    <>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          height: '100%',
          padding: {xs: '5%', sm: '3% 5%', md: '5% 3%'},
          bgcolor: '#4A5C49'
        }}
      >
        <Grid 
        container 
        justifyContent={'center'}
        alignItems={'center'}
        spacing={3}
        >
          <Grid item xs={12} md={7} sx={{flexDirection: 'column'}}>
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
                  textAlign: 'justify',
                  fontSize: {xs: '18px', lg: '22px'},
                  color: 'third.main',
                }}
              >
                {p}
              </Typography>
              <Typography
                sx={{
                  textAlign: 'start',
                  fontSize: {xs: '18px', lg: '22px'},
                  color: 'third.main',
                }}
              >
                {p2}
              </Typography>
            </Grid>
                
            <Grid item xs={12} md={5} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: {xs: 3, md: 13}}}>
            <CardMedia
              component={'img'}
              alt="Nosotros Foto"
              height="100%"
              weight= "100%"
              image={FotoNosotros}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
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
          <Typography color="#4A5C49" sx={{fontSize: {xs: '14px', sm: '19px', md:'25px'}}}><b>Wifi Gratis</b></Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <Weekend fontSize="large" color='primary' />
          <Typography color="#4A5C49" sx={{fontSize: {xs: '14px', sm: '19px', md:'25px'}}}><b>Departamentos</b></Typography>
          <Typography color="#4A5C49" sx={{fontSize: {xs: '14px', sm: '19px', md:'25px'}}}><b>Amueblados</b></Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <SupervisorAccount fontSize="large" color='primary' />
          <Typography color="#4A5C49" sx={{fontSize: {xs: '14px', sm: '19px', md:'25px'}}}><b>Servicio de</b></Typography>
          <Typography color="#4A5C49" sx={{fontSize:{xs: '14px', sm: '19px', md:'25px'}}}><b>Administración</b></Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <LocalParking fontSize="large" color='primary' />
          <Typography color="#4A5C49" sx={{fontSize: {xs: '14px', sm: '19px', md:'25px'}}}><b>Estacionamiento</b></Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <CleaningServices fontSize="large" color='primary' />
          <Typography color="#4A5C49" sx={{fontSize: {xs: '14px', sm: '19px', md:'25px'}}}><b>Servicio de </b></Typography>
          <Typography color="#4A5C49" sx={{fontSize: {xs: '14px', sm: '19px', md:'25px'}}}><b>limpieza</b></Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <AirplanemodeActive fontSize="large" color='primary' />
          <Typography color="#4A5C49" sx={{fontSize: {xs: '14px', sm: '19px', md:'25px'}}}><b>Aeropuerto</b></Typography>
          <Typography color="#4A5C49" sx={{fontSize: {xs: '14px', sm: '19px', md:'25px'}}}><b>30′</b></Typography>
        </Box>
      </Grid>
      </Grid>
    </>
  );
}; 
