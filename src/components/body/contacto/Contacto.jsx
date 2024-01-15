import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Grid, Typography, TextField, InputAdornment, Button, Box, Snackbar, Alert, AlertTitle } from '@mui/material';
import {AccountCircle, Mail, LocalPhone} from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';

export const Contacto = ({
  titulo = 'Contacto',
  p = `Puede comunicarse por cualquiera de los medios que ofrecemos. Su consulta es bienvenida.`,
}) => {

  const form = useRef();
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs.sendForm('service_ty1qedl', 'template_6rw1bpr', form.current, '0RNNH6Ewmmq-JbhRg')
    .then(() => {
      setSuccessOpen(true);
    })
    .catch(() => {
      setErrorOpen(true);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
  };

  const handleErrorClose = () => {
    setErrorOpen(false);
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
          bgcolor: '#FDF2D9'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Kalam',
            fontSize: {xs: '35px', lg: '50px'},
            fontWeight: '500',
            color: 'primary.main',
            marginBottom: {xs: '10%', md: '2%'},
          }}
        >{titulo}</Typography>

      <Grid 
      container 
      spacing={10}
      >
        <Grid item xs={12} sm={7}>
          <form ref={form} onSubmit={sendEmail}>
            <TextField 
              fullWidth 
              color="primary" 
              focused 
              id="outlined-basic" 
              label="Nombre" 
              name="user_name"
              variant="outlined"  
              defaultValue="Nombre"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />

            <TextField 
              fullWidth 
              color="primary" 
              focused 
              id="outlined-basic" 
              label="Email" 
              name="user_email"
              variant="outlined"  
              defaultValue="correo@ejemplo.com"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail />
                  </InputAdornment>
                ),
              }}
              sx={{marginTop: {xs: '10%', sm:'5%'}}}
            />

            <TextField 
              fullWidth 
              color="primary" 
              focused 
              id="outlined-basic" 
              label="Número" 
              name="user_phone"
              variant="outlined"  
              defaultValue="+54 11 123 456 78"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPhone />
                  </InputAdornment>
                ),
              }}
              sx={{marginTop: {xs: '10%', sm:'5%'}}}
            />

            <TextField 
              fullWidth 
              color="primary" 
              focused 
              multiline
              id="outlined-multiline-static"
              rows={4}
              label="Mensaje" 
              name="message"
              variant="outlined"  
              defaultValue="Dejanos tu consulta aquí.."
              sx={{marginTop: {xs: '10%', sm:'5%'}}}
            />

            <LoadingButton
              loading={loading}
              variant="outlined"
              type="submit"
              sx={{ marginTop: { xs: '10%', sm: '5%' } }}
              onClick={sendEmail}
            >
              Enviar
            </LoadingButton>
          </form>
        </Grid>
            
        <Grid item xs={12} sm={5}>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: 5}}>
            <Typography variant="h6" color="secondary">
              {p}
            </Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2}}>
              <LocalPhone />
              <Typography variant="h6" color="secondary">
                +54 11 5456 4929
            </Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2}}>
              <Mail />
              <Typography variant="h6" color="secondary">
                cuartosalsur@outlook.com
            </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      </Grid>

//Alertas
      <Snackbar open={successOpen} autoHideDuration={6000} onClose={handleSuccessClose} > 
        <Alert onClose={handleSuccessClose} severity="success" >
          <AlertTitle>
            ¡Éxito!
          </AlertTitle>
          <Typography>
            Su mensaje se ha enviado correctamente. En la brevedad nos comunicaremos contigo.
          </Typography>
        </Alert>
      </Snackbar>

      <Snackbar open={errorOpen} autoHideDuration={6000} onClose={handleErrorClose}>
        <Alert onClose={handleErrorClose} severity="error" sx={{xs:'90%', sm: '70%', md: '50%'}}>
          <AlertTitle>
            Ocurrió un Error
          </AlertTitle>
          <Typography>
            Lo sentimos, su mensaje no pudo ser enviado. Por favor, comuníquese con nosotros a través de nuestros medios alternativos. Muchas gracias y disculpas por los inconvenientes.
          </Typography>
        </Alert>
      </Snackbar>
    </>
  )
}
