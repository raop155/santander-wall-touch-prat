import React, { useState } from 'react';
import Hammer from 'react-hammerjs';

const TouchImage = (props) => {
  const MIN_SCALE = 0.25;
  const MAX_SCALE = 0.5;
  const WIDTH = 1920;
  const HEIGHT = 1080;
  const initPositionX = props.pos.x - WIDTH / 4;
  const initPositionY = props.pos.y - HEIGHT / 4;
  const initRotation = props.rotation;
  const initScale = props.scale;

  const [angle, setAngle] = useState(0);

  // const [count, setCount] = useState(0);
  const [event, setEvent] = useState('');

  const [saveDeltaX, setSaveDeltaX] = useState(initPositionX);
  const [saveDeltaY, setSaveDeltaY] = useState(initPositionY);
  const [saveRotation, setSaveRotation] = useState(initRotation);
  const [saveScale, setSaveScale] = useState(initScale);

  const [deltaX, setDeltaX] = useState(initPositionX);
  const [deltaY, setDeltaY] = useState(initPositionY);
  const [deltaZ, setDeltaZ] = useState(0);
  const [rotation, setRotation] = useState(initRotation);
  const [scale, setScale] = useState(initScale);

  // const handleTap = (e) => {
  //   console.log(e);
  //   setCount((prev) => prev + 1);
  // };

  // props.

  const handlePan = (e) => {
    // console.log(e);
    setDeltaZ(props.getTopValue());

    // console.log(deltaZ);

    if (e.pointers.maxPointers > 1) {
      return;
    }
    if (event === 'handlePinch' || event === 'handlePinchEnd') return;
    setEvent('handlePan');
    // setPointers(e.pointers);
    // console.log(e.pointers);

    setDeltaX(saveDeltaX + e.deltaX);
    setDeltaY(saveDeltaY + e.deltaY);
  };

  const handlePanEnd = (e) => {
    // console.log(e);
    if (e.pointers.maxPointers > 1) {
      return;
    }
    // if (event === 'handlePinch' || event === 'handlePinchEnd') return;
    setEvent('handlePanEnd');
    setSaveDeltaX(deltaX);
    setSaveDeltaY(deltaY);
  };

  const handlePinch = (e) => {
    setEvent('handlePinch');

    let currentScale = saveScale * e.scale;
    if (currentScale > MAX_SCALE) {
      currentScale = MAX_SCALE;
    } else if (currentScale < MIN_SCALE) {
      currentScale = MIN_SCALE;
    }

    // setRotation(saveRotation + e.rotation);
    setScale(currentScale);

    if (angle === 0) {
      setAngle(Math.round(e.rotation));
    } else {
      setRotation(saveRotation + Math.round(e.rotation) - angle);
    }

    setDeltaX(saveDeltaX + e.deltaX);
    setDeltaY(saveDeltaY + e.deltaY);
  };

  const handlePinchEnd = (e) => {
    setEvent('handlePinchEnd');
    setSaveRotation(rotation);
    setSaveScale(scale);
    setAngle(0);

    setSaveDeltaX(deltaX);
    setSaveDeltaY(deltaY);
  };

  return (
    <Hammer
      // onTap={handleTap}
      onPan={handlePan}
      onPanEnd={handlePanEnd}
      onPinch={handlePinch}
      onPinchEnd={handlePinchEnd}
      options={{
        touchAction: 'compute',
        recognizers: {
          pan: { threshold: 15 },
          pinch: { enable: true },
        },
        // recognizeWith: { rotate: 'pinch' },
      }}
      style={{
        position: 'absolute',
        zIndex: `${deltaZ}`,
        transform: `translate3d(${deltaX}px, ${deltaY}px, 0px) scale(${scale}) rotate(${rotation}deg)`,
        // transform: `translate3d(${deltaX}px, ${deltaY}px, ${deltaZ}px) scale(${scale}) rotate(${rotation}deg)`,
        // transform: `translate(${deltaX}px, ${deltaY}px) scale(${scale}) rotate(${rotation}deg)`,
      }}
    >
      <img src={process.env.PUBLIC_URL + '/images/gallery/foto_01.png'} alt='Arturo Prat gallery' />
    </Hammer>
  );
};

export default TouchImage;
