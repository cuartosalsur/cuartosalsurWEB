import { AppBar, Button, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

    return (
      <>
        <AppBar
          sx={{
            zIndex: 2,
            position:'fixed',
            backgroundColor: 'black',
            display: {xs: 'none', md: 'block'},
          }}
        >
          <Toolbar
            sx={{
              margin: '0 5%',
              gap: '3%'
            }}
          >
            <Button component={NavLink} to="/Inicio" color='third' sx={{ fontWeight: 800, fontSize: { md: '1em', lg:'1.2em'}}}>
              Inicio
            </Button>
            <Button component={NavLink} to="/Nosotros" color='third' sx={{ fontWeight: 800, fontSize: { md: '1em', lg:'1.2em'}}}>
              Nosotros
            </Button>
            <Button component={NavLink} to="/NuestrosDepartamentos" color='third' sx={{ fontWeight: 800, fontSize: { md: '1.2em', lg:'1.2em'}}}>
              Nuestros Departamentos
            </Button>
            <Button component={NavLink} to="/Ubicacion" color='third' sx={{ fontWeight: 800, fontSize: { md: '1em', lg:'1.2em'}}}>
              Ubicacion
            </Button>
            <Button component={NavLink} to="/Galeria" color='third' sx={{ fontWeight: 800, fontSize: { md: '1em', lg:'1.2em'}}}>
              Galeria
            </Button>
            <Button component={NavLink} to="/Contacto" color='third' sx={{ fontWeight: 800, fontSize: { md: '1em', lg:'1.2em'}}}>
              Contacto
            </Button>
          </Toolbar>
        </AppBar>
      </>
    )
  }

