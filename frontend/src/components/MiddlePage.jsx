import React from 'react';
import { Button, Box, Stack, Typography } from '@mui/material';
import '../assets/styles/MiddlePage.css';
import PokerIcon from '../assets/images/PokerIcon';

import RouletteImage from '../assets/images/roulette.jpg'


const MiddlePage = () => {
  return (
    <Box sx={{ py: 5 }} className="middlePageContainer" id = "middleSection">
      <Typography variant="h3" gutterBottom>
        Welcome to the Ultimate Casino Experience!
      </Typography>
      <Typography variant="h6" gutterBottom style={{ maxWidth: '600px', marginTop: '40px', marginBottom: '50px' }}>
        Play your favorite games, try your luck, and <span style={{ color: '#FFD700' }}>enjoy the thrill of winning!</span>
      </Typography>
      <img src={RouletteImage} alt="Roulette" className="rouletteImage" />
      <PokerIcon></PokerIcon>

    </Box>
  );
};

export default MiddlePage;
