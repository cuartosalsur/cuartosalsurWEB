import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Card, CardMedia, CardContent, Typography, Button, CardActions, Modal, Box, Grid, Divider, ImageList, ImageListItem} from '@mui/material';
//Light Gallery
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const style = {
    boxStyle:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: 2,
        boxShadow: 24,
        p: 1,
    },
  };

export const CardComponent = ({
    foto,
    tituloCard,
    descripcionCard,
    bgColorModal,
    fotosLista,
    textColor,
    cardComponent, 
    camas,
    ocupacion,
    baños,
    cochera,
    vistaLago,
    descripcionModal,
    ubicacion,
}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
    <Card sx={{ maxWidth: 500, height: 390, boxShadow: '1px 2px 4px 1px' }} className='cardBox'>
      <CardMedia
        component={cardComponent || 'img'}
        alt="Dpto 13"
        height="200"
        image={foto}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {tituloCard}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descripcionCard}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen}>Leer mas</Button>
      </CardActions>
    </Card>

    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{zIndex: 5}}
      >
        <Box sx={style.boxStyle}>
            <Box sx={{
                border: '1px solid #000', 
                borderRadius: 2, 
                bgcolor: bgColorModal, 
                p: 2,  
                width: '100%',
                height: '90vh',
                overflow: 'auto'
                }} >
                <Grid 
                container 
                spacing={10}
                >
                  <Grid item xs={12} sm={5} sx={{order: { xs: 2, sm: 1 }}}>
                      <Box sx={{ height: '80vh', overflow: 'auto' }}>
                        <LightGallery
                          speed={600}
                          plugins={[lgThumbnail, lgZoom]}
                          licenseKey={''}
                          className="Light-Card"
                        >
                          {fotosLista && fotosLista.length > 0 && fotosLista.map((item) => (
                            <a key={item.img} href={item.img} >
                              <img alt={item.title} src={item.img} className="img-card" />
                            </a>
                          ))}
                        </LightGallery>
                      </Box>                        
                  </Grid>

                  <Grid item xs={12} sm={7} sx={{order: { xs: 1, sm: 2 }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{bgcolor: '#fff', borderRadius: 2, height: {xs: '100%', md:'80vh'}, width: '100%', p: 3}}>
                      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                      <Typography id="modal-modal-title" sx={{color: textColor, fontSize: {xs: 20, sm: 25, md: 30}}}>
                          {tituloCard}
                      </Typography>
                      <Button onClick={handleClose} sx={{color: textColor}} >
                          cerrar
                      </Button>
                      </Box>
                      <Divider color={textColor} />
                      <CardContent>
                          <Typography id="modal-modal-description" sx={{color: textColor, mt: 1, fontSize: {xs: 17, sm: 20}}}>
                            <b>Ubicacion:</b> {ubicacion} <Link to="/Ubicacion">Ver</Link>
                          </Typography>
                          <Typography id="modal-modal-description" sx={{color: textColor, mt: 1, fontSize: {xs: 17, sm: 20}}}>
                            <b>Camas:</b> {camas}
                          </Typography>
                          <Typography id="modal-modal-description" sx={{color: textColor, mt: 1, fontSize: {xs: 17, sm: 20}}}>
                            <b>Ocupacion:</b> {ocupacion}
                          </Typography>
                          <Typography id="modal-modal-description" sx={{color: textColor, mt: 1, fontSize: {xs: 17, sm: 20}}}>
                            <b>Baños:</b> {baños}
                          </Typography>
                          <Typography id="modal-modal-description" sx={{color: textColor, mt: 1, fontSize: {xs: 17, sm: 20}}}>
                            <b>Cochera:</b> {cochera}
                          </Typography>
                          <Typography id="modal-modal-description" sx={{color: textColor, mt: 1, fontSize: {xs: 17, sm: 20}}}>
                            <b>Vista al lago:</b> {vistaLago}
                          </Typography>
                          <Typography id="modal-modal-description" sx={{color: textColor, mt: 2, fontSize: {xs: 17, sm: 20}}}>
                            <b>Descripción: </b>  
                          </Typography>
                          <Typography id="modal-modal-description" sx={{color: textColor, mt: 2, fontSize: {xs: 15, sm: 18}}}>
                            {descripcionModal}
                          </Typography>
                      </CardContent>
                    </Box>
                  </Grid>
                </Grid>
            </Box>
        </Box>
      </Modal>
    </div>
    </>
  )
}
