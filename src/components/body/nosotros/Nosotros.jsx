import { Typography, Grid, Box } from '@mui/material';
import {Wifi, Weekend, LocalParking, SupervisorAccount} from '@mui/icons-material';

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
          height: {xs: '100%', sm: '100vh'},
          /*padding: {xs: '15% 5%', lg: '7% 5%'},*/
          bgcolor: '#4A5C49'
        }}
      >
        <Grid 
        container 
        justifyContent={'center'}
        alignItems={'center'}
        spacing={10}
        >
            <Grid item xs={12} sm={8}>
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
                
            <Grid item xs={12} sm={4} sx={{marginTop: {xs: '20px', sm: 0}, display: 'flex', justifyContent: 'center', gap: 5}}>
              <Grid>
                <Box sx={{width: '8em', height: '8em', backgroundColor: '#E6F5A2', border: '1px solid #424242', marginBottom: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                  <Wifi fontSize="large" />
                  <Typography>Free Wifi</Typography>
                </Box>
                <Box sx={{width: '8em', height: '8em', backgroundColor: '#fffe', border: '1px solid #424242', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <Weekend fontSize="large"/>
                  <Typography>Fully Furnished</Typography>
                </Box>
              </Grid>
              <Grid>
                <Box sx={{width: '8em', height: '8em', backgroundColor: '#E6F5A2', border: '1px solid #424242', marginBottom: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <SupervisorAccount fontSize="large"/>
                  <Typography>Admin Service</Typography>
                </Box>
                <Box sx={{width: '8em', height: '8em', backgroundColor: '#fffe', border: '1px solid #424242', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <LocalParking fontSize="large"/>
                  <Typography>Free Parking</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
      </Grid>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'row'}
        sx={{
          height: {xs:'30vh'},
          /*padding: {xs: '15% 5%', lg: '7% 5%'},*/
          bgcolor: '#E6F5A2'
        }}
      >
        
        <Box sx={{width: '8em', height: '8em', backgroundColor: '#E6F5A2', border: '1px solid trasparent', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Wifi fontSize="large" />
                  <Typography color="#4A5C49" sx={{fontSize: '25px'}}><b>Free Wifi</b></Typography>
                </Box>
                <Box sx={{width: '8em', height: '8em', backgroundColor: '#fffe', border: '1px solid #424242', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                <Weekend fontSize="large"/>
                  <Typography>Fully Furnished</Typography>
                </Box>
      </Grid>
    </>
  );
};
