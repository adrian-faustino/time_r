import React from 'react';

// components
import Todo from './Todo';

export default function TodoList({todos, deleteHandler, completeHandler, initTime, updateTotalElapsed }) {
  const list = todos.map(todo => (
    <Todo
    updateTotalElapsed={updateTotalElapsed}
    initTime={todo.initTime}
    completeHandler={completeHandler}
    deleteHandler={deleteHandler}
    key={todo.todoID}
    todoID={todo.todoID}
    title={todo.title}
    complete={todo.complete}
    />
  ));

  return (
    <ul className="todos-container">
      {list} 
    </ul>
  )
}
