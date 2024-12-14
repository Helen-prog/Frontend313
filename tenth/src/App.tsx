import React, {FC, useState} from 'react';
import AddToysForm from './components/AddToysForm.tsx';
import demoToys from './demoToys.js';
import Toys from './models/Toys.ts';
import DisplayToys from './components/DisplayToys.tsx';

import './App.css';

// const App: React.FunctionComponent = () => {
const App: FC = () => {
  const [toysList, setToysList] = useState<Toys[]>(demoToys);

  const addToys = (newToys: Toys) => {
    setToysList([...toysList, newToys]);
  }

  const updateToys = (newToys: Toys) => {
    setToysList(toysList.map(toys => (toys.id === newToys.id ? newToys : toys)));
  }
  

  return (
    <div className="main">
      <div className="wrap">
        <div className="block">
          <h1 className="heading">Детский игрушки</h1>
          <AddToysForm addToys={addToys} />
        </div>
        <div className="display">
          <DisplayToys toysList={toysList} updateToys={updateToys} />
        </div>
      </div>
    </div>
  );
}

export default App;
