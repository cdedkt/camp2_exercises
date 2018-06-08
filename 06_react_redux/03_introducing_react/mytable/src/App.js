import React, { Component } from 'react';
import './App.css';
import Cex from './Cex';

const cex1 = new Cex("mag1", "201801", 1000.60, 40.5, 10.10, 5.5);
const cex2 = new Cex("mag1", "201802", 2000.60, 60, 20.20, 5.5);
const cex3 = new Cex("mag1", "201803", 3000.60, 30, 20.20, 10.5);

const indicatorList = [
  {name: "turnover", visible: true, modified: true},
  {name: "marginRate", visible: true, modified: false},
  {name: "margin", visible: true, modified: false},
  {name: "feesPersonnal", visible: true, modified: false},
  {name: "feesMaterial", visible: true, modified: false},
  {name: "feesTotal", visible: true, modified: false},
  {name: "rbe", visible: true, modified: false}
]

console.log("cex1=", cex1);


class CellCex extends Component {
  constructor(props) {
    super(props);
    //console.log("cell cex=", props.cex, ", indicator", props.indicator);
    this.state = {
      value: props.cex[props.indicator.name],
    }
  }
  render() {
    return (
      <td className="cell-fix">{this.state.value}</td>
    );
  }
}


class IndicatorRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <th scope="row">{this.props.indicator.name}</th>
        {this.props.cexList.map(aCex =>
          <CellCex key={aCex.getKey(this.props.indicator.name)} cex={aCex} indicator={this.props.indicator}/>
        )}
      </tr>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cexList: [cex1, cex2, cex3],
      indicatorList: indicatorList,
    }
  }

  render() {
    return (

<div className="container-fluid">
  <table className="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">First</th>
    <th scope="col">Last</th>
    <th scope="col">Handle</th>
    <th scope="col">Last</th>
    <th scope="col">Handle</th>
  </tr>
</thead>
<tbody>
  {this.state.indicatorList.map(indicator =>
    <IndicatorRow key={indicator.name} indicator={indicator} cexList={this.state.cexList}/>)
  }
</tbody>
</table>

</div>

    );
  }
}

export default App;
