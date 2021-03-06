import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import useSound from 'use-sound';
import * as utils from '../utils/utils';

const Finish = ({ history }) => {
  useEffect(() => {
    console.log('utils.test();', utils.test());
  }, []);

  const [play] = useSound(process.env.PUBLIC_URL + `/sounds/click.mp3`, {
    interrupt: true,
  });

  const handleChangeView = (view) => {
    play();
    history.push(view);
  };

  return (
    <div id='Finish'>
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
        <div className='buttons'>
          <div className='buttons__back' onClick={() => handleChangeView('/video')}>
            <img src={process.env.PUBLIC_URL + '/images/btn_play.png'} alt='Back button' />
            <span>Ver nuevamente</span>
          </div>
          <div className='buttons__forward' onClick={() => handleChangeView('/qr')}>
            <img src={process.env.PUBLIC_URL + '/images/btn_forward.png'} alt='Home button' />
            <span>Enviar a mi móvil</span>
          </div>
          <div className='buttons__home' onClick={() => handleChangeView('/')}>
            <img src={process.env.PUBLIC_URL + '/images/btn_home.png'} alt='Home button' />
            <span>Volver al home</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Finish;
