import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import useSound from 'use-sound';
import ArturoPratImage from '../styles/images/prat.png';

const bullets = [
  {
    title: 'Nace:',
    description: '03 / Abril / 1848',
  },
  {
    title: 'Escuela Naval:',
    description: '28 / Agosto / 1858',
  },
  {
    title: 'Matrimonio:',
    description: '05 / Mayo / 1873',
  },
  {
    title: 'Estudios de derecho:',
    description: '1870 - 1876',
  },
  {
    title: 'Capitán de Fragata:',
    description: '25 / Septiembre / 1877',
  },
];

const Home = () => {
  const [play] = useSound(`/sounds/click.mp3`, {
    interrupt: true,
  });

  const handleSound = () => {
    play();
  };

  return (
    <div id='Home'>
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
      <div className='content'>
        <main className='main'>
          <div className='main__aside'>
            <h1 className='aside__title'>Arturo Prat</h1>
            <h2 className='aside__subtitle'>
              “Antes de subir al pedestal, <br /> los héroes han sido hombres.”
            </h2>
            <p className='aside__legend'>Gonzalo Vial C.</p>

            <Link to='/video' onClick={() => handleSound()}>
              <div className='aside__btn-play button button--error button--has-icon has-with'>
                <span>Play video</span>
                <img className='icon' src='/images/ico_play.png' alt='icon' />
              </div>
            </Link>
            <p onClick={() => handleSound()} className='aside__action-text'>
              Click en pantalla para iniciar
            </p>
          </div>
          <img className='main__image' src={ArturoPratImage} alt='Arturo Prat' />
          <div className='main__rightside'>
            <p className='rightside__date'>1879</p>
            <p className='rightside__legend'>
              Capitán de Fragata <br /> 1848-1879
            </p>
          </div>
        </main>
      </div>

      <footer className='footer'>
        <ol className='footer__dates'>
          {bullets.map((bullet) => {
            return (
              <li key={bullet.title} className='dates'>
                <div className='dates__title'>{bullet.title}</div>
                <div className='dates__description'>{bullet.description}</div>
              </li>
            );
          })}
        </ol>
      </footer>
    </div>
  );
};

export default Home;
