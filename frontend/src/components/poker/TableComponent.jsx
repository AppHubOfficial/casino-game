import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import PokerTable from '../../assets/images/poker/pokerTable.jsx';

const TableComponent = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    textAlign: 'center',
  }));
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '93vh',
        gap: 3,
        padding: '20px',
        position: 'relative',
      }}
    >
      <PokerTable style={{ width: "87%", height: "auto", maxWidth: '1100px' }} />

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
      
      
    </Box>
  );
};

export default TableComponent;
