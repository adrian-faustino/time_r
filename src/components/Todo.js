import React from 'react';
import classNames from 'classnames';

// styles
import '../styles/Todo.css';
import deleteIMG from '../assets/delete.png';
import completeIMG from '../assets/task-complete.png';

// components
import Stopwatch from './Stopwatch';

export default function Todo(props) {
  let classnames_ = classNames({
    'blur': props.blurOut,
    'todo__button--complete': props.complete
  });
  

  return (
    <li
    className={`todo__container ${classnames_}`}
    >
      <span
      className='todo__title'
      >{props.title}
      <hr className='todo-hr'/>
      </span>
      <section className='todoButton__container'>
        <button
        className={`todo__button ${classnames_}`}
        onClick={e => props.completeHandler(e, props.todoID)}
        >
          <img alt={completeIMG} src={completeIMG}/>
        </button>
        <button
        className='todo__button todo__button--delete'
        onClick={e => props.deleteHandler(e, props.todoID)}
        >
          <img alt={deleteIMG} src={deleteIMG} />
        </button>
      </section>
      { !props.complete ? <Stopwatch /> : ''}
    </li>
  )
}
