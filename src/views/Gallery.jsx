import React, { useRef } from 'react';
import TouchImage from '../components/gallery/TouchImage';
import GestureImage from '../components/gallery/GestureImage';

const Gallery = () => {
  const images = [
    process.env.PUBLIC_URL + '/images/gallery/foto_01.png',
    process.env.PUBLIC_URL + '/images/gallery/foto_01.png',
    process.env.PUBLIC_URL + '/images/gallery/foto_01.png',
    process.env.PUBLIC_URL + '/images/gallery/foto_01.png',
    process.env.PUBLIC_URL + '/images/gallery/foto_01.png',
    process.env.PUBLIC_URL + '/images/gallery/foto_01.png',
    process.env.PUBLIC_URL + '/images/gallery/foto_01.png',
    process.env.PUBLIC_URL + '/images/gallery/foto_01.png',
    process.env.PUBLIC_URL + '/images/gallery/foto_01.png',
    process.env.PUBLIC_URL + '/images/gallery/foto_01.png',
  ];

  // get window width and height
  const winWidth = 700;
  const winHeight = 270;

  // console.log('winWidth', winWidth);
  // console.log('winHeight', winHeight);

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  const zIndex = useRef(0);

  const getTopValue = () => {
    zIndex.current = zIndex.current + 1;
    return zIndex.current;
  };

  return (
    <div id='Gallery'>
      {/* GAllery */}
      {images.map((image) => (
        <TouchImage
          getTopValue={getTopValue}
          key={image}
          pos={{ x: random(0, winWidth), y: random(0, winHeight) }}
          rotation={random(0, 180)}
          scale={random(0.25, 0.35)}
          imagePath={image}
        />
        // <GestureImage getTopValue={getTopValue} imagePath={image} />
      ))}
    </div>
  );
};

export default Gallery;
