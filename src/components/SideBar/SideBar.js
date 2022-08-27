import React from 'react';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ManIcon from '@mui/icons-material/Man';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ListItemText from '@mui/material/ListItemText';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const WrapBox = styled(Box)({
  backgroundColor: '#215885',
  color: '#fff',
  width: '22%' ,
  maxWidth: '100%',
  display: 'inline-block',  
  height: '100vh',
  position: "fixed",
})

const SideBar = () => {
  const menu = [
    {title: 'Dashboard', icon: <AccountBalanceIcon />,link:'/'},
    {title: 'Pateints', icon: <AccessibilityIcon />,link:'/pateints'},
    {title: 'Doctors', icon: <ManIcon />,link:'/doctors'},
    {title: 'Appointments', icon: <AutoAwesomeMotionIcon />,link:'/appointments'},
    {title: 'Staffs', icon: <AssignmentIndIcon />,link:'/staffs'},
    {title: 'Account', icon: <AssessmentIcon />,link:'/account'},
  ]


    return (
        <WrapBox 
        aria-label="contacts"
        >
          <Box>
            <img style={{width:'85px', margin:'15px 42px'}} src="https://cdn-icons-png.flaticon.com/512/784/784133.png" alt="" />
          </Box>
          <List>

              {menu.map((item, i) => {
                return <ListItem key={i} disablePadding>
                <ListItemButton component={Link}  to={item.link}>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
                </ListItem>
              })}

          </List>
        </WrapBox>
    );
};

export default SideBar;