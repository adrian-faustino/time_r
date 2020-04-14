import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

// styles
import '../styles/Stopwatch.css';
import hourglass from '../assets/hourglass.png';

export default function Stopwatch() {
  const initData = {
    h: 0,
    m: 0,
    s: 0,
    ms: 0,
    running: false,
    interval: '',
  };

  const [time, setTime] = useState(initData);

  const checkState = e => {
    console.log('The stopwatch is running', time.running);
    if (!time.running) {
      let st = new Date();
      start(st);
    } else {
      stop();
    }
  };


  const start = (st) => {
    // first try without useEffect:
    let interval = setInterval(() => {
      const ct = new Date();
      const elapsed =  ct - st;

      let newMS = time.ms - (elapsed % 1000);
      if (newMS < 0) {
        time.ms = 1000;
      }
      let newS = time.s - Math.floor(elapsed / 1000);
      if (newS === 0) {
        time.s = 59;
      }

      let newM = time.m - Math.floor(elapsed / 60000)
      if (newM === 0) {
        time.m = 59;
      }

      let newH = time.h - Math.floor(elapsed / 3600000);

      setTime({...time, ms: newMS, s: newS, m: newM, h: newH, running: true, interval});
    }, 123);
  };

  const stop = () => {
    clearInterval(time.interval);
    setTime({...time, running: false});
  };


  // classnames
  let hourglass_class = classNames('stopwatch__hourglass', {
    'rotate': time.running,
  });

  return (
    <div className='stopwatch__container'>
      <span className='h'>
        {time.h}
      </span>
      <span className='m'>
        {time.m}
      </span>
      <span className='s'>
        {time.s}
      </span>
      <span className='ms'>
        {time.ms}
      </span>

      <button 
      onClick={e => checkState(e)}
      className='stopwatch__button'>
        <img 
        className={hourglass_class}
        src={hourglass}></img>
      </button>
    </div>
  )
}
