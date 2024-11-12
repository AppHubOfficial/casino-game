import React from 'react';

import TableComponent from '../components/poker/TableComponent'

const images = require.context('../assets/images/cards/', false, /\.svg$/);
const imageList = images.keys().map((key) => ({
  name: key.replace('./', ''),
  src: images(key)
}));


const PokerPage = () => {



  return (
    <>
      <TableComponent></TableComponent>
    </>
  )
}

export default PokerPage;