import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import '../assets/styles/Header.css';


const Navbar = () => {
  const theme = useTheme();
  return (
    <>
      <Box className='headerContainer'>
        <div className='backgroundImage'></div>
        <Stack spacing={2} direction="row" className='navbar'>
          <Button variant="text" size="large">Home</Button>
          <Button variant="text" size="large">About Us</Button>
          <Button variant="text" size="large">Contact</Button>
        </Stack>

        <Typography
          variant='h1'
          sx={{
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: 'white',
            marginTop: '200px',
            marginLeft: '50px'
          }}>
          <Typography
            variant='h1'
            sx={{
              color: theme.palette.primary.main,
              display: 'inline',
              fontWeight: 'bold',
            }}>
            99% {" "}
          </Typography>
          of gamblers quit <br /> before they {" "}
          <Typography
            variant='h1'
            sx={{
              color: theme.palette.primary.main,
              display: 'inline',
              fontWeight: 'bold',
            }}>
            win big
          </Typography><br />

          <Button variant="outlined" sx={{
              width: '160px',
              padding: '20px',
              fontSize: '17px'
            }}>PLAY NOW</Button>
      </Typography>





    </Box >
    </>
  );
};

export default Navbar;
