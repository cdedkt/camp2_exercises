import React, { Component } from 'react';
import './App.css';
import _ from "underscore"

function TableHeader() {
  return (
    <tr>
      <th scope="col">what has been paid</th>
      <th scope="col">by whom?</th>
    </tr>
  )
}

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td scope="row">{this.props.what}</td>
        <td>{this.props.by}</td>
      </tr>
    )
  }
}

// App has `expenses` and `users` as props
class App extends Component {
  render() {

    return (
      <div className="App">
        <table className="table table-striped mt-4">
          <thead>
            <TableHeader/>
          </thead>
          <tbody>
          {this.props.expenses.map((expense, index) => {

            const userFound = _.findWhere(this.props.users, {id: expense.who});
            let username = "";
            console.log("userFound=", userFound);
            if (userFound !== undefined) {
              username = userFound.name;
            }

            return (<TableRow key={index}
              what={expense.what}
              by={username}
            />)
            }
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
