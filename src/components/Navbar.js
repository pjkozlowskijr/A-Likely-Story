import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import ThemeSwitch from './ThemeSwitch';

// ##############################################################
// Navbar (also outer container for all viewed components)
// ##############################################################

const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft({children}) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const {user} = useContext(AppContext)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{mr:3}}>
            <Link to='/A-Likely-Story'>
              <img height="40px" style={{verticalAlign:'top'}}src="https://res.cloudinary.com/detcvmtip/image/upload/v1657048469/bookstore/android-chrome-192x192_chhqzw.png" alt="Books"/>
            </Link>
          </Box>
          <Typography variant="h6" noWrap component="div">
            A Likely Story
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{backgroundColor:theme.palette.background.default}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            {label: 'Browse', path: '/browse', icon: <SearchOutlinedIcon/>}, 
            {label: 'Reading List', path: '/list', icon: <MenuBookOutlinedIcon/>},
            ((user?.token)?
              {label: 'Logout', path: '/logout', icon: <LogoutOutlinedIcon/>}
              :
              {label: 'Login', path: '/login', icon: <LoginOutlinedIcon/>}),
            ((user?.token)?
              {label: 'Account', path: '/profile', icon: <AccountCircleOutlinedIcon/>}
              :
              {label: 'Register', path: '/profile', icon: <AppRegistrationOutlinedIcon/>})
          ].map((navItem) => (
            <ListItem key={navItem.label} disablePadding>
              <Link to={navItem.path} style={{textDecoration:'none', color:theme.palette.text.secondary, width:'100%'}}>
                <ListItemButton>
                  <ListItemIcon sx={{color:theme.palette.text.secondary}}>
                    {navItem.icon}
                  </ListItemIcon>
                  <ListItemText primary={navItem.label} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <ListItem sx={{position:'absolute', bottom:'0', justifyContent:'center'}}>
          <ThemeSwitch/>
        </ListItem>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
          {children}
      </Main>
    </Box>
  );
}
