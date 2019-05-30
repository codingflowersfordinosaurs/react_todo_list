// MAIN PARENT APP COMPONENT THAT WRAPS AROUND EVERYTHING
import React from 'react';
// can be import React, { Component } from 'react'
import Todos from './components/Todos';
import './App.css';

class App extends React.Component {
  // so it can be Component not React.Component
  // note: diff components can have their own state, but most of the time you'll have multiple components that need to access a state
  state = {
    todos: [
      {
        id: 1,
        title: 'Water Plants',
        completed: false
      },
      {
        id: 2,
        title: 'Make dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Clean house',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // render is a lifecycle method!
  render() {
    // console.log(this.state.todos);
    // returns JSX - easier way to write JS for output in the browser
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
