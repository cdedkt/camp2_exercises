import React, { Component } from 'react';

class TableTodoRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //isDone: props.todo.done,
      //numberOfTodos: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getDeletedButton(todo) {
    if (todo.done) {
      return (<input type="button" name="isDeleted" value="Delete" id={todo.id} onClick={this.handleInputChange}/>);
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    // this.setState({
    //   [name]: value
    // });
    if (name === "isDone") {
      this.props.actionCheckTodo(target.id);
    }

    if (name === "isDeleted") {
      //alert('This todo was submitted: ' + target.id);
      this.props.actionDeleteTodo(target.id);
      //this.props.fct(target.id);
    }
  }

  render() {
    return (
      <tr>
        <td scope="row">{this.props.todo.id}</td>
        <td>{this.props.todo.label}</td>
        <td>
          <input
            name="isDone"
            type="checkbox"
            id={this.props.todo.id}
            checked={this.props.todo.done}
            onChange={this.handleInputChange} />
        </td>
        <td>
          {this.getDeletedButton(this.props.todo)}
        </td>
      </tr>
    );
  }
}

export default TableTodoRow;
