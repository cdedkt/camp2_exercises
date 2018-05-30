import React, { Component } from 'react';
import { connect } from "react-redux";
import { getTodoList } from "./../../store/todo/selectors";
import { tableTodosHandler } from "./../../store/todo/handlers";

import TableTodoRow from './TableTodoRow';

class TableTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoLabel: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitNewTodo = this.handleSubmitNewTodo.bind(this);
    this.handleOrderColumn = this.handleOrderColumn.bind(this);
    this.handleSubmitResetAllTodo = this.handleSubmitResetAllTodo.bind(this);
	this.handleSubmitLoadTodo = this.handleSubmitLoadTodo.bind(this);
  }

  capitalize(value) {
    const re = /(\b[a-z](?!\s))/g;
    return value.replace(re, function(x){return x.toUpperCase();});
  }

  handleChange(event) {
    this.setState({newTodoLabel: this.capitalize(event.target.value)});
  }

  handleSubmitNewTodo(event) {
    if (this.state.newTodoLabel) {
      this.props.addTodo(this.state.newTodoLabel);
    }
    this.setState({newTodoLabel: ""});
    event.preventDefault();
  }

  handleSubmitResetAllTodo(event) {
    this.props.resetTodoList();
    event.preventDefault();
  }
  
  handleSubmitLoadTodo(event) {
    this.props.loadTodoList();
    event.preventDefault();
  }

  handleOrderColumn(event) {
    this.props.orderTodoList(event.target.id);
  }

  render() {
    //console.log("RENDER TableTodos", this.props.todoList);
    return (
      <div className="container">
        <form className="mt-4" onSubmit={this.handleSubmitNewTodo}>
          <label>
            <span className="mr-4">New Todo :</span>
            <input type="text" value={this.state.newTodoLabel} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add" />
        </form>

        {this.props.fetching
          ? <div>
              <span className="mt-4 mb-4">LAODING IN PROGRESS</span>
            </div>
          :
            <table className="table table-striped mt-4">
              <thead>
                <tr>
                  <th scope="col" id="id" onClick={this.handleOrderColumn}>id</th>
                  <th scope="col" id="label" onClick={this.handleOrderColumn}>label</th>
                  <th scope="col" id="done" onClick={this.handleOrderColumn}>done</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.props.todoList.map(atodo => {
                  return (<TableTodoRow
                    key={atodo.id}
                    todo={atodo}
                  />)
                })}
              </tbody>
            </table>
        }

        <form className="mt-4" onSubmit={this.handleSubmitResetAllTodo}>
          <input type="submit" value="Reset All Todos" />
        </form>
		<form onSubmit={this.handleSubmitLoadTodo}>
          <input type="submit" value="Load Brands Todos" />
        </form>

		
		
        <textarea className="mt-4"
          style={{width:700, height:200}}
          value={JSON.stringify(this.props.todoList)}
          onChange={() => {return null}}/>
      </div>
    );
  }
}

const Connected = connect(getTodoList, tableTodosHandler)(TableTodos);
export default Connected;
