import React from 'react';
import { Box, Stack } from '@mui/material';
import PokerTable from '../../assets/images/poker/pokerTable.jsx';
import '../../assets/styles/PokerTableComponent.css';

const TableComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '93vh',
        gap: 5,
        padding: '20px',
        position: 'relative',
      }}
    >
      <Stack direction="row" spacing={12} sx={{ top: '90px', position: 'absolute' }}>
        <Box className="circle" />
        <Box className="circle" />
        <Box className="circle" />
        <Box className="circle" />
      </Stack>

      <PokerTable style={{ width: "87%", height: "auto", maxWidth: '1100px', marginTop: '90px' }} />

      <Stack direction="row" spacing={12} sx={{ top: '750px', position: 'absolute' }}>
        <Box className="circle" />
        <Box className="circle" />
        <Box className="circle" />
        <Box className="circle" />
      </Stack>
    </Box>
  );
};

export default TableComponent;
