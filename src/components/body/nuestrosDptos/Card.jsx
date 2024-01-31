import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Card, CardMedia, CardContent, Typography, Button, CardActions, Modal, Box, Grid, Divider} from '@mui/material';
import LogoFragment from '../../../assets/img/logo-fragment.png';

const style = {
    boxStyle:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        bgcolor: '#E6F5A2',
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

    const [selectedImage, setSelectedImage] = useState(fotosLista && fotosLista.length > 0 ? fotosLista[0].img : null);

    const handleThumbnailClick = (thumbnailUrl) => {
      setSelectedImage(thumbnailUrl);
    };

  return (
    <>
    <Box sx={{ position: 'relative' }} className='cardBox'>
      <Card sx={{ maxWidth: 500, height: 390, boxShadow: '1px 3px 5px 2px', bgcolor: '#E6F5A2' }}>
        <CardMedia
          component={cardComponent || 'img'}
          alt="Dpto 13"
          height="200"
          image={foto}
        />
        <CardContent sx={{textAlign: 'center', mt: 3}}>
          <Typography gutterBottom variant="h5" component="div" color={'secondary.main'} fontSize={'27px'}>
            <b>{tituloCard}</b>
          </Typography>
          <Typography variant="body2" color="secondary.main" fontSize={'20px'} >
            {descripcionCard}
          </Typography>
        </CardContent>
        <CardActions >
          <Button size="small" onClick={handleOpen} color='secondary' variant='contained'>Leer mas</Button>
        </CardActions>
      </Card>
      <Box sx={{ position: 'absolute', bottom: -45, right: {xs: -20,sm: -35,md:-40} }}>
        <img src={LogoFragment} alt="Logo" className='logo-fragment' />
      </Box>
    </Box>

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
                p: {xs: 1, md:2},  
                width: '100%',
                height: '90vh',
                overflow: {xs: 'auto', md: 'hidden'}
                }} >
                <Grid 
                container 
                >
                 <Grid item xs={12} md={7} sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', alignItems: 'center', maxHeight: '100%', overflow: {xs: 'hidden', md: 'none'}, marginBottom: {xs: 2, md: 0}}}>
                  <Box sx={{ width:  '85%', height:{ xs: '60vh', md:'70vh'}, alignItems: 'center' }}>
                    {/* Imagen grande */}
                    {selectedImage && (
                      <img alt="Selected" src={selectedImage} style={{ width:  '100%', height: '85%', maxHeight: '100%' }} />
                    )}

                    {/* Miniaturas */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2, width: '100%' }}>
                      {fotosLista &&
                        fotosLista.length > 0 &&
                        fotosLista.slice(0, 3).map((item) => (
                          <img
                            key={item.img}
                            alt={item.title}
                            src={item.img}
                            className="img-card"
                            style={{ width: '8em', height: '6em', cursor: 'pointer' }}
                            onClick={() => handleThumbnailClick(item.img)}
                          />
                        ))}
                    </Box>
                  </Box>
                </Grid>

                  <Grid item xs={12} md={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ bgcolor: '#4A5C49', borderRadius: 2, width: '100%', p: {xs: 1, md:3}, height: '85vh', overflow: 'auto' }}>
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
                              <Typography id="modal-modal-description" sx={{color: textColor, mt: 1, fontSize: {xs: 13, sm: 15}}}>
                                <b style={{ marginRight: '0.5em' }}>Ubicacion:</b> {ubicacion} <Link to="/Ubicacion" >Ver</Link>
                              </Typography>
                              <Typography id="modal-modal-description" sx={{color: textColor, mt: 1, fontSize: {xs: 13, sm: 15}}}>
                                <b style={{ marginRight: '0.5em' }}>Camas:</b> {camas}
                              </Typography>
                              <Typography id="modal-modal-description" sx={{color: textColor, mt: 1, fontSize: {xs: 13, sm: 15}}}>
                                <b style={{ marginRight: '0.5em' }}>Ocupacion:</b> {ocupacion}
                              </Typography>
                              <Typography id="modal-modal-description" sx={{color: textColor, mt: 1, fontSize: {xs: 13, sm: 15}}}>
                                <b style={{ marginRight: '0.5em' }}>Baños:</b> {baños}
                              </Typography>
                              <Typography id="modal-modal-description" sx={{color: textColor, mt: 1, fontSize: {xs: 13, sm: 15}}}>
                                <b style={{ marginRight: '0.5em' }}>Cochera:</b> {cochera}
                              </Typography>
                              <Typography id="modal-modal-description" sx={{color: textColor, mt: 1, fontSize: {xs: 13, sm: 15}}}>
                                <b style={{ marginRight: '0.5em' }}>Vista al lago:</b> {vistaLago}
                              </Typography>
                              <Typography id="modal-modal-description" sx={{color: textColor, mt: 2, fontSize: {xs: 13, sm: 15}}}>
                                <b style={{ marginRight: '0.5em' }}>Descripción: </b> {descripcionModal}
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
