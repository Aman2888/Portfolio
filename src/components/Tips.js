// src/components/TipsAndTricks.js
import React, { useState } from 'react';
import { Box, Typography, Grid, Container, Paper, Grow, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function TipsAndTricks() {
    const tips = [
        {
          title: 'Master Version Control',
          description: 'Using version control systems like Git can save you time and effort in managing code changes. It allows for efficient collaboration among developers by keeping track of every modification made to the codebase, ensuring that you can revert back if needed. Additionally, clear commit messages enhance understanding of project history.',
          image: 'https://images.pexels.com/photos/17684562/pexels-photo-17684562/free-photo-of-digitakt-a-drum-machine-and-sampler.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          title: 'Write Clean Code',
          description: 'Writing clean, readable code is essential for maintaining and scaling your projects. Clean code helps others understand your logic and intentions, reducing the need for extensive explanations. It also minimizes bugs and simplifies future modifications, making the development process smoother.',
          image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          title: 'Embrace Continuous Learning',
          description: 'The tech industry evolves rapidly, and staying updated with the latest technologies is vital for your career growth. Continuous learning allows you to remain competitive, adapt to new tools, and meet the demands of an ever-changing job market. Engaging with new resources also fuels your passion for technology.',
          image: 'https://bookboonlearning.com/wp-content/uploads/sites/10/2023/07/dreamstime_xxl_115022760-1024x683.jpg',
        },
        {
          title: 'Network Effectively',
          description: 'Building a professional network can open doors to opportunities that might not be available through traditional job searching methods. Networking enhances your knowledge about industry trends and job openings while allowing you to learn from experienced professionals. It also fosters relationships that can provide guidance and support in your career.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzGkJ2lUCTeFIkrpro8dz9QIJUQ6QMQZYZQ&s',
        },
        {
          title: 'Set Clear Goals',
          description: 'Setting clear, achievable goals can keep you focused and motivated throughout your career. Goals give you direction and a framework to measure your progress, allowing for better task prioritization. Regularly reviewing and adjusting these goals ensures alignment with your growth and aspirations.',
          image: 'https://mondo.com/wp-content/uploads/2023/01/clear-goals-vs-smart-goals-2023.jpg',
        },
      ];

    const [expandedTips, setExpandedTips] = useState({});

    const toggleDetails = (index) => {
        setExpandedTips((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <Box id="tips" sx={{ py: 5, textAlign: 'center', backgroundColor:'#bbbbbd' }}>
        <Container sx={{ py: 2.5 }}>
            <Typography variant="h4" gutterBottom align="center">
                Latest Tips & Tricks
            </Typography>
            {/* <Box sx={{ backgroundColor: '#1a1a2e', borderRadius: 3, p: 3 }}> */}
                {tips.map((tip, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Grow in timeout={1000}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 2,
                                    marginBottom: 1,
                                    backgroundColor: '#343454',
                                    color: 'white',
                                    borderRadius: 5,
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={2}>
                                        <img src={tip.image} alt={tip.title} style={{ width: 150, borderRadius: '8px' }} />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6" gutterBottom>
                                            {tip.title}
                                        </Typography>
                                        <Typography variant="body2" color="white" component="span">
                                            {expandedTips[index] ? tip.description : tip.description.split('. ').slice(0, 2).join('. ') + '.'}
                                        </Typography>
                                        <IconButton onClick={() => toggleDetails(index)} sx={{ ml: 1, verticalAlign: 'middle' }}>
                                            <AddIcon style={{ color: 'white' }} />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grow>
                    </Grid>
                ))}
        </Container>
            </Box>
    );
}

export default TipsAndTricks;
