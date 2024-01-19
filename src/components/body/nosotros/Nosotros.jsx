import { Typography, Grid, Box } from '@mui/material';
import {Wifi, Weekend, LocalParking, SupervisorAccount} from '@mui/icons-material';
//logo
import Logo from '../../../assets/img/logo2.png';

export const Nosotros = ({
  titulo = 'Nosotros',
  p = `lorem ipsum dolor sit amet, consectetur adiplo lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor 
  lorem ipsum dolor sit amet, consectetur adiplo lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem 
  ipsum dolor sit amet, consectetur adiplo lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum 
  dolor sit amet, consectetur adiplo lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor dolor sit amet, consectetur adiplo lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor`,
}) => {
  return (
    <>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          height: {xs: '100%', sm: '100vh'},
          padding: {xs: '15% 5%', lg: '7% 5%'},
          bgcolor: '#FDF2D9'
        }}
      >
        <Grid 
        container 
        justifyContent={'center'}
        alignItems={'center'}
        spacing={10}
        >
            <Grid item xs={12} sm={7}>
            <Typography
              sx={{
                fontFamily: 'Kalam',
                fontSize: {xs: '35px', lg: '50px'},
                fontWeight: '500',
                color: 'primary.main',
                marginBottom: {xs: '10%', md: '2%'},
                textAlign: 'center'
              }}
            >{titulo}</Typography>
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: {xs: '18px', lg: '22px'},
                  color: 'secondary.main',
                }}
              >
                {p}
              </Typography>
            </Grid>
                
            <Grid item xs={12} sm={5} sx={{marginTop: {xs: '20px', sm: 0}, display: 'flex', justifyContent: 'center', gap: 5}}>
              <Grid>
                <Box sx={{width: '8em', height: '8em', backgroundColor: '#fff', border: '1px solid #424242', marginBottom: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                  <Wifi fontSize="large"/>
                  <Typography>Free Wifi</Typography>
                </Box>
                <Box sx={{width: '8em', height: '8em', backgroundColor: '#fffe', border: '1px solid #424242', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <Weekend fontSize="large"/>
                  <Typography>Fully Furnished</Typography>
                </Box>
              </Grid>
              <Grid>
                <Box sx={{width: '8em', height: '8em', backgroundColor: '#fff', border: '1px solid #424242', marginBottom: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
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
    </>
  );
};
