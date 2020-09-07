import React, { useState } from 'react';
import Hammer from 'react-hammerjs';

const TouchComponent = () => {
  // const [count, setCount] = useState(0);
  const [event, setEvent] = useState('');

  const [saveDeltaX, setSaveDeltaX] = useState(0);
  const [saveDeltaY, setSaveDeltaY] = useState(0);
  const [saveRotation, setSaveRotation] = useState(0);
  const [saveScale, setSaveScale] = useState(1);

  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  // const handleTap = (e) => {
  //   console.log(e);
  //   setCount((prev) => prev + 1);
  // };

  const handlePan = (e) => {
    console.log(e);
    setEvent('handlePan');
    // setPointers(e.pointers);
    // console.log(e.pointers);
    if (event === 'handlePinch' || event === 'handlePinchEnd') return;
    setDeltaX(saveDeltaX + e.deltaX);
    setDeltaY(saveDeltaY + e.deltaY);
  };

  const handlePanEnd = (e) => {
    console.log(e);
    setEvent('handlePanEnd');
    setSaveDeltaX(deltaX);
    setSaveDeltaY(deltaY);
  };

  const MIN_SCALE = 1.0;
  const MAX_SCALE = 2.5;

  const handlePinch = (e) => {
    setEvent('handlePinch');

    let currentScale = saveScale * e.scale;
    if (currentScale > MAX_SCALE) {
      currentScale = MAX_SCALE;
    } else if (currentScale < MIN_SCALE) {
      currentScale = MIN_SCALE;
    }

    setRotation(saveRotation + e.rotation);
    setScale(currentScale);
  };

  const handlePinchEnd = (e) => {
    setEvent('handlePinchEnd');
    setSaveRotation(rotation);
    setSaveScale(scale);
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
          pinch: { enable: true },
        },
        // recognizeWith: { rotate: 'pinch' },
      }}
    >
      <div
        style={{
          transform: `translate3d(${deltaX}px, ${deltaY}px, 0px) scale(${scale}) rotate(${rotation}deg)`,
        }}
      >
        <img
          src={process.env.PUBLIC_URL + '/images/gallery/foto_01.png'}
          alt='Arturo Prat gallery'
        />
      </div>
    </Hammer>
  );
};

export default TouchComponent;
