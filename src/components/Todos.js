import React from "react";
// can be import React, { Component } from 'react'
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends React.Component {
  // so it can be Component not React.Component

  // render is a lifecycle method!
  render() {
    // console.log(this.props.todos);
    // returns JSX - easier way to write JS for output in the browser
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// Prop Types
// define any prop types for this class
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
