import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Cex from './Cex';

const indicatorList = [
    {name: "rbe", visible: true, modified: false, formula: "margin-feesTotal"},
  {name: "turnover", visible: true, modified: true},
  {name: "marginRate", visible: true, modified: false},
  {name: "margin", visible: true, modified: false, formula: "turnover*marginRate/100"},
  {name: "feesPersonnal", visible: true, modified: true},
  {name: "feesMaterial", visible: true, modified: false},
  {name: "feesTotal", visible: true, modified: false, formula: "feesPersonnal+feesMaterial*2.5-feesPersonnal/3.46"},

]

const formulaList = Cex.generateOrderedFormulaList(indicatorList);

const cexList = [];
for (let i=1; i<=52; i=i+3) {
  const period1 = "2018_" + i.toString();
  const period2 = "2018_" + (i+1).toString();
  const period3 = "2018_" + (i+2).toString();
  cexList.push(Cex.calculateCex(Cex.getCex("mag_1", period1, 1000.60, 40.5, 10.10, 5.5), formulaList));
  cexList.push(Cex.calculateCex(Cex.getCex("mag_1", period2, 2000.60, 60, 20.20, 5.5), formulaList));
  cexList.push(Cex.calculateCex(Cex.getCex("mag_1", period3, 3000.60, 30, 20.20, 10.5), formulaList));
}

ReactDOM.render(<App cexList={cexList} indicatorList={indicatorList} formulaList={formulaList}/>, document.getElementById('root'));
registerServiceWorker();
