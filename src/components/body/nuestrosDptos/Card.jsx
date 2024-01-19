import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Card, CardMedia, CardContent, Typography, Button, CardActions, Modal, Box, Grid, Divider} from '@mui/material';

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

    const [selectedImage, setSelectedImage] = useState(fotosLista && fotosLista.length > 0 ? fotosLista[0].img : null);

    const handleThumbnailClick = (thumbnailUrl) => {
      setSelectedImage(thumbnailUrl);
    };

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
                overflow: 'hidden'
                }} >
                <Grid 
                container 
                >
                 <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'center'}}>
                  <Box sx={{ width:  '80%', height: '70vh' }}>
                    {/* Imagen grande */}
                    {selectedImage && (
                      <img alt="Selected" src={selectedImage} className="img-card" style={{ width:  '100%', height: '100%', maxHeight: '100%' }} />
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
                            style={{ width: '80px', height: '80px', cursor: 'pointer' }}
                            onClick={() => handleThumbnailClick(item.img)}
                          />
                        ))}
                    </Box>
                  </Box>
                </Grid>

                  <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ bgcolor: '#fff', borderRadius: 2, width: '100%', p: 3, maxHeight: '85vh', overflow: 'auto' }}>
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
                                <b style={{ marginRight: '0.5em' }}>Ubicacion:</b> {ubicacion} <Link to="/Ubicacion">Ver</Link>
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
