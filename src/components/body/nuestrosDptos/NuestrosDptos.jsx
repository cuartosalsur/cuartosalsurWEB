import { Typography, Grid } from '@mui/material';
import { CardComponent } from './Card';
//imagenes
import { itemData } from '../../../assets/Data/Data';
import { itemData15 } from '../../../assets/Data/Data15';
import { itemDataEspaña } from '../../../assets/Data/DataEspaña';
import foto1 from '../../../assets/img/dpto13/img6.jpg';
import foto2 from '../../../assets/img/dpto15/fotoo6.jpg';
import foto3 from '../../../assets/img/España/foto13.jpg';

export const NuestrosDptos = ({
  titulo = 'NUESTROS DEPARTAMENTOS',
  descripcionAmancay= `ideal para la familia. Vista al lago. Ubicado en el centro. El edificio cuenta con 
  ascensor y escalera. Departamento dos ambientes en el primer piso. Cochera. Amueblado. Cuenta con radiadores 
  en todos los ambientes. Tres camas, un somier y dos camas de una plaza, equipadas con blanquearía. Cocina 
  equipada con electrodomésticos y vajilla. Baño equipado con toallas, productos de higiene personal y secador 
  de pelo. Servicio de limpieza. Servicios de comunicación y entretenimiento que incluyen wifi, TV en todos los 
  ambientes con acceso a plataformas de entretenimiento visual y libros y juegos de mesa. Servicio de atención 
  personalizada (administrador). `,
  descripcionVerbena=`ideal para la familia. Vista al lago. Ubicado en el centro. El edificio cuenta con ascensor 
  y escalera. Departamento dos ambientes en el primer piso. Cochera. Amueblado. Cuenta con radiadores en todos 
  los ambientes. Tres camas, un somier y dos camas de una plaza, equipadas con blanquearía Cocina equipada con 
  electrodomésticos y vajilla. Baño equipado con toallas, productos de higiene personal y secador de pelo. 
  Servicio de limpieza. Servicios de comunicación y entretenimiento que incluyen wifi, TV en todos los ambientes 
  con acceso a plataformas de entretenimiento visual y libros y juegos de mesa. Servicio de atención 
  personalizada (administrador). `,
  descripcionLupines=` ideal para parejas. Ubicado en el centro. El edificio cuenta con ascensor y escalera. 
  Departamento mono ambiente en el segundo piso. Amueblado. Cuenta con radiador en todos los ambientes. Una 
  cama, somier, equipada con blanquearía. Cocina equipada con electrodomésticos y vajilla. Baño equipado con 
  toallas, productos de higiene personal y secador de pelo. Servicio de limpieza. Servicios de comunicación y 
  entretenimiento que incluyen wifi y TV en todos los ambientes con acceso a plataformas de entretenimiento. 
  Servicio de atención personalizada (administrador).`,
}) => {
  return (
    <>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          height: {xs:'100%', md: '100vh'},
          padding: {xs: '15% 5%', lg: '7% 5%'},
          bgcolor: '#FFF',
          marginBottom: {xs: 0, md: 2, lg: 4}
        }}
      >
        <Typography
          sx={{
            fontSize: {xs: '35px', lg: '60px'},
            fontWeight: '500',
            color: 'secondary.main',
            marginBottom: {xs: '10%', md: '4%'},
          }}
        >{titulo}</Typography>

      <Grid 
      container 
      spacing={10}
      justifyContent={'center'}
      >
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent 
          fotosLista={itemData} 
          foto={foto1} 
          bgColorModal='#8D9477'
          tituloCard = 'Amancay'
          descripcionCard='Ideal para familias.'
          textColor='#fff'
          baños= '1'
          camas= '3'
          ocupacion= 'Hasta 4 personas.'
          cochera= 'Si.'
          vistaLago= 'Si.'
          descripcionModal= {descripcionAmancay}
          ubicacion= '20 de Junio 781, San Carlos de Bariloche, Río Negro. - '
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <CardComponent 
          fotosLista={itemData15} 
          foto={foto2} 
          bgColorModal='#8D9477'
          tituloCard = 'Verbena'
          descripcionCard='Ideal para familias.'
          textColor='#fff'
          baños= '1'
          camas= '3'
          ocupacion= 'Hasta 4 personas.'
          cochera= 'Si.'
          vistaLago= 'Si.'
          descripcionModal= {descripcionVerbena}
          ubicacion= '20 de Junio 781, San Carlos de Bariloche, Río Negro. - '
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <CardComponent 
          fotosLista={itemDataEspaña} 
          foto={foto3} 
          bgColorModal='#8D9477'
          tituloCard = 'Lupines'
          descripcionCard='Ideal para parejas.'
          textColor='#fff'
          baños= 'Numero Baños'
          camas= '1'
          ocupacion= 'Hasta 2 personas.'
          cochera= 'No.'
          vistaLago= 'No.'
          descripcionModal= {descripcionLupines}
          ubicacion= 'España 334, San Carlos de Bariloche, Río Negro. - '
          />
        </Grid>
      </Grid>
      </Grid>
    </>
  );
};
