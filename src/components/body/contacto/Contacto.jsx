import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, InputBase, Box, Snackbar, Alert, AlertTitle } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { Mail, LocalPhone, Instagram} from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    fontSize: 22,
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const Contacto = ({
  titulo = 'CONTACTO',
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
          height: '100%',
          padding: {xs: '15% 5%', lg: '5%'},
          bgcolor: 'black'
        }}
      >
        <Typography
          sx={{
            fontSize: {xs: '35px', lg: '60px'},
            fontWeight: '500',
            color: 'third.main',
            marginBottom: {xs: '10%', md: '2%'},
          }}
        >{titulo}</Typography>

      <Grid 
      container 
      spacing={10}
      >
        <Grid item xs={12} md={7} sx={{order: { xs: 2, md: 1 }}}>
          <form ref={form} onSubmit={sendEmail}>
            <BootstrapInput 
              id="bootstrap-input"
              fullWidth  
              name="user_name" 
              defaultValue="Nombre"
            />

            <BootstrapInput 
              fullWidth 
              id="bootstrap-input"
              name="user_email" 
              defaultValue="correo@ejemplo.com"
              sx={{marginTop: {xs: '10%', sm:'4%'} }}
            />

            <BootstrapInput
              fullWidth 
              id="bootstrap-input"
              name="user_phone" 
              defaultValue="Número"
              sx={{marginTop: {xs: '10%', sm:'4%'}}}
            />

            <BootstrapInput 
              fullWidth 
              id="bootstrap-input"
              multiline
              rows={5}
              name="message" 
              defaultValue="Dejanos tu consulta aquí.."
              sx={{marginTop: {xs: '10%', sm:'4%'}}}
            />

            <LoadingButton
              loading={loading}
              variant="contained"
              type="submit"
              sx={{ marginTop: { xs: '10%', sm: '4%' } }}
              onClick={sendEmail}
              color='third'
              size='large'
            >
              Enviar
            </LoadingButton>
          </form>
        </Grid>
            
        <Grid item xs={12} md={5} sx={{order: { xs: 1, md: 2 }}}>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: 5}}>
            <Typography variant="h6" color="third.main">
              {p}
            </Typography>
            <Box sx={{display: 'flex', flexDirection: {xs: 'row'}, alignItems: 'center', gap: 2}}>
              <LocalPhone color='third'/>
              <Typography variant="h6" color="third.main">
                +54 11 5456 4929
            </Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: {xs: 'row'}, alignItems: 'center', gap: 2}}>
              <Mail color='third'/>
              <Typography variant="h6" color="third.main">
                cuartosalsur@outlook.com
              </Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: {xs: 'row'}, alignItems: 'center', gap: 2}}>
              <Instagram color='third'/>
              <RouterLink
                to="https://www.instagram.com/cuartosalsur_?igsh=dnBqNTM4dGd2aWF2" 
              >
                  <Typography
                    variant="h6"
                    color="third.main"
                    sx={{
                      color: '#fff',
                      '&:hover': {
                        color: '#E6F5A2',
                      },
                    }}
                  >
                  cuartosalsur_
                </Typography>
              </RouterLink>
            </Box>
          </Box>
        </Grid>
      </Grid>
      </Grid>

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
