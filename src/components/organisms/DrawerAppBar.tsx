import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import { UserAvatar } from '../molecules';
import { publicPath } from '../../constants/gloabals';
import { LinkItem } from '../atoms';

const pages = ['resume', 'contact'];

export const DrawerAppBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    console.error('handleDrawerToggle');
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', marginTop: 5 }}>
      <UserAvatar />
      <List>
        {pages.map((item) => (
          <LinkItem key={item} to={`/${item}`} color="inherit" relative="path">
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </LinkItem>
        ))}
        <Button variant="outlined" color='secondary' sx={{ textTransform: 'none', marginTop: 1.5 }} size='small' href={`${publicPath}/files/resume-alexis-orellana.pdf`}>Download CV</Button>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar color="default" sx={{ boxShadow: 0 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <UserAvatar />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <LinkItem key={page} to={`/${page}`} color="inherit" relative="path">
                  <Button key={page} color="inherit" style={{ textTransform: 'none' }} >{page}</Button>
                </LinkItem>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: 'flex' }}>
              <Box>
                <Button variant="outlined" color='secondary' sx={{ textTransform: 'none', marginTop: 1.5 }} size='small' href={`${publicPath}/files/resume-alexis-orellana.pdf`}>Download CV</Button>
              </Box>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "100%" },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}