import { Typography, Grid, ImageList, ImageListItem } from '@mui/material';
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

export const Galeria = ({titulo="Galería"}) => {
  return (
    <>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          height: {xs: '100%', sm: '100vh'},
          padding: {xs: '10% 5%', lg: '7% 5%'},
          bgcolor: '#FFF'
        }}
      >
        <Grid item xs={12} sx={{ marginBottom: { xs: '10%', md: '1%' } }}>
          <Typography
            sx={{
              fontSize: {xs: '35px', lg: '50px'},
              fontWeight: '500',
              color: 'secondary.main',
              textAlign: 'center'
            }}
          >{titulo}</Typography>
        </Grid>

        <Grid item xs={12} 
        sx={{
          width: '100vw', 
          height:{ xs: '72vh', sm:'65vh'},  
          overflowX: 'auto', 
          textAlign: 'center',
          boxShadow: '1px 2px 4px 1px'
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

