import React, { Component } from 'react';

import TableTodoRow from './TableTodoRow';
import _ from "underscore";

class TableTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: props.todos,
      sorter: "label",
      desc: false,
      newTodoLabel: "",
      lastId: "100",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.checkTodo = this.checkTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  capitalize(value) {
    const re = /(\b[a-z](?!\s))/g;
    return value.replace(re, function(x){return x.toUpperCase();});
  }

  getTodos() {
    const todos = _.sortBy(this.state.todoList, this.state.sorter);
    return this.state.desc ? todos.reverse() : todos;
  }

 nextId() {
   this.setState({
     lastId: this.state.lastId + 1
   });
   return this.state.lastId;
 }

  addTodo() {
    if (this.state.newTodoLabel !== "") {
      this.setState({
        todoList: [...this.state.todoList, {
          id: this.nextId(),
          label: this.state.newTodoLabel,
          done: false
        }],
        newTodoLabel: ""
      });
    }
  }

  checkTodo(todoId) {
    console.log("checkTodo debut", todoId);
    const todoToModify = _.findWhere(this.state.todoList, {id: todoId});
    //console.log(todoToModify);
    todoToModify.done = !todoToModify.done;
    //console.log(todoToModify);
    const otherTodos = _.reject(this.state.todoList, function(todo){ return todo.id === todoId; });
    //console.log(otherTodos);
    this.setState({
      todoList: [...otherTodos, todoToModify]
    });
  }

  deleteTodo(todoId) {
    console.log("deleteTodo debut", todoId);
    const otherTodos = _.reject(this.state.todoList, function(todo){ return todo.id === todoId; });
    //console.log(otherTodos);
    this.setState({
      todoList: otherTodos
    });
  }

  handleColumnClick(newSorter) {
    this.setState({
        sorter: newSorter,
        desc: (newSorter === this.state.sorter) && !this.state.desc
    });
  }

  handleChange(event) {
    this.setState({newTodoLabel: this.capitalize(event.target.value)});
  }

  handleSubmit(event) {
    //alert('A new Todo was submitted: ' + this.state.newTodoLabel);
    this.addTodo();
    event.preventDefault();
  }

  render() {
    //this.handleCheckTodo(2);

    return (
      <div className="container">
        <form className="mt-4" onSubmit={this.handleSubmit}>
          <label>
            <span className="mr-4">New Todo :</span>
            <input type="text" value={this.state.newTodoLabel} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th scope="col" onClick={() => this.handleColumnClick("id")}>id</th>
              <th scope="col" onClick={() => this.handleColumnClick("label")}>label</th>
              <th scope="col" onClick={() => this.handleColumnClick("done")}>done</th>
            </tr>
          </thead>
          <tbody>
            {this.getTodos().map(atodo =>
              <TableTodoRow key={atodo.id} 
                todo={atodo}
                actionCheckTodo={this.checkTodo}
                actionDeleteTodo={this.deleteTodo}/>)}
          </tbody>
        </table>

        <textarea className="mt-6" style={{width:700, height:200}} value={JSON.stringify(this.state.todoList)} />
      </div>
    );
  }
}

export default TableTodos;
