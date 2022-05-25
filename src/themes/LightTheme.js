import { createTheme } from '@mui/material/styles'

export const themeOptions = {
    palette: {
      type: 'light',
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
        default: '#d3d0cb',
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
  };

const theme = createTheme(themeOptions);
export default theme