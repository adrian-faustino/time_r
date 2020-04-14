import React from 'react'
import classNames from 'classnames';

// styles
import '../styles/InputForm.css';

export default function InputButton({imgSrc}) {
  const btnClass = classNames('input__button', {
    'input__button--img': imgSrc,
  })

  return (
    <button
    className={btnClass}
    >
      {imgSrc ? <img alt={imgSrc} src={imgSrc} /> : 'Submit'}
    </button>
  )
}
