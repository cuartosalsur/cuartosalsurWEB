import { createTheme } from "@mui/material/styles";

export const generalTheme = createTheme({
    palette: {
        primary:{
            main: '#7B241C'
        },
        secondary:{
            main: '#424242'
        },
        third:{
            main: '#F9E79F'
        },
    },
    typography: {
        fontFamily: ['Poppins', 'Nunito', 'Roboto'].join(','),
      },
})