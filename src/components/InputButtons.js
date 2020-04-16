import React from 'react';

// components
import InputButton from './InputButton';

// styles
import '../styles/InputForm.css';
import timerIMG from '../assets/timer.png';


export default function InputButtons(props) {
  const TIME_SELECTION = [15, 20, 30, 60];
  const buttons = TIME_SELECTION.map(timeSelection => {
    return <InputButton
    imgSrc={timerIMG}
    timeSelection={timeSelection}
    />;
  });

  return (
    <div className='inputButtons__container'>
      {buttons}
    </ div>
  )
}
