import React from 'react';

// components
import InputButton from './InputButton';

// styles
import '../styles/InputForm.css';
import timerIMG from '../assets/timer.png';


export default function InputButtons(props) {
  const TIME_SELECTION = [0.05, 20, 30, 60];
  const buttons = TIME_SELECTION.map(timeSelection => {
    return <InputButton
    currentTime={props.currentTime}
    key={timeSelection}
    setInitTime={e => props.setInitTime(timeSelection)}
    imgSrc={timerIMG}
    timeSelection={timeSelection}
    />;
  });

  return (
    <>
      <div className='inputButtons__container'>
        {buttons}
      </ div>
    </>
  )
}
