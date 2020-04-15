import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

// components
import MainDivision from './components/MainDivision';
import InputForm from './components/InputForm';
import InputButtons from './components/InputButtons';
import InputDisplay from './components/InputDisplay';
import TodoList from './components/TodoList';
import Todo from './components/Todo';
import SideNav from './components/SideNav';
import SideNavButton from './components/SideNavButton';

// DUMMY DATA
const initData = [{ //pass this data for ONE todo
  title: 'Clean Room',
  complete: false,
  todoID: uuidv4(),
},{
  title: 'Do Laundry',
  complete: true,
  todoID: uuidv4(),
}];


function App() {
  // setState functions
  const [currentTodo, setCurrentTodo] = useState('');
  const [todos, setTodos] = useState(initData)

  // event handlers
  const inputHandler = e => {
    setCurrentTodo(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (currentTodo.length === 0) {
      return;
    }

    setTodos([...todos, {
      title: currentTodo,
      complete: false,
      todoID: uuidv4(),
    }]);
    setCurrentTodo('');
  }

  const deleteHandler = (e, todoID) => {
    e.preventDefault();
    const list = todos.filter(todo => {
      return todo.todoID !== todoID;
    });

    setTodos(list);
  }

  const completeHandler = (e, todoID) => {
    e.preventDefault();
    const thisTask = todos.find(obj => obj.todoID === todoID);
    thisTask.complete = !thisTask.complete;

    setTodos([...todos]);
  };

  //=====  Helper Functions  ===== /

    // unchecks todos marked 'complete'
  function onUntoggle() {
    const list = todos.map(todo => {
      const newObj = {...todo, complete: false};
      return newObj;
    });
    setTodos(list);
  }

    // deletes completed tasks
  function onDeleteComplete() {
    const list = todos.filter(todo => !todo.complete);
    setTodos(list);
  }

    // deletes all todos
  function onDeleteAll() {
    console.log('del');
    setTodos([]);
  }

  //=====  Main Render  =====//
  return (
    <div className="App">
      <MainDivision>
        <section className="display__container">
          <InputDisplay />
          <InputForm 
          submitHandler={submitHandler}
          inputHandler={inputHandler}
          currentTodo={currentTodo}
          />
          <InputButtons
          />
        </section>
      </ MainDivision>

      <MainDivision>
        <TodoList
        completeHandler={completeHandler}
        deleteHandler={deleteHandler}
        todos={todos}
        />
        {currentTodo && currentTodo.trim() ? <Todo title={currentTodo} blurOut /> : ''}
      </MainDivision>

      <SideNav>
        <SideNavButton
        message={'Reset'}
        onClick_={() => onUntoggle()}/>
        <SideNavButton
        message={'Clear Done'}
        onClick_={() => onDeleteComplete()}/>
        <SideNavButton 
        danger={'danger'}
        message={'Clear All'}
        onClick_={() => onDeleteAll()}/>
      </SideNav>
    </div>
  );
}

export default App;