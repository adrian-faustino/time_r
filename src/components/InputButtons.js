import React from 'react';

// components
import InputButton from './InputButton';

// styles
import '../styles/InputForm.css';
import navigationIMG from '../assets/navigation-button.png';


export default function InputButtons(props) {

  return (
    <div
    className='inputButtons__container'
    >
      <InputButton
      imgSrc={navigationIMG}
      />
      <InputButton
      imgSrc={navigationIMG}
      />
    </ div>
  )
}
