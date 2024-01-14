import { useState } from 'react';
import {Card, CardMedia, CardContent, Typography, Button, CardActions, Modal, Box, Grid, Divider, ImageList, ImageListItem} from '@mui/material';

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
    modalContent: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      height: '95vh',
      transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
      border: '2px solid #000',
      borderRadius: 2,
      boxShadow: 24,
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
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
}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openImg, setOpenImg] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const handleOpenImg = (img) => {
        setSelectedImage(img);
        setOpenImg(true);
      };
    
      const handleCloseImg = () => {
        setSelectedImage(null);
        setOpenImg(false);
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
                        <Box>
                        <ImageList sx={{ height: '80vh' }} cols={2} rowHeight={164} >
                        {fotosLista && fotosLista.length > 0 && fotosLista.map((item) => (
                                <ImageListItem key={item.img}>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                    onClick={() => handleOpenImg(item.img)}
                                />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        </Box>                        
                    </Grid>
                    <Grid item xs={12} sm={7} sx={{order: { xs: 1, sm: 2 } }}>
                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography id="modal-modal-title" variant="h4" sx={{color: textColor}}>
                            Titulo
                        </Typography>
                        <Button onClick={handleClose} sx={{color: textColor}} >
                            cerrar
                        </Button>
                        </Box>
                        <Divider color={textColor} />
                        <CardContent>
                            <Typography id="modal-modal-description" variant="h6" sx={{color: textColor, mt: 1}}>
                                Camas:
                            </Typography>
                            <Typography id="modal-modal-description" variant="h6" sx={{color: textColor, mt: 1}}>
                                Baños:
                            </Typography>
                            <Typography id="modal-modal-description" variant="h6" sx={{color: textColor, mt: 1}}>
                                Cochera:
                            </Typography>
                            <Typography id="modal-modal-description" variant="h6" sx={{color: textColor, mt: 1}}>
                                Vista al lago:
                            </Typography>
                                <Typography id="modal-modal-description" variant="h6" sx={{color: textColor, mt: 2}}>
                                    Descripción: 
                                </Typography>
                                <Typography id="modal-modal-description" variant="body2" sx={{color: textColor, mt: 2}}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim nihil cupiditate cum, iusto omnis expedita ex libero dignissimos odio natus aspernatur consequatur dolorum exercitationem deserunt rerum blanditiis repellendus! Repudiandae, animi.
                                </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Box>
        </Box>
      </Modal>
    </div>

    <div>
    <Modal
        open={openImg}
        onClose={handleCloseImg}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.modalContent}>
            <Box
                sx={{      
                    width: {xs: '80vw', sm: '45vw'},
                    height: {xs: '80vh', sm: '85vh'},
                }}
            >
                <img src={selectedImage} alt="Full size" className='img-full'/>
            </Box>
            <Button onClick={handleCloseImg} >
                    cerrar
            </Button>
        </Box>
      </Modal>
    </div>
    </>
  )
}
