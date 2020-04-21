import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import StopwatchAlarm from './StopwatchAlarm';

// styles
import '../styles/Stopwatch.css';
import hourglass from '../assets/hourglass.png';

// helper
import { getTotalMS, formatMS } from '../helper/StopwatchHelper';

export default function Stopwatch(props) {
  const { initTime, updateTotalElapsed } = props;

  // set stopwatch on load
  useEffect(() => {
    const totalMS = getTotalMS({h:0,m:initTime,s:0,ms:0});
    
    const timeObj = formatMS(totalMS);

    setState({
      ...state,
      h: timeObj.h,
      m: timeObj.m,
      s: timeObj.s,
      ms: timeObj.ms,
      totalMS
    });
  }, [initTime]);

  const initData = {
    h: 0,
    m: initTime,
    s: 0,
    ms: 0,
    totalMS: 1200000,
    totalElapsed: 0,
    running: false,
    interval: '',
    alarm: false
  };

  // state
  const [state, setState] = useState(initData);

  // clear intervals on unmount
  useEffect(() => {
    return () => {
      clearInterval(state.interval);
    }
  }, [state.interval]);

  const checkRunning = e => {
    if (!state.running) {
      let start_T = new Date();
      start(start_T);
    } else {
      stop();
    }
  };

  const start = (start_T) => {
    const INTERVAL = 123;
    let interval = setInterval(() => {
      const end_T = new Date();
      const elapsed = end_T - start_T;

      const newTotalMS = state.totalMS - elapsed;
      
      // when stopwatch hits 0
      if (newTotalMS <= 0) {
        clearInterval(interval);
        setState({...state,
          h: 0,
          m: 0,
          s: 0,
          ms: 0,
          interval: null,
          totalMS: 0,
          alarm: true,
          running: false});
      } else {
        const timeObj = formatMS(newTotalMS);

        // // this needs to be fixed
        // setState(prev => {
        //   updateTotalElapsed(prev.totalElapsed);
        //   return {};
        // });
        updateTotalElapsed(INTERVAL);
        setState({
          ...state,
          h: timeObj.h,
          m: timeObj.m,
          s: timeObj.s,
          ms: timeObj.ms,
          running: true,
          interval,
          totalMS: newTotalMS,
          totalElapsed: state.totalElapsed + elapsed
        });
      }
    }, INTERVAL);
  };

  const stop = () => {
    clearInterval(state.interval);
    setState({...state, running: false});
  };

  // classnames
  let hourglass_class = classNames('stopwatch__hourglass', {
    'rotate': state.running,
  });

  // format 0s for single digits
  const formatZero = (num, places) => {
    let char = num.toString();

    while (char.length < places) {
      char = '0' + char;
    }

    return char;
  }

  return (
    <div className='stopwatch__container'>
      <span className='h'>
        {formatZero(state.h, 2)}
      </span>
      <span className='m'>
        {formatZero(state.m, 2)}
      </span>
      <span className='s'>
        {formatZero(state.s, 2)}
      </span>
      <span className='ms'>
        {formatZero(state.ms, 3)}
      </span>

      <button 
      onClick={e => checkRunning(e)}
      className='stopwatch__button'>
        <img 
        alt={'hourglass'}
        className={hourglass_class}
        src={hourglass}></img>
      </button>

      {state.alarm && <StopwatchAlarm />}
    </div>
  )
}
