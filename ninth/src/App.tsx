import React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import Card, {CardVariant} from "./components/Card.tsx";
import {IUser, ITodo} from './types/types.tsx';
// import UserList from './components/UserList.tsx';
import List from './components/List.tsx';
import UserItem from './components/UserItem.tsx';
import TodoItem from './components/TodoItem.tsx';
import EventExample from './components/EventsExample.tsx';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUsers(json))
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(response => response.json())
    .then(json => setTodos(json))
  }, []);

  return (
    <div className="App">
      <EventExample />
      <Card onClickFunc={() => console.log("click")}
       width="200px" height="200px" variant={CardVariant.outlined}>
        <button>Кнопка</button>
      </Card>
      {/* <UserList users={users} /> */}
      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
    </div>
  );
}

export default App;
