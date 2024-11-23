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
      }}
    >
      <Stack direction="row" spacing={{ xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }}>
        <Box className="circle" />
        <Box className="circle" />
        <Box className="circle" />
        <Box className="circle" />
      </Stack>

      <PokerTable
        style={{
          width: "87%",
          height: "auto",
          maxWidth: '900px',
          marginBottom: '60px',
        }}
      />

      <Stack direction="row" style={{ marginTop: '-100px' }} spacing={{ xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }}>
        <Box className="circle" />
        <Box className="circle" />
        <Box className="circle" />
        <Box className="circle" />
      </Stack>
    </Box>
  );
};

export default TableComponent;
