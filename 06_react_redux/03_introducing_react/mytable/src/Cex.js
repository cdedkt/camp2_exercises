class Cex {
  constructor(entity, period, turnover, marginRate, feesPersonnal, feesMaterial) {
    this.entity = entity;
    this.period = period;
    this.turnover = turnover;
    this.marginRate = marginRate;
    this.feesPersonnal = feesPersonnal;
    this.feesMaterial = feesMaterial;

    this.calculateRbe();
  };

  calculateRbe() {
    this.margin = this.turnover * this.marginRate / 100.0;
    this.feesTotal = this.feesPersonnal + this.feesMaterial;
    this.rbe = this.margin - this.feesTotal;
    return this;
  };

  getKey(indicator) {
    return this.entity + "/" + this.period + "/" + indicator;
  }
}

export default Cex;
