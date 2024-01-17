import { Typography, Grid } from '@mui/material';
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
      >
        <Grid item xs={12} sm={6}>
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
            
        <Grid item xs={12} sm={6} sx={{marginTop: {xs: '20px', sm: 0}, justifyContent: 'center'}}>
            <img src={Logo} className='logo'/>          
        </Grid>

      </Grid>
      </Grid>
    </>
  );
};
