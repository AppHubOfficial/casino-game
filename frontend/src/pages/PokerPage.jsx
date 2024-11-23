import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import TableComponent from '../components/poker/TableComponent';
import DrawerMenu from '../components/DrawerMenu';

const images = require.context('../assets/images/cards/', false, /\.svg$/);
const cards = images.keys().map((key) => ({
  name: key.replace('./', ''),
  src: images(key)
}));


const PokerPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <MenuIcon onClick={toggleDrawer(true)} sx={{ cursor: 'pointer', color: 'white', width: '40px', height: '40px', margin: '10px', position: 'absolute' }} />
      <DrawerMenu open={open} toggleDrawer={toggleDrawer} />

      <TableComponent></TableComponent>
    </>
  )
}

export default PokerPage;