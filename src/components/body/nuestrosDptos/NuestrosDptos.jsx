import { Typography, Grid } from '@mui/material';
import { CardComponent } from './Card';
//imagenes
import { itemData } from '../../../assets/Data/Data';
import { itemData15 } from '../../../assets/Data/Data15';
import { itemDataEspaña } from '../../../assets/Data/DataEspaña';
import foto1 from '../../../assets/img/dpto13/img1.jpg';
import foto2 from '../../../assets/img/dpto15/fotoo6.jpg';
import foto3 from '../../../assets/img/España/foto2.jpg';

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
          height: {xs:'100%', sm: '100vh'},
          padding: {xs: '15% 5%', lg: '7% 5%'},
          bgcolor: '#F0C8A2'
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
        <Grid item xs={12} sm={4}>
          <CardComponent 
          fotosLista={itemData} 
          foto={foto1} 
          bgColorModal='#000252'
          tituloCard = 'Amancay'
          descripcionCard='Aqui va una descripción.'
          textColor='#A04000'
          baños= 'Numero Baños'
          camas= 'numero camas'
          ocupacion= 'hasta n° personas'
          cochera= 'si tiene o no cochera'
          vistaLago= 'si tiene o no vista al lago'
          descripcionModal= 'una breve descripción del dpto.'
          />
        </Grid>
            
        <Grid item xs={12} sm={4}>
        <CardComponent 
          fotosLista={itemDataEspaña} 
          foto={foto3} 
          bgColorModal='#EE8B85'
          tituloCard = 'Mariposa Blanca'
          descripcionCard='Aqui va una descripción.'
          textColor='#A04000'
          baños= 'Numero Baños'
          camas= 'numero camas'
          ocupacion= 'hasta n° personas'
          cochera= 'si tiene o no cochera'
          vistaLago= 'si tiene o no vista al lago'
          descripcionModal= 'una breve descripción del dpto.'
          />
        </Grid>

        <Grid item xs={12} sm={4}>
        <CardComponent 
          fotosLista={itemData15} 
          foto={foto2} 
          bgColorModal='#4C0052'
          tituloCard = 'Verbena'
          descripcionCard='Aqui va una descripción.'
          textColor='#A04000'
          baños= 'Numero Baños'
          camas= 'numero camas'
          ocupacion= 'hasta n° personas'
          cochera= 'si tiene o no cochera'
          vistaLago= 'si tiene o no vista al lago'
          descripcionModal= 'una breve descripción del dpto.'
          />
        </Grid>
      </Grid>
      </Grid>
    </>
  );
};
