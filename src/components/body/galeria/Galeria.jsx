import { Typography, Grid } from '@mui/material';
//Light Gallery
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
//data
import { itemDataGeneral } from '../../../assets/Data/general';

export const Galeria = ({titulo="GALERÍA"}) => {
  return (
    <>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          height: {xs: '100%', sm: '100vh'},
          padding: {xs: '10% 5%', lg: '5%'},
          bgcolor: '#fff'
        }}
      >
        <Grid item xs={12} sx={{ marginBottom: { xs: '10%', md: '1%' } }}>
          <Typography
            sx={{
              fontSize: {xs: '35px', lg: '60px'},
              fontWeight: '500',
              color: 'black',
              textAlign: 'center',
              mb: 2
            }}
          >{titulo}</Typography>
        </Grid>

        <Grid item xs={12} 
        sx={{
          width: '100vw', 
          height:{ xs: '72vh', sm:'65vh'},  
          overflowX: 'auto', 
          textAlign: 'center',
          }}>
          <LightGallery
            speed={600}
            plugins={[lgThumbnail, lgZoom]}
            licenseKey={''}
          >
            {itemDataGeneral.map((item) => (
              <a key={item.img} href={item.img} className="a-light">
                <img alt={item.title} src={item.img} className="img-light" />
              </a>
            ))}
          </LightGallery>
        </Grid>
      </Grid>
    </>
  )
}

