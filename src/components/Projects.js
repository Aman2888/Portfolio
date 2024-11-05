// src/components/Projects.js
import React, { useState } from 'react';
import { Box, CardContent, CardMedia, Typography, Grid, Container, Grow, Paper, Divider, Dialog } from '@mui/material';
import Cafe from './images/Cafe.png';
import Catering from './images/Catering_page-0001.jpg';
import MobApp from './images/a.jpg';
import Band from './images/band_page-0001.jpg';
import Dashboard from './images/aaa.jpg';
import ShutterNewApp from './images/ShutterNewApp.jpg';
import Form from './images/form1.jpg';
import Gaming from './images/Screenshot 2024-10-22 162024.png';

function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    { 
        title: 'Live NewsApp', 
        description: 'A real-time news application providing up-to-date news coverage from multiple sources, with customizable categories and live updates.', 
        image: ShutterNewApp 
    },
    { 
        title: 'Catering Website', 
        description: 'A professional catering website designed to showcase delicious menus, customer testimonials, and easy booking options for event catering services.', 
        image: Catering 
    },
    { 
        title: 'Dashboard', 
        description: 'An interactive, data-driven dashboard with analytics and visualization tools, ideal for monitoring key metrics and managing user data in real-time.', 
        image: Dashboard 
    },
    { 
        title: 'Cafe UI', 
        description: 'A cozy and stylish user interface for a cafe website, featuring menu highlights, an online reservation system, and a gallery of food items.', 
        image: Cafe 
    },
    { 
        title: 'Mobile App', 
        description: 'A sleek and user-friendly mobile application with intuitive navigation, optimized performance, and responsive design for multiple devices.', 
        image: MobApp 
    },
    { 
        title: 'Band', 
        description: 'A vibrant and engaging website design for a music band, including tour dates, album previews, and an integrated streaming player for fan interaction.', 
        image: Band 
    },
    { 
        title: 'Form UI', 
        description: 'A customizable form interface with validation and user-friendly fields, designed for easy data collection and user engagement.', 
        image: Form 
    },
    { 
        title: 'Gaming UI ', 
        description: 'A customizable game interface with validation and user-friendly fields with make it Figma, designed for easy data collection and user engagement.', 
        image: Gaming 
    },
];

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box id="projects" sx={{ py: 5, textAlign: 'center', backgroundColor:'#bbbbbd' }}>
      <Container sx={{ py: 2.5, }}>
        <Typography variant="h4" gutterBottom align="center">
          Projects
        </Typography>
        <Divider sx={{ mb: 4, mx: 'auto', width: '10%', borderBottomWidth: 3 }} />
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Grow in timeout={1000}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    backgroundColor: '#1a1a2e',
                    color: 'white',
                    borderRadius: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%', // Ensures equal height
                    transition: 'transform 0.3s',
                    '&:hover': { 
                      transform: 'scale(1.05)', 
                      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' 
                    },
                  }}
                  onClick={() => handleOpen(project.image)}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5">{project.title}</Typography>
                    <Typography variant="body2" color="gray">{project.description}</Typography>
                  </CardContent>
                </Paper>
              </Grow>
            </Grid>
          ))}
        </Grid>

        {/* Fullscreen Image Dialog */}
        <Dialog open={open} onClose={handleClose} maxWidth="lg">
          {selectedImage && (
            <CardMedia
              component="img"
              image={selectedImage}
              alt="Full Image"
              sx={{ maxHeight: '90vh', maxWidth: '90vw' }} // Responsive size
            />
          )}
        </Dialog>
      </Container>
    </Box>
  );
}

export default Projects;
