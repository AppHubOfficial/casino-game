import React from 'react';

const images = require.context('../assets/images/cards/', false, /\.svg$/);
const imageList = images.keys().map((key) => ({
  name: key.replace('./', ''),
  src: images(key)
}));


const PokerPage = () => {

  

  return (
    <>
      
    </>
  )
}

export default PokerPage;