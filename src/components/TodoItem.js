import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
    return (
      <div>
        {/* should be able to say in this expression..each todo title will show */}
        <p>{ this.props.todo.title }</p>
      </div>
    )
  }
}

export default TodoItem
