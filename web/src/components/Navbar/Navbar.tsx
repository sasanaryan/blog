import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styled from "@emotion/styled";
import { Link, routes } from '@redwoodjs/router';

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`;
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog
          </Typography>
          <StyledLink to={routes.newPost()}>
          <Button color="inherit">New Post</Button>
          </StyledLink>

        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Navbar
