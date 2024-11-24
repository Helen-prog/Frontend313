import { useState, useEffect } from 'react';
import './App.css';
import Task from './Task';
import Form from './Form';

import Counter from './Counter';
// import Person from './Person';
// import Model from './Model';
// import Item from './Item';

function App() {

  // let [tasks, setTasks] = useState([
  //   {
  //     text: "Выучить JavaScript",
  //     done: false
  //   },
  //   {
  //     text: "Познакомиться с React",
  //     done: false
  //   },
  //   {
  //     text: "Устроиться на работу",
  //     done: false
  //   }
  // ]);

  // let addTask = text => {
  //   let newTask = [...tasks, {text}];
  //   setTasks(newTask);
  // }

  // let doneTask = index => {
  //   let newTask = [...tasks];
  //   newTask[index].done = true;
  //   setTasks(newTask);
  // }

  // let deleteTask = index => {
  //   let newTask = [...tasks];
  //   newTask.splice(index, 1);
  //   setTasks(newTask);
  // }

  let [isCounter, setCounter] = useState(true);

  return (
    <div className="App">
        <button onClick={() => setCounter(!isCounter)}>Toggle Counter</button>
       
      {isCounter && <Counter />}

      {/* <div className="task-list">
        {
          tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              doneTask={doneTask}
              index={index}
              deleteTask={deleteTask}
            />
          ))
        }
        <Form addTask={addTask} />
      </div>
   
      <Person /> 
      <Model />
      <Item />*/}   
  
    </div>
  );
}

export default App;
