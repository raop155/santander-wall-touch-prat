import React from 'react';
import { useSpring, animated, to } from 'react-spring';
import { useGesture } from 'react-use-gesture';

const GestureImage = ({ imagePath, getTopValue }) => {
  const SCREEN_WIDTH = 1920;
  const SCREEN_HEIGHT = 1080;
  const IMG_WIDTH = 500;
  const IMG_HEIGHT = 280;
  const MIN_ZOOM = -0.25;
  const MAX_ZOOM = 0.5;

  const domTarget = React.useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, set] = useSpring(() => {
    return {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    };
  });

  const [z, setZ] = React.useState(1);
  const [randomX, setRandomX] = React.useState(0);
  const [randomY, setRandomY] = React.useState(0);
  const [randomScale, setRandomScale] = React.useState(1);
  const [randomAngle, setRandomAngle] = React.useState(0);

  const random = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  React.useEffect(() => {
    setRandomX(random(0 + IMG_WIDTH / 2, SCREEN_WIDTH - IMG_WIDTH * 2));
    setRandomY(random(0 + IMG_HEIGHT / 2, SCREEN_HEIGHT - IMG_HEIGHT * 2));
    setRandomScale(random(0.75, 1.25));
    setRandomAngle(random(0, 180));
  }, []);

  useGesture(
    {
      onDragStart: (props) => {
        setZ(getTopValue());
      },
      onDrag: ({ offset: [x, y] }) => {
        set({ x, y });
      },
      onDragEnd: () => {},
      onPinch: ({ offset: [d, a] }) => {
        let currentScale = d / 200;
        if (currentScale > MAX_ZOOM) {
          currentScale = MAX_ZOOM;
        } else if (currentScale < MIN_ZOOM) {
          currentScale = MIN_ZOOM;
        }
        set({ zoom: currentScale, rotateZ: a });
      },
      // onMove: ({ xy: [px, py], dragging }) =>
      //   !dragging && set({ rotateX: calcX(py, y.get()), rotateY: calcY(px, x.get()), scale: 1 }),
      // onHover: ({ hovering }) => !hovering && set({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    {
      domTarget,
      eventOptions: { passive: false },
      drag: {
        // bounds: { left: -100, right: 100, top: -50, bottom: 50 },
        // rubberband: true,
        // initial: () => [x.get(), 0],
      },
    },
  );

  const preventDefault = (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    document.addEventListener('gesturestart', preventDefault);
    document.addEventListener('gesturechange', preventDefault);

    return () => {
      document.removeEventListener('gesturestart', preventDefault);
      document.removeEventListener('gesturechange', preventDefault);
    };
  }, []);

  // return <div ref={domTarget}>HELLO!!!</div>;

  return (
    <animated.div
      ref={domTarget}
      className='gesture-image'
      style={{
        position: 'absolute',
        transform: `translate3d(${randomX}px, ${randomY}px, 0px) rotate(${randomAngle}deg) scale(${randomScale})`,
        x,
        y,
        scale: to([scale, zoom], (s, z) => s + z),
        rotateX,
        rotateY,
        rotateZ,
        zIndex: z,
        touchAction: 'none',
        userSelect: 'none',
      }}
    >
      <img width='500' draggable='false' src={imagePath} alt='Arturo Prat gallery' />
    </animated.div>
  );
};

export default GestureImage;
