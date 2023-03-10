import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import { createTheme, styled, ThemeProvider } from '@mui/material';

// const CustomListItem = styled(ListItemText)(({theme})=>({
//   ".MuiListItemText-primary":{
//     color:"red",
//     [theme.breakpoints.up("lg")]:{color:"green"}
//   }
// }))

const drawerWidth = 240;
const navItems = ['Home', 'New', 'Popular', 'Trending', 'Catergories'];

const DrawerAppBar = (props) =>{
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} 
    >
      
      <Typography 
        variant='h2' 
        paddingRight={3} 
        paddingTop={1} textAlign="right" >x</Typography>
      <Stack paddingTop={3}>
        <List>
        {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'left'}}>
                <ListItemText primary={item}
                />
              </ListItemButton>
            </ListItem>
        ))}
      </List>
      </Stack>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', position:'absolute', top:0}}>
      <CssBaseline />
      <AppBar component="nav" 
        elevation={0}
      sx={{
        backgroundColor:"white",
        borderBottom: 'none'
        }}>
        
        <Toolbar>
          <Typography
          variant="h3"
          component="h1"
          fontWeight={800}
          color="black"
          paddingLeft={1}
         
          >
            W.
          </Typography>
        <div style={{flex:1}}></div>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              mr: 2, 
              fontSize:'50px',
              display: { sm: 'none' }, 
               }}
          >
            <MenuIcon />
          </IconButton>
        
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'black' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
 
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
     
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default DrawerAppBar;