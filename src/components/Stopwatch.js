import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

// styles
import '../styles/Stopwatch.css';
import hourglass from '../assets/hourglass.png';

// helper
import { getTotalMS, formatMS } from '../helper/StopwatchHelper';

export default function Stopwatch() {
  const initData = {
    h: 0,
    m: 20,
    s: 0,
    ms: 0,
    totalMS: 3600000,
    running: false,
    interval: '',
  };

  // state
  const [state, setState] = useState(initData);

  // useEffect
  // useEffect(() => {
  //   console.log('useEffect triggered...');
  //   setState({...state,
  //     totalMS: getTotalMS(state),
  //   });
  // }, [totalMS]);

  const checkRunning = e => {
    if (!state.running) {
      let start_T = new Date();
      start(start_T);
    } else {
      stop();
    }
  };

  const start = (start_T) => {
    let interval = setInterval(() => {
      const end_T = new Date();
      const elapsed = end_T - start_T;

      const newTotalMS = state.totalMS - elapsed;
      const timeObj = formatMS(newTotalMS);

      setState({
        ...state,
        h: timeObj.h,
        m: timeObj.m,
        s: timeObj.s,
        ms: timeObj.ms,
        running: true,
        interval,
        totalMS: newTotalMS
      });
    }, 231);
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
        alt={'hourglass'}
        className={hourglass_class}
        src={hourglass}></img>
      </button>
    </div>
  )
}
