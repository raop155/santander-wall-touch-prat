import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import Header from './components/Header';

import Home from './views/Home';
import Video from './views/Video';
import Finish from './views/Finish';
import QR from './views/QR';
import Gallery from './views/Gallery';

function App() {
  return (
    <>
      <Header />
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className='switch-wrapper'
      >
        <Route path='/' component={Home} exact />
        <Route path='/video' component={Video} exact />
        <Route path='/finish' component={Finish} exact />
        <Route path='/qr' component={QR} exact />
        <Route path='/gallery' component={Gallery} exact />
        <Redirect from='*' to='/' />
      </AnimatedSwitch>
    </>
  );
}

export default App;
