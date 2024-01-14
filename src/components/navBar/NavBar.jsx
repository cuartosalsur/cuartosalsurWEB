import { AppBar, Button, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

    return (
      <>
        <AppBar
          sx={{
            zIndex: 2,
            position:'fixed',
            backgroundColor: 'transparent',
            display: {xs: 'none', md: 'block'},
          }}
        >
          <Toolbar
            sx={{
              margin: '0 5%',
              gap: '3%'
            }}
          >
            <Button component={NavLink} to="/Inicio" color='primary' sx={{fontFamily: 'Nunito Sans', fontWeight: 800}}>
              Inicio
            </Button>
            <Button component={NavLink} to="/Nosotros" color='primary' sx={{fontFamily: 'Nunito Sans', fontWeight: 800}}>
              Nosotros
            </Button>
            <Button component={NavLink} to="/NuestrosDepartamentos" color='primary' sx={{fontFamily: 'Nunito Sans', fontWeight: 800}}>
              Nuestros Departamentos
            </Button>
            <Button component={NavLink} to="/Ubicacion" color='primary' sx={{fontFamily: 'Nunito Sans', fontWeight: 800}}>
              Ubicacion
            </Button>
            <Button component={NavLink} to="/Galeria" color='primary' sx={{fontFamily: 'Nunito Sans', fontWeight: 800}}>
              Galeria
            </Button>
            <Button component={NavLink} to="/Contacto" color='primary' sx={{fontFamily: 'Nunito Sans', fontWeight: 800}}>
              Contacto
            </Button>
          </Toolbar>
        </AppBar>
      </>
    )
  }

