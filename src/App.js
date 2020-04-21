import React, { useState } from 'react';
import './App.css';
import './styles/Animations.css'
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
import StatsBoard from './components/StatsBoard';

// DUMMY DATA
// const initData = [{ //pass this data for ONE todo
//   title: 'Clean Room',
//   complete: false,
//   initTime: 20,
//   todoID: uuidv4(),
// },{
//   title: 'Do Laundry',
//   complete: true,
//   initTime: 15,
//   todoID: uuidv4(),
// }];


function App() {
  // setState functions. SW initially set to 20 mins (GLOW)
  const [state, setState] = useState({
    currentTodo: '',
    stopwatchT: 20,
    todos: [],
    totalElapsed: 0
  });

  // event handlers
  const inputHandler = e => {
    setState({...state, currentTodo: e.target.value});
     
  };

  const submitHandler = e => {
    e.preventDefault();

    if (state.currentTodo.trim().length === 0) {
      return;
    }
    
    setState(prev => {
      return {...prev,
        todos: [...prev.todos, {
          title: state.currentTodo,
          complete: false,
          initTime: state.stopwatchT,
          todoID: uuidv4()
        }],
        currentTodo: '',
        stopwatchT: 20
      };
    });
  }

  const deleteHandler = (e, todoID) => {
    e.preventDefault();
    const list = state.todos.filter(todo => {
      return todo.todoID !== todoID;
    });

    setState(prev => {
      return {...prev,
        todos: list
      };
    });
  }

  const completeHandler = (e, todoID) => {
    e.preventDefault();
    const thisTask = state.todos.find(obj => obj.todoID === todoID);
    thisTask.complete = !thisTask.complete;

    // setTodos([...todos]);
    setState(prev => {
      return {...prev,
        todos: [...state.todos]
      };
    });
  };

  const setInitTime = mins => {
    setState(prev => {
      return {...prev,
        stopwatchT: mins
      };
    });
  };

  //=====  Helper Functions  ===== /

    // unchecks todos marked 'complete'
  function onUntoggle() {
    const list = state.todos.map(todo => {
      const newObj = {...todo, complete: false};
      return newObj;
    });
 
    setState(prev => ({...prev, todos: list}));
  }

    // deletes completed tasks
  function onDeleteComplete() {
    const list = state.todos.filter(todo => !todo.complete);
  
    setState(prev => ({...prev, todos: list}));
  }

    // deletes all todos
  function onDeleteAll() {
    // clear interval
    state.todos.forEach(todo => {

    });

    setState(prev => ({...prev, todos: []}));
  }

  // CALCULATE TOTAL ELAPSED
  function updateTotalElapsed(ms) {
    setState(prev => {
      return {...prev,
        totalElapsed: prev.totalElapsed + ms
      };
    });
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
          currentTodo={state.currentTodo}
          />

          {state.currentTodo && state.currentTodo.trim() ? <InputButtons
          currentTime={state.stopwatchT}
          setInitTime={setInitTime}
          /> : ''}

        </section>
        <StatsBoard totalElapsed={state.totalElapsed}/>
      </ MainDivision>

      <MainDivision>
        <TodoList
        updateTotalElapsed={updateTotalElapsed}
        completeHandler={completeHandler}
        deleteHandler={deleteHandler}
        todos={state.todos}
        />
        {state.currentTodo && state.currentTodo.trim() ? <Todo title={state.currentTodo} initTime={state.stopwatchT} blurOut /> : ''}
      </MainDivision>

      <SideNav>
        {state.todos.filter(todo => todo.complete).length > 0 && <SideNavButton
        message={'Reset'}
        onClick_={() => onUntoggle()}/> || <SideNavButton message={'Reset'} style={'fade'}/>}

        {state.todos.filter(todo => todo.complete).length > 0 && <SideNavButton
        message={'Clear Done'}
        onClick_={() => onDeleteComplete()}/> || <SideNavButton message={'Clear Done'} style={'fade'}/>}

        {state.todos.length > 0 && <SideNavButton 
        style={'danger'}
        message={'Clear All'}
        onClick_={() => onDeleteAll()}/> || <SideNavButton message={'Clear All'} style={'fade'}/>}

      </SideNav>
    </div>
  );
}

export default App;