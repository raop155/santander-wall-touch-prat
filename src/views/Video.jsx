import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import useSound from 'use-sound';

const secondsToTime = (duration) => {
  // Hours, minutes and seconds
  var hrs = ~~(duration / 3600);
  var mins = ~~((duration % 3600) / 60);
  var secs = ~~duration % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = '';

  if (hrs > 0) {
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
  }

  ret += '' + mins + ':' + (secs < 10 ? '0' : '');
  ret += '' + secs;
  return ret;
};

const Video = ({ history }) => {
  const [urls] = useState([process.env.PUBLIC_URL + '/videos/prat.mov']);
  const [counter, setCounter] = useState(0);
  const [url, setUrl] = useState(urls[counter]);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [time, setTime] = useState('0:00');
  const [duration, setDuration] = useState(0);
  let videoPlayerRef = useRef(null);

  const [play] = useSound(process.env.PUBLIC_URL + `/sounds/click.mp3`, {
    interrupt: true,
  });

  useEffect(() => {
    console.log('counter', counter);
    console.log('urls.length', urls.length);
    if (counter === urls.length) setCounter(0);
    setUrl(urls[counter]);
  }, [counter, urls]);

  const handleOnEnded = () => {
    console.log('handleOnEnded');
    // setCounter((prev) => prev + 1);
    history.push('/finish');
  };

  const ref = (player) => {
    videoPlayerRef = player;
  };

  const handleReady = () => {
    console.log('handleReady');
  };
  const handlePlay = () => {
    // console.log('handlePlay');
  };

  const handleProcess = ({ played, playedSeconds, loaded, loadedSeconds }) => {
    if (!seeking) {
      setPlayed(played);
      const leftTime = duration - playedSeconds;
      setTime(secondsToTime(leftTime));
    }
  };

  const handleDuration = (duration) => {
    console.log('duration', duration);
    console.log(secondsToTime(duration));
    setTime(secondsToTime(duration));
    setDuration(duration);
  };

  const handleSeekMouseDown = (e) => {
    console.log('handleSeekMouseDown');
    setSeeking(true);
  };

  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e) => {
    console.log('handleSeekMouseUp', e.target.value);
    setSeeking(false);
    videoPlayerRef.seekTo(parseFloat(e.target.value));
  };

  const handlePlayPause = (e) => {
    console.log('handlePlayPause');
    setPlaying((prev) => !prev);
    play();
  };

  return (
    <div id='Video'>
      <main className='main'>
        <div className='left-side'>
          <div className='left-side__legend'>
            <h2 className='title'>Arturo Prat</h2>
            <p className='description'>
              Capitán de Fragata <br /> 1848-1879
            </p>
          </div>
        </div>
        <div className='video'>
          <ReactPlayer
            ref={ref}
            className='react-player'
            url={url}
            width={1920}
            height={1080}
            playing={playing}
            // loop={true}
            onPlay={handlePlay}
            onProgress={handleProcess}
            onDuration={handleDuration}
            onEnded={handleOnEnded}
            onReady={handleReady}
            // muted={true}
            // light={true}
            // controls={true}
          />
        </div>
        <div className='blank'></div>
        <div className='right-side'></div>
      </main>
      <div className='controls'>
        <div className='controls-container'>
          <div className='buttons'>
            <div className='playPause' onClick={handlePlayPause}>
              {playing ? (
                <img
                  src={process.env.PUBLIC_URL + '/images/ico_pause_controls.png'}
                  alt='Pause icon'
                />
              ) : (
                <img
                  src={process.env.PUBLIC_URL + '/images/ico_play_controls.png'}
                  alt='Play icon'
                />
              )}
            </div>
          </div>

          <div className='bar'>
            <input
              className='progress-bar'
              type='range'
              min={0}
              max={0.999999}
              step='any'
              value={played}
              onMouseDown={handleSeekMouseDown}
              onChange={handleSeekChange}
              onMouseUp={handleSeekMouseUp}
            />

            <div className='time'>{time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
