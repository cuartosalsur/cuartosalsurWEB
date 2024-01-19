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
  descripcionAmancay= `ideal para la familia. Vista al lago. Ubicado en el centro. El edificio cuenta con 
  ascensor y escalera. Departamento dos ambientes en el primer piso. Cochera. Amueblado. Cuenta con radiadores 
  en todos los ambientes. Tres camas, un somier y dos camas de una plaza, equipadas con blanquearía. Cocina 
  equipada con electrodomésticos y vajilla. Baño equipado con toallas, productos de higiene personal y secador 
  de pelo. Servicio de limpieza. Servicios de comunicación y entretenimiento que incluyen wifi, TV en todos los 
  ambientes con acceso a plataformas de entretenimiento visual y libros y juegos de mesa. Servicio de atención 
  personalizada (administrador). `,
  descripcionVerbena=``,
  descripcionLupines=``,
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
          bgcolor: '#FFF'
        }}
      >
        <Typography
          sx={{
            fontSize: {xs: '35px', lg: '50px'},
            fontWeight: '500',
            color: 'secondary.main',
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
          textColor='#424242'
          baños= '1'
          camas= '3'
          ocupacion= 'hasta 4 personas.'
          cochera= 'Si.'
          vistaLago= 'Si.'
          descripcionModal= {descripcionAmancay}
          ubicacion= '20 de Junio 781, San Carlos de Bariloche, Río Negro. - '
          />
        </Grid>

        <Grid item xs={12} sm={4}>
        <CardComponent 
          fotosLista={itemData15} 
          foto={foto2} 
          bgColorModal='#4C0052'
          tituloCard = 'Verbena'
          descripcionCard='Aqui va una descripción.'
          textColor='#424242'
          baños= 'Numero Baños'
          camas= 'numero camas'
          ocupacion= 'hasta n° personas'
          cochera= 'si tiene o no cochera'
          vistaLago= 'si tiene o no vista al lago'
          descripcionModal= {descripcionVerbena}
          ubicacion= '20 de Junio 781, San Carlos de Bariloche, Río Negro. - '
          />
        </Grid>

        <Grid item xs={12} sm={4}>
        <CardComponent 
          fotosLista={itemDataEspaña} 
          foto={foto3} 
          bgColorModal='#EE8B85'
          tituloCard = 'Lupines'
          descripcionCard='Aqui va una descripción.'
          textColor='#424242'
          baños= 'Numero Baños'
          camas= 'numero camas'
          ocupacion= 'hasta n° personas'
          cochera= 'si tiene o no cochera'
          vistaLago= 'si tiene o no vista al lago'
          descripcionModal= {descripcionLupines}
          ubicacion= 'España 334, San Carlos de Bariloche, Río Negro. - '
          />
        </Grid>
      </Grid>
      </Grid>
    </>
  );
};
