import { useState } from 'react';
import { Typography, Grid, Box, Button, ButtonGroup } from '@mui/material';

const styles = {
  bgNosotrosStyle: {
  backgroundColor: '#f5f5dc',
  },
};

const Mapas = {
  one: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.8705237780314!2d-71.32058812220305!3d-41.137352367826175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b1223da529d%3A0x6f9ffe8bb1fc13a5!2s20%20de%20Junio%20599-657%2C%20San%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1705249796101!5m2!1ses!2sar",
  two: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.922565973069!2d-71.31863122449158!3d-41.136216331127706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b0df425eef3%3A0x958de3a9c25b0a48!2sGrupo%20de%20Apoyo%20A%20la%20Lactancia%20Materna%20de%20San%20Car!5e0!3m2!1ses!2sar!4v1705253773049!5m2!1ses!2sar",
  three: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1502.5299704246665!2d-71.31586746415014!3d-41.133217430943326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b0c4589a31d%3A0x6e62fc17b5fff03d!2sEspa%C3%B1a%2C%20San%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1705253921568!5m2!1ses!2sar",
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
    <div style={styles.bgNosotrosStyle}>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          height: {xs: '100%', sm: '100vh'},
          padding: {xs: '15% 5%', lg: '7% 5%'},
        }}
      >

      <Grid 
      container 
      justifyContent={'center'}
      alignItems={'center'}
      spacing={5}
      >
        <Grid item xs={12} sm={8}>
        <Typography
          sx={{
            fontFamily: 'Kalam',
            fontSize: {xs: '35px', lg: '50px'},
            fontWeight: '500',
            color: 'primary.main',
            marginBottom: {xs: '10%', md: '2%'},
            textAlign: 'center'
          }}
        >{titulo}</Typography>
        <Box sx={{ width: '100%', height: '70vh'}}>
        <iframe
          title="Google Maps"
          src={Mapas[selectedMap]}
          sx={{ border: 0 }}
                width='100%'
                height='80%'
                allowFullScreen="true"
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
              Dpto 13
            </Button>
            <Button
              key="two"
              variant={selectedMap === 'two' ? 'contained' : 'outlined'}
              onClick={() => handleButtonClick('two')}
            >
              Dpto 14
            </Button>
            <Button
              key="three"
              variant={selectedMap === 'three' ? 'contained' : 'outlined'}
              onClick={() => handleButtonClick('three')}
            >
              Dpto España
            </Button>
          </ButtonGroup>
          </Box>
       
        </Grid>

      </Grid>
      </Grid>
    </div>
    </>
  );
};

/*
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.922565973069!2d-71.31863122449158!3d-41.136216331127706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b0df425eef3%3A0x958de3a9c25b0a48!2sGrupo%20de%20Apoyo%20A%20la%20Lactancia%20Materna%20de%20San%20Car!5e0!3m2!1ses!2sar!4v1705253773049!5m2!1ses!2sar"
            sx={{ border: 0 }}
            width='100%'
            height='80%'
            allowFullScreen="true"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1502.5299704246665!2d-71.31586746415014!3d-41.133217430943326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b0c4589a31d%3A0x6e62fc17b5fff03d!2sEspa%C3%B1a%2C%20San%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1705253921568!5m2!1ses!2sar"
            sx={{ border: 0 }}
            width='100%'
            height='80%'
            allowFullScreen="true"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
*/