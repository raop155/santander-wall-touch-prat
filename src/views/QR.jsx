import React from 'react';
import ReactPlayer from 'react-player';

const QR = () => {
  return (
    <div id='QR'>
      <div className='video'>
        <ReactPlayer
          // ref={ref}
          className='react-player'
          url={process.env.PUBLIC_URL + '/videos/bg_loop.mov'}
          width={1920}
          height={1080}
          playing={true}
          loop={true}
          // controls={true}
        />
      </div>

      <div className='header'>
        <h2 className='title'>Arturo Prat</h2>
        <div className='description'>Capitán de Fragata 1848-1879</div>
      </div>

      <main className='main'>
        <div className='qr'>
          <img src={process.env.PUBLIC_URL + '/images/qr.png'} alt='QR' />
        </div>
        <p className='description'>
          Escanea el siguiente código QR
          <br />
          para reproducir en tu móvil
        </p>
      </main>
    </div>
  );
};

export default QR;
