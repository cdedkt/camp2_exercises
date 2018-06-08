
function getCex(entity, period, turnover, marginRate, feesPersonnal, feesMaterial) {
  const cex = {
    entity: entity,
    period: period,
    turnover: turnover,
    marginRate: marginRate,
    feesPersonnal: feesPersonnal,
    feesMaterial: feesMaterial,
  }
  return cex;
};

function calculateCex(cex, formulaList) {
  formulaList.forEach(currentformula => {
    cex[currentformula.name] = eval(currentformula.formula);
  });
  return cex;
};

function generateKey(entity, period, indicator) {
  return entity + "/" + period + "/" + indicator;
}

function modifyCexValue(cexList, keyCexToModify, value, formulaList) {
  const [entity, period, indicator] = keyCexToModify.split("/");
  //console.log("changeCexValue: entity=", entity, ", period=", period, ", indicator=", indicator, ", value=", value);

  const newCexList = cexList.map(cex => {
    if (cex.entity === entity && cex.period === period) {
      cex[indicator] = parseFloat(value);
      return calculateCex(cex, formulaList);
    } else {
      return cex;
    }
  });
  return newCexList;
}

function dependanceIndicator(indicator) {
  var regexDecoupe = /\s?([///*+-])\s?/;
  var resSplit = indicator.formula.split(regexDecoupe);
  //console.log("decoupe [",indicator.formula, "] = ", resSplit);
  const subIndicatorList = [];
  let formulaWithCex = "";
  resSplit.forEach(element => {
    if (isNaN(element) && (element !== "+") && (element !== "-") && (element !== "*") && (element !== "/")) {
      formulaWithCex += "cex.";
      subIndicatorList.push(element);
    }
    formulaWithCex += element;
  });
  return {formulaWithCex, subIndicatorList};
}

function generateOrderedFormulaList(_indicatorList) {
  const orderedFormulaList = [];
  const indicatorList = _indicatorList.slice(0).filter(element => element.formula);
  //console.log("generateOrderedFormulaList: indicatorList=", indicatorList);
  let nbIteration = 0;
  while (indicatorList.length > 0 && nbIteration < 100) {
    nbIteration++;
    const currentIndicator = indicatorList.shift();
    if (currentIndicator.formula) {
      const dependancedescription = dependanceIndicator(currentIndicator);
      //console.log("generateOrderedFormulaList: dependancedescription=", currentIndicator.name, dependancedescription);
      let hasDependance = false;
      dependancedescription.subIndicatorList.forEach(subIndicator => {
        if (indicatorList.findIndex(indicator => indicator.name === subIndicator) > 0) {
          //console.log("hasDependance: ", currentIndicator.name, dependancedescription.formulaWithCex);
          hasDependance = true;
        }
      });
      if (!hasDependance) {
        orderedFormulaList.push({name: currentIndicator.name, formula: dependancedescription.formulaWithCex})
      } else {
        indicatorList.push(currentIndicator);
      }
    } 
  }
  if (nbIteration >= 100) {
    console.log("BOUCLE BOUCLE BOUCLE");
    return;
  } else {
    return orderedFormulaList;
  }
}

module.exports = {
  getCex: getCex,
  calculateCex: calculateCex,
  generateKey: generateKey,
  modifyCexValue: modifyCexValue,
  generateOrderedFormulaList: generateOrderedFormulaList,
}
