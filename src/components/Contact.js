// src/components/Contact.js
import React from 'react';
import { Box, Typography, TextField, Button, Container, Paper, Fade } from '@mui/material';

function Contact() {
  return (
    <Box id="contact" sx={{ py: 5, textAlign: 'center', backgroundColor:'#bbbbbd' }}>
    <Container sx={{ maxWidth: 'sm' }}>
      <Fade in timeout={1000}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: '#1a1a2e', // Match the background color of your skills cards
            color: 'white',
          }}
        >
          <Typography sx={{ mt: 2, mb: 1, color: '#90e0ef' }} variant="h4" gutterBottom align="center">
            Contact Me
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            Feel free to reach out for collaborations or just a friendly chat.
          </Typography>
          <form>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#90e0ef' }, // Default border color
                  '&:hover fieldset': { borderColor: '#90e0ef' }, // Hover border color
                  '&.Mui-focused fieldset': { borderColor: '#90e0ef' }, // Focus border color
                },
                input: { color: 'white' }, // Text color
                '& .MuiInputLabel-root': { color: 'white' }, // Label color
                '& .MuiInputLabel-root.Mui-focused': { color: '#90e0ef' }, // Focused label color
              }}
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#90e0ef' }, // Default border color
                  '&:hover fieldset': { borderColor: '#90e0ef' }, // Hover border color
                  '&.Mui-focused fieldset': { borderColor: '#90e0ef' }, // Focus border color
                },
                input: { color: 'white' }, // Text color
                '& .MuiInputLabel-root': { color: 'white' }, // Label color
                '& .MuiInputLabel-root.Mui-focused': { color: '#90e0ef' }, // Focused label color
              }}
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              margin="normal"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#90e0ef' }, // Default border color
                  '&:hover fieldset': { borderColor: '#90e0ef' }, // Hover border color
                  '&.Mui-focused fieldset': { borderColor: '#90e0ef' }, // Focus border color
                },
                input: { color: 'white' }, // Text color
                '& .MuiInputLabel-root': { color: 'white' }, // Label color
                '& .MuiInputLabel-root.Mui-focused': { color: '#90e0ef' }, // Focused label color
              }}
            />
            <Button
              variant="contained"
              sx={{
                mt: 3,
                color: 'GrayText',
                py: 1, // Reduced vertical padding
                fontSize: '0.9rem', // Smaller font size
                backgroundColor: '#82e3f5', // Changed background color
                transition: 'background-color 0.3s',
                '&:hover': { backgroundColor: '#29c6e3' },
              }}
              type="submit"
              
            >
              Send Message
            </Button>
          </form>
        </Paper>
      </Fade>
    </Container>
    </Box>
  );
}

export default Contact;
