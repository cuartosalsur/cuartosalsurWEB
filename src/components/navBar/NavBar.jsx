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
            <Button component={NavLink} to="/Inicio" color='third' sx={{ fontWeight: 800, fontSize: '22px'}}>
              Inicio
            </Button>
            <Button component={NavLink} to="/Nosotros" color='third' sx={{ fontWeight: 800, fontSize: '22px'}}>
              Nosotros
            </Button>
            <Button component={NavLink} to="/NuestrosDepartamentos" color='third' sx={{ fontWeight: 800, fontSize: '22px'}}>
              Nuestros Departamentos
            </Button>
            <Button component={NavLink} to="/Ubicacion" color='third' sx={{ fontWeight: 800, fontSize: '22px'}}>
              Ubicacion
            </Button>
            <Button component={NavLink} to="/Galeria" color='third' sx={{ fontWeight: 800, fontSize: '22px'}}>
              Galeria
            </Button>
            <Button component={NavLink} to="/Contacto" color='third' sx={{ fontWeight: 800, fontSize: '22px'}}>
              Contacto
            </Button>
          </Toolbar>
        </AppBar>
      </>
    )
  }

