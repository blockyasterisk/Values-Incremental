class Generator {
    constructor(props = {}) {
        this._name = props.name;
        this._cost = props.cost;
        this._costMult = props.costMult;
        this._scaleStart = props.scaleStart;
        this._scaleFactor = props.scaleFactor ;
        this._multiplier = props.multiplier;
        this._amount = props.amount;
        this._bought = props.bought;
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
        this._cost = new Decimal(value);
    }

    get costMult() {
        return this._costMult;
    }
    set costMult(value) {
        this._costMult = new Decimal(value);
    }

    get scaleStart() {
        return this._scaleStart;
    }
    set scaleStart(value) {
        this._scaleStart = new Decimal(value);
    }

    get scaleFactor() {
        return this._scaleFactor;
    }
    set scaleFactor(value) {
        this._scaleFactor = new Decimal(value);
    }

    get multiplier() {
        return this._multiplier;
    }
    set multiplier(value) {
        this._multiplier = new Decimal(value);
    }

    get amount() {
        return this._amount;
    }
    set amount(value) {
        this._amount = new Decimal(value);
    }

    get bought() {
        return this._bought;
    }
    set bought(value) {
        this._bought = new Decimal(value);
    }

    canBuy(progress) {
        return this.cost.lessThanOrEqualTo(progress);
    }

    buy(player = window.player) {
        if (!this.canBuy(player.progress)) {
            return false;
        }
        
        player.progress = player.progress.minus(this.cost);

        if (this.bought.equals(0)) {
            this.amount = new Decimal(1);
            this.bought = new Decimal(1);
            this.multiplier = new Decimal(1);
        } else {
            this.bought = this.bought.plus(1);
            this.multiplier = Decimal.pow(2, this.bought.minus(1));
        }

        const scaleMult = this.bought.greaterThanOrEqualTo(this.scaleStart) ? this.scaleFactor : new Decimal(1);
        this.cost = this.cost.times(this.costMult).times(scaleMult);
        return true;
    }

    get productionPerSecond() {
        return this.amount.times(this.multiplier);
    }
}