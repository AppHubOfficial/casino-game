import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Stack, Typography } from '@mui/material';
import CasinoIcon from '@mui/icons-material/Casino';

import '../assets/styles/MiddlePage.css';

import '../assets/styles/Header.css';

const MiddlePage = () => {

  return (
    <Box sx={{ py: 5 }} className="middlePageContainer" id = "middleSection">
      <Typography variant="h3" gutterBottom>
        Welcome to the Ultimate Casino Experience!
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ maxWidth: '600px', mx: 'auto' }}>
        Play your favorite games, try your luck, and enjoy the thrill of winning!
      </Typography>

      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        sx={{ mt: 4, flexWrap: 'wrap' }}
      >
        <Button
          component={Link}
          to="/games"
          variant="contained"
          color="secondary"
          startIcon={<CasinoIcon />}
          sx={{ minWidth: '200px' }}
        >
          Start Playing
        </Button>

        <Button
          component={Link}
          to="/promotions"
          variant="outlined"
          color="primary"
          sx={{ minWidth: '200px' }}
        >
          Check Promotions
        </Button>

        <Button
          component={Link}
          to="/vip"
          variant="outlined"
          color="primary"
          sx={{ minWidth: '200px' }}
        >
          Join VIP Club
        </Button>
      </Stack>
    </Box>
  );
};

export default MiddlePage;
