import React, { useState } from 'react';

// styles
import '../styles/Stopwatch.css';
import hourglass from '../assets/hourglass.png';

export default function Stopwatch() {
  const initData = {
    h: 0,
    m: 2,
    s: 20,
    ms: 100,
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
    let interval = setInterval(() => {
      const ct = new Date();
      const elapsed =  ct - st;

      let newMS = time.ms - (elapsed % 1000);
      if (newMS < 0) {
        time.ms = 1000;
      }
      let newS = time.s - Math.floor(elapsed / 1000);
      let newM = time.m - Math.floor(elapsed / 60000);
      if (time.s === 0) {
        time.s = 59;
        time.m--;
        if (time.m === 0) {
          time.m = 59;
          time.h--;
        }
      }

      console.log(elapsed);

      setTime({...time, ms: newMS, s: newS, m: newM, running: true, interval});
    }, 123);
  };

  const stop = () => {
    clearInterval(time.interval);
    time.running = false;
  };


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
        <img className='stopwatch__hourglass' src={hourglass}></img>
      </button>
    </div>
  )
}
