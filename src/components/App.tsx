import React from 'react';
import './App.css';
import Users from './Users/Users';


function App() {
  return (
    //Задание 1 Обернём карточки в container
    <div className="App container">
      <header className="App-header">
      </header>
      <h1>My React App</h1>
      <Users/>
    </div>
  );
}

export default App;
