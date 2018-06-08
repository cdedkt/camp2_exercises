
function getCex(entity, period, turnover, marginRate, feesPersonnal, feesMaterial) {
  const cex = {
    entity: entity,
    period: period,
    turnover: turnover,
    marginRate: marginRate,
    feesPersonnal: feesPersonnal,
    feesMaterial: feesMaterial,
  }

  return calculateRbe(cex);
};

function calculateRbe(cex) {
  cex.margin = cex.turnover * cex.marginRate / 100.0;
  cex.feesTotal = cex.feesPersonnal + cex.feesMaterial;
  cex.rbe = cex.margin - cex.feesTotal;
  return cex;
};

function generateKey(entity, period, indicator) {
  return entity + "/" + period + "/" + indicator;
}

function modifyCexValue(cexList, keyCexToModify, value) {
  const [entity, period, indicator] = keyCexToModify.split("/");
  console.log("changeCexValue: entity=", entity, ", period=", period, ", indicator=", indicator, ", value=", value);

  const newCexList = cexList.map(cex => {
    if (cex.entity === entity && cex.period === period) {
      cex[indicator] = parseFloat(value);
      return calculateRbe(cex);
    } else {
      return cex;
    }
  });
  return newCexList;
}

module.exports = {
  getCex: getCex,
  calculateRbe: calculateRbe,
  generateKey: generateKey,
  modifyCexValue: modifyCexValue,
}
