import React, { Component } from 'react';

class TableProductRow extends Component {
  render() {
    return (
      <tr>
        <td scope="row">{this.props.product.decathlon_id}</td>
        <td>{this.props.product.title}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default TableProductRow;
