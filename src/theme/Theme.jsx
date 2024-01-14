import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { generalTheme } from './generalTheme';

// eslint-disable-next-line react/prop-types
export const Theme = ({ children }) => {
    return (    
      <ThemeProvider theme={ generalTheme }>
  
          <CssBaseline/>
  
          {children}
  
      </ThemeProvider>
    )
  }
