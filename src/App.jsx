import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './views/Home';
import Video from './views/Video';
import Finish from './views/Finish';

function App() {
  let location = useLocation();
  return (
    <div>
      <TransitionGroup className='transition-group'>
        <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames={'fade'}>
          <section className='route-section'>
            <Switch location={location}>
              <Route path='/' component={Home} exact />
              <Route path='/video' component={Video} exact />
              <Route path='/finish' component={Finish} exact />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
