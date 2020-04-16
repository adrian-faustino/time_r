import React from 'react'
import classNames from 'classnames';

// styles
import '../styles/InputForm.css';

export default function InputButton({imgSrc, timeSelection, setInitTime}) {
  const btnClass = classNames('input__button', {
  })

  return (
    <button
    onClick={setInitTime}
    className={btnClass}>

      {imgSrc ? <img className={'input__button--img'} alt={imgSrc} src={imgSrc} /> : 'Submit'}

      {timeSelection? <h3 className={'input__button--name'}>{timeSelection + 'm'}</h3> : 'uhh?'}

    </button>
  )
}
