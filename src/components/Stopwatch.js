import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

// styles
import '../styles/Stopwatch.css';
import hourglass from '../assets/hourglass.png';

// helper
import { getTotalMS, formatMS } from '../helper/StopwatchHelper';

export default function Stopwatch(props) {
  const { initTime } = props;

  const initData = {
    h: 0,
    m: 20,
    s: 0,
    ms: 0,
    totalMS: 1200000,
    running: false,
    interval: '',
  };

  // state
  const [state, setState] = useState(initData);

  const checkRunning = e => {
    if (!state.running) {
      let start_T = new Date();
      start(start_T);
    } else {
      stop();
    }
  };

  // set the stopwatch onload
  useEffect(() => {
    if (initTime) {
    console.log('generated!', initTime)
    const totalMS = getTotalMS({h:0,m:initTime,s:0,ms:0});
    setState({...state, totalMS});
    console.log(state.totalMS, 'totalMS!');
    }
  }, [initTime]);

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
