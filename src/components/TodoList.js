import React from 'react';

// components
import Todo from './Todo';

export default function TodoList({todos, deleteHandler, completeHandler}) {
  const list = todos.map(todo => (
    <Todo
    completeHandler={completeHandler}
    deleteHandler={deleteHandler}
    key={todo.todoID}
    todoID={todo.todoID}
    title={todo.title}
    complete={todo.complete}
    />
  ));

  return (
    <ul>
      {list} 
    </ul>
  )
}
