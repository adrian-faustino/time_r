import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

// styles
import '../styles/Stopwatch.css';
import hourglass from '../assets/hourglass.png';

// helper
import { getTotalMS, msElapsed } from '../helper/StopwatchHelper';

export default function Stopwatch() {
  const initData = {
    h: 0,
    m: 20,
    s: 0,
    ms: 0,
    totalMS: 0,
    running: false,
    interval: '',
  };

  const [state, setState] = useState(initData);

  const checkRunning = e => {
    if (!state.running) {
      let start_T = new Date();
      start2(start_T);
    } else {
      stop();
    }
  };

  const start2 = (start_T) => {
    let interval = setInterval(() => {
      const end_T = new Date();
      console.log(msElapsed(start_T, end_T));
      setState(prev => {
        const newH = prev.h + 1;
        return {...prev, h: newH, running: true, interval}
      });
    }, 132);
  };


  const start = (st) => {
    // first try without useEffect:
    let interval = setInterval(() => {
      const ct = new Date();
      const elapsed =  ct - st;

      let newMS = state.ms - (elapsed % 1000);
      if (newMS < 0) {
        state.ms = 1000;
      }
      let newS = state.s - Math.floor(elapsed / 1000);
      if (newS === 0) {
        state.s = 59;
      }

      let newM = state.m - Math.floor(elapsed / 60000)
      if (newM === 0) {
        state.m = 59;
      }

      let newH = state.h - Math.floor(elapsed / 3600000);

      setState({...state, ms: newMS, s: newS, m: newM, h: newH, running: true, interval});
    }, 123);
  };

  const stop = () => {
    clearInterval(state.interval);
    setState({...state, running: false});
  };


  // classnames
  let hourglass_class = classNames('stopwatch__hourglass', {
    'rotate': state.running,
  });

  return (
    <div className='stopwatch__container'>
      <span className='h'>
        {state.h}
      </span>
      <span className='m'>
        {state.m}
      </span>
      <span className='s'>
        {state.s}
      </span>
      <span className='ms'>
        {state.ms}
      </span>

      <button 
      onClick={e => checkRunning(e)}
      className='stopwatch__button'>
        <img 
        className={hourglass_class}
        src={hourglass}></img>
      </button>
    </div>
  )
}
