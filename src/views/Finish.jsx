import React from 'react';
import ReactPlayer from 'react-player';

const Finish = ({ history }) => {
  const handleChangeView = (view) => {
    history.push(view);
  };

  return (
    <div id='Finish'>
      <div className='video'>
        <ReactPlayer
          // ref={ref}
          className='react-player'
          url={'/videos/bg_loop.mov'}
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
            <img src='/images/btn_play.png' alt='Back button' />
            <span>Ver nuevamente</span>
          </div>
          <div className='buttons__home' onClick={() => handleChangeView('/')}>
            <img src='/images/btn_home.png' alt='Home button' />
            <span>Volver al home</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Finish;
