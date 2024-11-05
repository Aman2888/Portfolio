// src/components/HeroSection.js
import React from 'react';
import { Box, Typography, Button, Avatar, IconButton } from '@mui/material';
import { Facebook, Language, Brush } from '@mui/icons-material';

function HeroSection() {
  return (
    
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80vh',
        paddingX: 5,
        backgroundColor: '#1a1a2e',
        color: 'white',
      }}
    >
      {/* Left Side Content */}
      <Box sx={{ maxWidth: '50%' }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: '3rem',
            animation: 'fadeSlideUp 1.5s ease forwards',
            opacity: 0, // Initial opacity for the animation
          }}
        >
          Hello! I'm Amna Irfan
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontSize: '1.5rem',
            animation: 'fadeSlideUp 2s ease forwards',
            opacity: 0, // Initial opacity for the animation
          }}
        >
          A Software Developer & Designer
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: '#90e0ef',
            color: '#1a1a2e',
            paddingX: 3,
            paddingY: 1,
            fontSize: '1rem',
            animation: 'fadeSlideUp 2.5s ease forwards',
            opacity: 0, // Initial opacity for the animation
            '&:hover': {
              backgroundColor: '#0077b6',
            },
          }}
        >
          Get Resume
        </Button>
      </Box>

      {/* Right Side - Enlarged Avatar and Social Icons */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 500,
          height: 500,
          borderRadius: '50%',
          backgroundColor: '#1a1a2e',
          transform: 'translateX(-20px)',
        }}
      >
        <Avatar
          src="https://images.pexels.com/photos/7993560/pexels-photo-7993560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Amna Irfan"
          sx={{
            width: 400,
            height: 400,
            zIndex: 2,
            border: '4px solid #90e0ef',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '2px dashed #90e0ef',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />

        {/* Animated Small Avatars */}
        <Avatar
          src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=600"
          sx={{
            position: 'absolute',
            width: 50,
            height: 50,
            top: '10%',
            left: '15%',
            animation: 'float 5s ease-in-out infinite',
            border: '2px solid #90e0ef',
            zIndex: 1,
          }}
        />
        <Avatar
          src="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=600"
          sx={{
            position: 'absolute',
            width: 50,
            height: 50,
            bottom: '15%',
            right: '10%',
            animation: 'float 6s ease-in-out infinite',
            border: '2px solid #90e0ef',
            zIndex: 1,
          }}
        />
        <Avatar
          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
          sx={{
            position: 'absolute',
            width: 50,
            height: 50,
            bottom: '20%',
            left: '20%',
            animation: 'float 8s ease-in-out infinite',
            border: '2px solid #90e0ef',
            zIndex: 1,
          }}
        />
        <Avatar
          src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600"
          sx={{
            position: 'absolute',
            width: 50,
            height: 50,
            top: '5%',
            right: '5%',
            animation: 'float 4s ease-in-out infinite',
            border: '2px solid #90e0ef',
            zIndex: 1,
          }}
        />

        {/* Social Icons */}
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            right: -50,
            top: '30%',
          }}
        >
          <IconButton sx={{ color: '#90e0ef', fontSize: '1.4rem' }}>
            <Facebook fontSize="medium" />
          </IconButton>
          <IconButton sx={{ color: '#90e0ef', fontSize: '1.4rem' }}>
            <Language fontSize="medium" />
          </IconButton>
          <IconButton sx={{ color: '#90e0ef', fontSize: '1.4rem' }}>
            <Brush fontSize="medium" />
          </IconButton>
        </Box>
      </Box>

      {/* Floating and Text Animations */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }

          @keyframes fadeSlideUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
}

export default HeroSection;
