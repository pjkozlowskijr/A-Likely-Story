import { createTheme } from '@mui/material/styles'

export const themeOptions = {
    palette: {
      type: 'dark',
      mode: 'dark',
      primary: {
        main: '#2e5266',
      },
      secondary: {
        main: '#6a3e37',
      },
      error: {
        main: '#bb4430',
      },
      warning: {
        main: '#bda04f',
      },
      info: {
        main: '#7ebdc2',
      },
      success: {
        main: '#659c43',
      },
      background: {
        default: '#1a140f',
        paper: '#424242'
      },
    },
    typography: {
      fontFamily: 'Lato',
    },
    props: {
      MuiTooltip: {
        arrow: true,
      },
      MuiList: {
        dense: true,
      },
      MuiMenuItem: {
        dense: true,
      },
      MuiTable: {
        size: 'small',
      },
    },
    components: {
      MuiAppBar:{
          styleOverrides:{
              colorPrimary:{
                  backgroundColor: '#6a3e37'
              }
          }
      }
    }
  }

const theme = createTheme(themeOptions);
export default theme