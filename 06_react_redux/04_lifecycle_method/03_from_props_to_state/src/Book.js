import React, { Component } from "react";

function getBookInformation(isbn) {
  console.log("getBookInformation");
  return fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}8&format=json&jscmd=data`)
    .then(response => {
      const res = response.json();
      console.log("res=", res);
      return res;
      });
}


class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
    }
  }

  componentDidMount() {
    console.log("Book componentDidMount");
    getBookInformation(this.props.isbn)
      .then(bookData => {
        this.setState({book: Object.values(bookData)[0]});
      })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Book componentDidUpdate");
    console.log("prevProps.isbn=", prevProps.isbn);
    console.log("this.props.isbn=", this.props.isbn);
    if (prevProps.isbn !== this.props.isbn) {
      console.log("Book componentDidUpdate RELOAD");
      getBookInformation(this.props.isbn)
        .then(bookData => {
          this.setState({book: Object.values(bookData)[0]});
        })
    }
  }

  render() {
    return (
      <div>
        {this.state.book
          ? (
            <div>
              <div>{this.state.book.title}</div>
              <img src={this.state.book.cover.medium} />
            </div>
          )
          : null
        }
      </div>
    )
  }
}

export default Book;
