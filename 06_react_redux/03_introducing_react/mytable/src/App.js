import React, { Component } from 'react';
import './App.css';
import Cex from './Cex';

class CellCex extends Component {
  constructor(props) {
    super(props);
    //console.log("cell cex=", props.cex, ", indicator", props.indicator);
    this.state = {
      value: props.value,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({ value: props.value })
  }

  checkFormat(value) {
    //const re = /(\b[a-z](?!\s))/g;
    //return value.replace(re, function(x){return x.toUpperCase();});
    return value;
  }

  handleChange(event) {
    console.log("handleChange: event.target.id=",event.target.id);
    this.setState({value: this.checkFormat(event.target.value)});
  }

  handleFocus(event) {
    console.log("handleFocus: event.target.id=",event.target.id);
    this.setState({valueOnFocus: this.state.value});
  }

  handleBlur(event) {
    console.log("handleBlur: event.target.id=",event.target.id);
    if (this.state.valueOnFocus !== this.state.value) {
      console.log("handleBlur: value is modified");
      this.props.changeCexValue(event.target.id, this.state.value);
    } else {
      console.log("handleBlur: value is NOT modified");
    }
  }

  render() {
    return (
      this.props.indicator.modified
        ? <td className="cell-cex cell-cex-modified">
            <input
              id={Cex.generateKey(this.props.entity, this.props.period, this.props.indicator.name)}
              type="text"
              value={this.state.value}
              onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
          </td>
        : <td className="cell-cex">
            <span id={Cex.generateKey(this.props.entity, this.props.period, this.props.indicator.name)}>
              {this.state.value}
            </span>
          </td>
    );
  }
}


class IndicatorRow extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.indicator.name}</th>
        {this.props.cexList.map(currentCex =>
          <CellCex
            key={Cex.generateKey(currentCex.entity, currentCex.period, this.props.indicator.name)}
            entity={currentCex.entity}
            period={currentCex.period}
            value={currentCex[this.props.indicator.name]}
            indicator={this.props.indicator}
            changeCexValue={this.props.changeCexValue}/>
        )}
      </tr>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cexList: props.cexList,
    };
    this.changeCexValue = this.changeCexValue.bind(this);
  }

  changeCexValue(key, value) {
    const newCexList = Cex.modifyCexValue(this.state.cexList, key, value);

    this.setState({
      cexList: [...newCexList],
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              {this.state.cexList.map(cex =>
                <th scope="col"><div>{cex.entity}</div><div>{cex.period}</div></th>)
              }
            </tr>
          </thead>
          <tbody>
            {this.props.indicatorList.map(indicator =>
              <IndicatorRow key={indicator.name} indicator={indicator} cexList={this.state.cexList} changeCexValue={this.changeCexValue}/>)
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
