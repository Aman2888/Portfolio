// src/components/About.js
import React from 'react';
import { Box, Typography, Container, Fade, Divider, Paper, Zoom } from '@mui/material';

function About() {
  const textSections = [
    "Hello! I am a passionate and dedicated MERN Stack Developer with a Master’s degree in Computer Science.",
    "I have a deep love for coding and UI design, always aiming to create visually appealing and functional applications that enhance user experience.",
    "My journey in tech has been fueled by a desire to blend my technical skills with a creative approach to problem-solving.",
    
    "With a strong foundation in JavaScript, React, Node.js, and MongoDB, I thrive in developing full-stack applications that bring ideas to life.",
    "I’m driven by a genuine interest in learning new technologies and applying modern design principles to create user-friendly interfaces.",
    "My focus is on building scalable, efficient, and visually captivating applications.",
    
    "I bring unique qualities to every project I work on, including a keen eye for design, a solid grasp of coding best practices, and a relentless pursuit of excellence.",
    "Let’s create something amazing together!"
  ];

  return (
    <Box id="about" sx={{ py: 1, textAlign: 'center', backgroundColor:'#bbbbbd' }}>
    <Container sx={{ py: 5, maxWidth: 'md' }}>
      <Fade in timeout={1200}>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            backgroundColor: '#1a1a2e',
            color: 'white',
            borderRadius: 3,
          }}
        >
          <Typography sx={{ color: '#90e0ef', flexGrow: 1 }} variant="h4" gutterBottom align="center">
            About Me
          </Typography>
          <Divider sx={{ mb: 4, mx: 'auto', width: '10%', borderBottomWidth: 3 }} />

          {textSections.map((text, sectionIndex) => (
            <Typography variant="body1" align="center" paragraph key={sectionIndex}>
              {text.split(' ').map((word, wordIndex) => (
                <Zoom
                  in={true}
                  timeout={(wordIndex + 1) * 100}
                  key={wordIndex}
                >
                  <span
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.2)';
                      e.target.style.transition = 'transform 0.3s';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                    style={{ display: 'inline-block', margin: '0 2px' }} 
                  >
                    {word}
                  </span>
                </Zoom>
              ))}
            </Typography>
          ))}
        </Paper>
      </Fade>
    </Container>
    </Box>
  );
}

export default About;
