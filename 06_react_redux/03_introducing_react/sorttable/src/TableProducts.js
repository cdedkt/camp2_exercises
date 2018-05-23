import React, { Component } from 'react';

import TableProductRow from './TableProductRow';
import _ from "underscore";

class TableProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorter: "title",
      desc: false
    };
  }

  getProducts() {
    const products = _.sortBy(this.props.products, this.state.sorter);
    return this.state.desc ? products.reverse() : products;
  }

  handleClick(newSorter) {
    this.setState({
        sorter: newSorter,
        desc: (newSorter === this.state.sorter) && !this.state.desc
    });
  }

  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" onClick={() => this.handleClick("decathlon_id")}>decathlon id</th>
              <th scope="col" onClick={() => this.handleClick("title")}>title</th>
              <th scope="col" onClick={() => this.handleClick("price")}>price</th>
            </tr>
          </thead>
          <tbody>
            {this.getProducts.map(aproduct => <TableProductRow product={aproduct} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableProducts;
