import { createTheme } from "@mui/material/styles";

export const generalTheme = createTheme({
    palette: {
        primary:{
            main: '#4A5C49'
        },
        secondary:{
            main: '#000'
        },
        third:{
            main: '#FFF'
        },
    },
    typography: {
        fontFamily: ['Montserrat', 'Roboto'].join(','),
      },
})