import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function WhyChooseMe() {
  const reasons = [
    {
      title: 'Professional and Dedicated Team',
      description: 'Building architectures with modern technology.',
      backgroundColor: '#383867', // Base color
      icon: <GroupIcon sx={{ fontSize: 40, color: '#90e0ef' }} />, // Change icon color here
    },
    {
      title: 'Unique Design',
      description: 'Bring the beauty for your house. Just enjoy!',
      backgroundColor: '#2e2e5c', // Darker shade
      icon: <DesignServicesIcon sx={{ fontSize: 40, color: '#90e0ef' }} />, // Change icon color here
    },
    {
      title: 'Affordable and Flexible',
      description: 'Bring nature into your house. Health is important.',
      backgroundColor: '#20204f', // Another darker shade
      icon: <MonetizationOnIcon sx={{ fontSize: 40, color: '#90e0ef' }} />, // Change icon color here
    },
    {
      title: '24/7 Support',
      description: 'Consulting solutions and make plans for renovation.',
      backgroundColor: '#161640', // Darker shade
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#90e0ef' }} />, // Change icon color here
    },
  ];

  return (
    <Box id="whyChooseMe" sx={{ py: 5, textAlign: 'center', backgroundColor:'#bbbbbd' }}>
      <Container sx={{ py: 2.5 }} maxWidth="lg">
        <Typography variant="h4" gutterBottom align="center">
          Why Choose Me
        </Typography>
        <Grid container spacing={3}>
          {reasons.map((reason, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  backgroundColor: reason.backgroundColor,
                  color: 'white',
                  textAlign: 'center',
                  borderRadius: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%', // Make all cards equal height
                  transition: 'background-color 0.3s, transform 0.3s',
                  '&:hover': {
                    backgroundColor: darkenColor(reason.backgroundColor, 0.2),
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {reason.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {reason.description}
                  </Typography>
                </Box>
                {/* Icon Below Text */}
                <Box sx={{ mt: 2 }}>
                  {reason.icon}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// Helper function to darken color
const darkenColor = (color, amount) => {
  let colorValue = parseInt(color.replace('#', ''), 16);
  let r = ((colorValue >> 16) - amount * 255);
  let g = (((colorValue >> 8) & 0x00FF) - amount * 255);
  let b = ((colorValue & 0x0000FF) - amount * 255);

  // Clamp values to 0-255
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  return `#${(1 << 24 | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

export default WhyChooseMe;
