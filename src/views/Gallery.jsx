import React, { useRef } from 'react';
// import TouchImage from '../components/gallery/TouchImage';
import GestureImage from '../components/gallery/GestureImage';

const Gallery = () => {
  const images = [
    process.env.PUBLIC_URL + '/images/gallery/01.png',
    process.env.PUBLIC_URL + '/images/gallery/02.png',
    process.env.PUBLIC_URL + '/images/gallery/03.png',
    process.env.PUBLIC_URL + '/images/gallery/04.png',
    process.env.PUBLIC_URL + '/images/gallery/05.png',
    process.env.PUBLIC_URL + '/images/gallery/06.png',
    process.env.PUBLIC_URL + '/images/gallery/07.png',
    process.env.PUBLIC_URL + '/images/gallery/08.png',
    process.env.PUBLIC_URL + '/images/gallery/08.png',
    process.env.PUBLIC_URL + '/images/gallery/09.png',
    process.env.PUBLIC_URL + '/images/gallery/10.png',
    process.env.PUBLIC_URL + '/images/gallery/11.png',
    process.env.PUBLIC_URL + '/images/gallery/12.png',
    process.env.PUBLIC_URL + '/images/gallery/13.png',
    process.env.PUBLIC_URL + '/images/gallery/14.png',
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

  // console.log('images.length', images.length);

  // return (
  //   <div id='Gallery'>
  //     {images.map((image) => (
  //       <TouchImage
  //   getTopValue={getTopValue}
  //   key={image}
  //   pos={{ x: random(0, winWidth), y: random(0, winHeight) }}
  //   rotation={random(0, 180)}
  //   scale={random(0.25, 0.35)}
  //   imagePath={image}
  // />
  //     ))}
  //   </div>
  // );

  return (
    <div id='Gallery'>
      {images.map((image) => (
        <GestureImage key={image} getTopValue={getTopValue} imagePath={image} />
      ))}
    </div>
  );
};

export default Gallery;
