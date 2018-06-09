import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppV2';
import registerServiceWorker from './registerServiceWorker';

import Cex from './Cex';

const indicatorList = [
  {name: "rbe", visible: true, changeable: false, formula: "margin-feesTotal"},
  {name: "turnover", visible: true, changeable: true},
  {name: "marginRate", visible: true, changeable: false},
  {name: "margin", visible: true, changeable: false, formula: "turnover*marginRate/100"},
  {name: "feesPersonnal", visible: true, changeable: true},
  {name: "feesMaterial", visible: true, changeable: false},
  {name: "feesTotal", visible: true, changeable: false, formula: "feesPersonnal+feesMaterial*2"},
  {name: "rbe ", visible: true, changeable: false, formula: "margin-feesTotal"},

]

const formulaList = Cex.generateOrderedFormulaList(indicatorList);

const cexList = [];
for (let i=1; i<=52; i=i+3) {
  const period1 = "2018_" + i.toString();
  const period2 = "2018_" + (i+1).toString();
  const period3 = "2018_" + (i+2).toString();
  cexList.push(Cex.calculateCex(Cex.getCex("mag_1", period1, 1000.60, 40.5, 10.10, 5.5), formulaList));
  cexList.push(Cex.calculateCex(Cex.getCex("mag_1", period2, 2000.60, 60, 20.20, 5.8), formulaList));
  cexList.push(Cex.calculateCex(Cex.getCex("mag_1", period3, 3000.60, 30, 20.20, 10.5), formulaList));
}

ReactDOM.render(<App cexList={cexList} indicatorList={indicatorList} formulaList={formulaList}/>, document.getElementById('root'));
registerServiceWorker();
