// src/components/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const wavingAnimation = {
  '@keyframes wave': {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-5px)' },
    '100%': { transform: 'translateY(0)' },
  },
  '&:hover': {
    animation: 'wave 0.5s ease-in-out',
    color: '#90e0ef',
  },
};

function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'rgba(26, 26, 46, 0.8)',
        boxShadow: 'none', 
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: 1 }}>
          Portfolio
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link to="about" smooth={true} duration={500}>
            <Button color="inherit" sx={wavingAnimation}>About</Button>
          </Link>
          <Link to="whyChooseMe" smooth={true} duration={500}>
            <Button color="inherit" sx={wavingAnimation}>Why Choose Me</Button>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <Button color="inherit" sx={wavingAnimation}>Projects</Button>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <Button color="inherit" sx={wavingAnimation}>Skills</Button>
          </Link>
          <Link to="certifications" smooth={true} duration={500}>
            <Button color="inherit" sx={wavingAnimation}>Certifications</Button>
          </Link>
          <Link to="tips" smooth={true} duration={500}>
            <Button color="inherit" sx={wavingAnimation}>Latest Tips & Tricks</Button>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <Button color="inherit" sx={wavingAnimation}>Contact</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
