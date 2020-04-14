import React from 'react'

// styles
import '../styles/InputForm.css';

export default function InputForm(props) {
  const { submitHandler, inputHandler, currentTodo} = props;

  return (
    <form
    onSubmit={e => submitHandler(e)}
    className='input__container'
    >
      <input
      onChange={e => inputHandler(e)}
      className='input__form'
      placeholder='Enter a task...'
      autoComplete='off'
      value={currentTodo}
      />
      <button
      className='input__submit'
      >Submit</button>
    </form>
  )
}
