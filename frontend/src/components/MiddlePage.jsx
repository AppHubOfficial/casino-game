import React from 'react';
import { Box, Typography, Stack, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';  
import '../assets/styles/MiddlePage.css';

import RouletteImage from '../assets/images/roulette.jpg';

import PokerIcon from '../assets/images/PokerIcon';
import RouletteIcon from '../assets/images/RouletteIcon';

const ItemIcon = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  boxShadow: 'none', 
  width: '70px',
  height: '90px'
}));

const MiddlePage = () => {
  return (
    <Box sx={{ py: 5 }} className="middlePageContainer" id="middleSection">
      <Typography variant="h3" gutterBottom>
        Welcome to the Ultimate Casino Experience!
      </Typography>
      <Typography variant="h6" gutterBottom style={{ maxWidth: '600px', marginTop: '40px', marginBottom: '50px' }}>
        Play your favorite games, try your luck, and <span style={{ color: '#FFD700' }}>enjoy the thrill of winning!</span>
      </Typography>
      <img src={RouletteImage} alt="Roulette" className="rouletteImage" />

      <Stack direction="row" justifyContent="center" spacing={4} sx={{ mt: 5 }}>
        <ItemIcon>
          <PokerIcon />
          <Typography variant="body1" sx={{ mt: 1 }}>Poker</Typography>
        </ItemIcon>

        <ItemIcon>
          <RouletteIcon style={{ width: '50px', transform: 'scale(1.25)', marginLeft: '6px', cursor: 'pointer' }}/>
          <Typography variant="body1" sx={{ mt: 1 }}>Roulette</Typography>
        </ItemIcon>
      </Stack>
    </Box>
  );
};

export default MiddlePage;
