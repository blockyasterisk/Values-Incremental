class Generator {
    constructor(props = {}) {
        this._name = props.name || "";
        this._cost = props.cost || 0;
        this._costMult = props.costMult || 1;
        this._scaleStart = props.scaleStart || 0;
        this._scaleFactor = props.scaleFactor || 1;
        this._multiplier = props.multiplier || 1;
        this._amount = props.amount || 0;
        this._bought = props.bought || 0;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    get cost() {
        return this._cost;
    }
    set cost(value) {
        this._cost = value;
    }

    get costMult() {
        return this._costMult;
    }
    set costMult(value) {
        this._costMult = value;
    }

    get scaleStart() {
        return this._scaleStart;
    }
    set scaleStart(value) {
        this._scaleStart = value;
    }

    get scaleFactor() {
        return this._scaleFactor;
    }
    set scaleFactor(value) {
        this._scaleFactor = value;
    }

    get multiplier() {
        return this._multiplier;
    }
    set multiplier(value) {
        this._multiplier = value;
    }

    get amount() {
        return this._amount;
    }
    set amount(value) {
        this._amount = value;
    }

    get bought() {
        return this._bought;
    }
    set bought(value) {
        this._bought = value;
    }

    canBuy(progress) {
        return this.cost <= progress;
    }

    buy(player = window.player) {
        if (!this.canBuy(player.progress)) {
            return false;
        }

        player.progress -= this.cost;

        if (this.bought === 0) {
            this.amount = 1;
            this.bought = 1;
        } else {
            this.bought += 1;
            this.multiplier = Math.pow(2, this.bought - 1);
        }

        this.cost *= this.costMult * (this.bought >= this.scaleStart ? this.scaleFactor : 1);
        return true;
    }

    get productionPerSecond() {
        return this.amount * this.multiplier;
    }
}