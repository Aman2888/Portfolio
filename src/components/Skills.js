// // src/components/Skills.js
// import React from 'react';
// import { Box, Typography, Container, Grid, Paper, List, ListItem } from '@mui/material';
// import DesignServicesIcon from '@mui/icons-material/DesignServices';
// import CodeIcon from '@mui/icons-material/Code';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// function Skills() {
//   const skillsData = [
//     {
//       title: 'UI/UX Design',
//       icon: <DesignServicesIcon sx={{ fontSize: 40, color: '#90e0ef' }} />,
//       skills: [
//         'Landing Pages',
//         'User Flow',
//         'Wireframing',
//         'Prototyping',
//         'Mobile App Design',
//         'Figma',
//         'Canva',
//       ],
//     },
//     {
//       title: 'Development',
//       icon: <CodeIcon sx={{ fontSize: 40, color: '#90e0ef' }} />,
//       skills: [
//         'HTML/CSS',
//         'JavaScript',
//         'Material UI',
//         'Bootstrap',
//         'React',
//         'NodeJS',
//         'API Integration',
//         'SQL Integration',
//         'Responsive Web Design',
//       ],
//     },
//     {
//       title: 'Professional Skills',
//       icon: <CheckCircleIcon sx={{ fontSize: 40, color: '#90e0ef' }} />,
//       skills: [
//         'Problem-Solving',
//         'Multitasking',
//         'QA Testing',
//         'Teamwork Oriented',
//         'Patience',
//         'Disciplined',
//         'Creative and Innovative',
//         'Excel, Word, PowerPoint',
//       ],
//     },
//   ];

//   return (
//     <Container sx={{ py: 5, maxWidth: 'lg' }}>
//       <Typography variant="h4" gutterBottom align="center">
//         Skills
//       </Typography>
//       <Grid container spacing={3}>
//         {skillsData.map((category, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 3,
//                 backgroundColor: '#1a1a2e',
//                 color: 'white',
//                 textAlign: 'center',
//                 borderRadius: 3,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 height: '100%', // Make all cards equal height
//                 transition: 'transform 0.3s ease, box-shadow 0.3s',
//                 '&:hover': {
//                   transform: 'scale(1.03)',
//                   boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
//                 },
//               }}
//             >
//               <Box>{category.icon}</Box>
//               <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 'bold', color: '#90e0ef' }}>
//                 {category.title}
//               </Typography>
//               <List sx={{ color: '#a9a9a9', flexGrow: 1 }}>
//                 {category.skills.map((skill, i) => (
//                   <ListItem key={i} sx={{ display: 'list-item', paddingLeft: 2 }}>
//                     {skill}
//                   </ListItem>
//                 ))}
//               </List>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default Skills;
// src/components/Skills.js
import React from 'react';
import { Box, Typography, Container, Grid, Paper, List, ListItem } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';

// Create a styled bubble component
const Bubble = styled('div')(({ theme }) => ({
  position: 'absolute',
  background: 'rgba(144, 224, 239, 0.5)',
  borderRadius: '50%',
  pointerEvents: 'none',
  animation: 'float 3s ease-in-out infinite',
  '@keyframes float': {
    '0%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
    '100%': {
      transform: 'translateY(0)',
    },
  },
}));

function Skills() {
  const skillsData = [
    {
      title: 'UI/UX Design',
      icon: <DesignServicesIcon sx={{ fontSize: 40, color: '#90e0ef' }} />,
      skills: [
        'Landing Pages',
        'User Flow',
        'Wireframing',
        'Prototyping',
        'Mobile App Design',
        'Figma',
        'Canva',
      ],
    },
    {
      title: 'Development',
      icon: <CodeIcon sx={{ fontSize: 40, color: '#90e0ef' }} />,
      skills: [
        'HTML/CSS',
        'JavaScript',
        'Material UI',
        'Bootstrap',
        'React',
        'NodeJS',
        'API Integration',
        'SQL Integration',
        'Responsive Web Design',
      ],
    },
    {
      title: 'Professional Skills',
      icon: <CheckCircleIcon sx={{ fontSize: 40, color: '#90e0ef' }} />,
      skills: [
        'Problem-Solving',
        'Multitasking',
        'QA Testing',
        'Teamwork Oriented',
        'Patience',
        'Disciplined',
        'Creative and Innovative',
        'Excel, Word, PowerPoint',
      ],
    },
  ];

  return (
    <Box id="skills" sx={{ py: 3, textAlign: 'center', backgroundColor:'#bbbbbd' }}>
    <Container sx={{ py: 1, maxWidth: 'lg' }}>
      <Typography variant="h4" gutterBottom align="center">
        Skills
      </Typography>
      <Grid container spacing={3}>
        {skillsData.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                backgroundColor: '#1a1a2e',
                color: 'white',
                textAlign: 'center',
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%', // Make all cards equal height
                position: 'relative', // Required for positioning bubbles
                overflow: 'hidden', // Hide overflow
                transition: 'transform 0.3s ease, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <Bubble sx={{ width: '80px', height: '80px', top: '-20px', left: '-20px' }} />
              <Bubble sx={{ width: '100px', height: '100px', bottom: '-20px', right: '-20px' }} />
              <Box>{category.icon}</Box>
              <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 'bold', color: '#90e0ef' }}>
                {category.title}
              </Typography>
              <List sx={{ color: '#a9a9a9', flexGrow: 1 }}>
                {category.skills.map((skill, i) => (
                  <ListItem key={i} sx={{ display: 'list-item', paddingLeft: 2 }}>
                    {skill}
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
}

export default Skills;
