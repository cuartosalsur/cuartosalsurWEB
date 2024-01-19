import { useState } from 'react';
import { Typography, Grid, Box, Button, ButtonGroup } from '@mui/material';

const Mapas = {
  one: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.828040094745!2d-71.31927672449147!3d-41.13827973125446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b12242d9b21%3A0x209d3ee3b4b28707!2s20%20de%20Junio%20781%2C%20San%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1705441289688!5m2!1ses!2sar",
  two: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.828040094745!2d-71.31927672449147!3d-41.13827973125446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b12242d9b21%3A0x209d3ee3b4b28707!2s20%20de%20Junio%20781%2C%20San%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1705441289688!5m2!1ses!2sar",
  three: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.053133911701!2d-71.31691882449181!3d-41.13336603095253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b0c56f812d5%3A0x9836f7da2a99a2f9!2sEspa%C3%B1a%20334%2C%20R8400%20San%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1705441048951!5m2!1ses!2sar",
};

export const Ubicacion = ({
  titulo = 'Ubicacion',
}) => {
  const [selectedMap, setSelectedMap] = useState('one');

  const handleButtonClick = (key) => {
    setSelectedMap(key);
  };
  return (
    <>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          height: {xs: '100%', sm: '100vh'},
          padding: {xs: '15% 5%', lg: '7% 5%'},
          bgcolor: '#FFF'
        }}
      >

      <Grid 
      container 
      justifyContent={'center'}
      alignItems={'center'}
      spacing={5}
      >
        <Grid item xs={12} sm={8} md={9}>
        <Typography
          sx={{
            fontSize: {xs: '35px', lg: '50px'},
            fontWeight: '500',
            color: 'secondary.main',
            marginBottom: {xs: '10%', md: '2%'},
            textAlign: 'center'
          }}
        >{titulo}</Typography>
        <Box sx={{ width: '100%', height: '60vh'}}>
          <iframe
            title="Google Maps"
            src={Mapas[selectedMap]}
            sx={{ border: 0 }}
            width='100%'
            height='100%'
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
        </Grid>
            
        <Grid item xs={12} sm={4} md={3} >
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
          >
            <Button
              key="one"
              variant={selectedMap === 'one' ? 'contained' : 'outlined'}
              onClick={() => handleButtonClick('one')}
            >
              Amancay
            </Button>
            <Button
              key="two"
              variant={selectedMap === 'two' ? 'contained' : 'outlined'}
              onClick={() => handleButtonClick('two')}
            >
              Verbena
            </Button>
            <Button
              key="three"
              variant={selectedMap === 'three' ? 'contained' : 'outlined'}
              onClick={() => handleButtonClick('three')}
            >
              Lupines
            </Button>
          </ButtonGroup>
          </Box>       
        </Grid>
      </Grid>
      </Grid>
    </>
  );
};
 