// // src/components/Certificates.js
// import React from 'react';
// import { Box, Typography, Container, Grid, Paper } from '@mui/material';

// function Certificates() {
//   const certificatesData = [
//     {
//       title: 'MERN Stack Course Certification by Enovatorz',
//       image: 'https://via.placeholder.com/200', // Replace with your certificate image URL
//     },
//     {
//       title: 'MERN Stack Course Certification by Great Learning',
//       image: 'https://via.placeholder.com/200', // Replace with your certificate image URL
//     },
//     {
//       title: 'UX Design Course by SpringBoard',
//       image: 'https://via.placeholder.com/200', // Replace with your certificate image URL
//     },
//     {
//       title: 'React Native Course Certification by Alison',
//       image: 'https://via.placeholder.com/200', // Replace with your certificate image URL
//     },
//     {
//       title: 'Content Marketing & Advertising Course Certification by e-Rozgar',
//       image: 'https://via.placeholder.com/200', // Replace with your certificate image URL
//     },
//     {
//       title: 'Front-end Development Course Certification by Great Learning',
//       image: 'https://via.placeholder.com/200', // Replace with your certificate image URL
//     },
//     {
//       title: 'Human Resource Management Course Certification by Learning Academy',
//       image: 'https://via.placeholder.com/200', // Replace with your certificate image URL
//     },
//   ];

//   return (
//     <Container sx={{ py: 5 }} maxWidth="lg">
//       <Typography variant="h4" gutterBottom align="center">
//         Certificates
//       </Typography>
//       <Grid container spacing={3}>
//         {certificatesData.map((cert, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 2,
//                 backgroundColor: '#1a1a2e',
//                 color: 'white',
//                 textAlign: 'center',
//                 borderRadius: 3,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 height: '100%', // Make all cards equal height
//                 transition: 'transform 0.3s',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                   boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
//                 },
//               }}
//             >
//               <img src={cert.image} alt={cert.title} style={{ width: '100%', borderRadius: '8px' }} />
//               <Typography variant="h6" sx={{ mt: 2 }}>
//                 {cert.title}
//               </Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default Certificates;

// src/components/Certificates.js
import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

function Certificates() {
  const certificatesData = [
    'MERN Stack Course Certification by Enovatorz',
    'MERN Stack Course Certification by Great Learning',
    'UX Design Course by SpringBoard',
    'React Native Course Certification by Alison',
    'Content Marketing & Advertising Course Certification by e-Rozgar',
    'Front-end Development Course Certification by Great Learning',
    'Human Resource Management Course Certification by Learning Academy',
  ];

  return (
    <Box id="certifications" sx={{ py: 5, textAlign: 'center', backgroundColor:'#bbbbbd' }}>
    <Container sx={{ py: 2.5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Certifications
      </Typography>
      <Grid container spacing={3}>
        {certificatesData.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                backgroundColor: '#1a1a3b',
                color: 'white',
                textAlign: 'center',
                borderRadius: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {cert}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
}

export default Certificates;
