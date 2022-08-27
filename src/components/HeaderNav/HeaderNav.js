import React from 'react';
import styled from '@emotion/styled';
import {AppBar, IconButton, Typography, Toolbar , Box} from '@mui/material'
import {  AccountCircle, Notifications} from '@mui/icons-material';

const WrapBox = styled(Box)({
    width: "78%",
    marginLeft: "22%",  
    position: "fixed",
    zIndex: "9999"
})

const HeaderNav = () => {
    return (
      
        <WrapBox>
        <AppBar position='sticky'>
        <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              // display= sm: 'inline-block' : 'none'
            >
              <Menu />
            </IconButton> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Clinic Management
            </Typography>
            <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                <Notifications />
            </IconButton>
            <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                <AccountCircle />
            </IconButton>
        </Toolbar>
        </AppBar>
        </WrapBox>
    );
};

export default HeaderNav;