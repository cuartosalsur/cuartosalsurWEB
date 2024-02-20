import { useState } from 'react';
import { Typography, Grid, Box, Button, ButtonGroup } from '@mui/material';

const Mapas = {
  one: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12019.848691273733!2d-71.3332034440029!3d-41.13535173021739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b0f807a0e05%3A0xec42339f2b7c0fb7!2sBelgrano%2C%20San%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1708470630375!5m2!1ses!2sar",
  two: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12019.848691273733!2d-71.3332034440029!3d-41.13535173021739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b0f807a0e05%3A0xec42339f2b7c0fb7!2sBelgrano%2C%20San%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1708470630375!5m2!1ses!2sar",
  three: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.0473696826316!2d-71.31482572220438!3d-41.133491867590116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b72dbb708e1%3A0xd91b7e92f820aa94!2sCentro%20C%C3%ADvico%20Bariloche!5e0!3m2!1ses!2sar!4v1708473401371!5m2!1ses!2sar",
};

export const Ubicacion = ({
  titulo = 'UBICACION',
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
          padding: {xs: '15% 5%', lg: '5%'},
          bgcolor: '#4A5C49'
        }}
      >

      <Grid 
      container 
      justifyContent={'center'}
      alignItems={'center'}
      spacing={5}
      >
        <Grid item xs={12} sm={9} md={10}>
        <Typography
          sx={{
            fontSize: {xs: '35px', lg: '60px'},
            fontWeight: '500',
            color: 'third.main',
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
            
        <Grid item xs={12} sm={3} md={2} >
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
            fullWidth
            size="large"
          >
            <Button
              key="one"
              variant={selectedMap === 'one' ? 'contained' : 'outlined'}
              onClick={() => handleButtonClick('one')}
              color='third'
            >
              Amancay
            </Button>
            <Button
              key="two"
              variant={selectedMap === 'two' ? 'contained' : 'outlined'}
              onClick={() => handleButtonClick('two')}
              color='third'
            >
              Verbena
            </Button>
            <Button
              key="three"
              variant={selectedMap === 'three' ? 'contained' : 'outlined'}
              onClick={() => handleButtonClick('three')}
              color='third'
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
 