import { Typography, Grid } from '@mui/material';
import { itemData } from '../../../assets/Data';
import { CardComponent } from './Card';
import foto1 from '../../../assets/img/dpto13/img1.jpg';

export const NuestrosDptos = ({
  titulo = 'Nuestros Departamentos',
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
          bgcolor: '#F2ECDA'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Kalam',
            fontSize: {xs: '35px', lg: '50px'},
            fontWeight: '500',
            color: 'primary.main',
            marginBottom: {xs: '10%', md: '2%'},
          }}
        >{titulo}</Typography>

      <Grid 
      container 
      spacing={10}
      >
        <Grid item xs={12} sm={6}>
          <CardComponent 
          fotosLista={itemData} 
          foto={foto1} 
          bgColorModal='#241178'
          tituloCard = 'Nombre dpto'
          descripcionCard='Aqui va una descripción.'
          textColor='#A04000'
          baños= 'Numero Baños'
          camas= 'numero camas y para cuántas personas'
          cochera= 'si tiene o no cochera'
          vistaLago= 'si tiene o no vista al lago'
          descripcionModal= 'una breve descripción del dpto.'
          />
        </Grid>
            
        <Grid item xs={12} sm={5}>

        </Grid>
      </Grid>
      </Grid>
    </>
  );
};
