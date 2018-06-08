import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Cex from './Cex';

const cexList = [];
for (let i=1; i<=52; i=i+3) {
  const period1 = "2018_" + i.toString();
  const period2 = "2018_" + (i+1).toString();
  const period3 = "2018_" + (i+2).toString();
  cexList.push(Cex.getCex("mag_1", period1, 1000.60, 40.5, 10.10, 5.5));
  cexList.push(Cex.getCex("mag_1", period2, 2000.60, 60, 20.20, 5.5));
  cexList.push(Cex.getCex("mag_1", period3, 3000.60, 30, 20.20, 10.5));
}

const indicatorList = [
  {name: "turnover", visible: true, modified: true},
  {name: "marginRate", visible: true, modified: false},
  {name: "margin", visible: true, modified: false},
  {name: "feesPersonnal", visible: true, modified: true},
  {name: "feesMaterial", visible: true, modified: true},
  {name: "feesTotal", visible: true, modified: false},
  {name: "rbe", visible: true, modified: false}
]


ReactDOM.render(<App cexList={cexList} indicatorList={indicatorList} />, document.getElementById('root'));
registerServiceWorker();
