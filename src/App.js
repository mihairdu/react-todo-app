import React from 'react';
import './App.css';
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Your Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
