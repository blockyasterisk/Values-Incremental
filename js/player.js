var player = {
    progress: new Decimal(10),
    virtues: [],
    lastUpdate: Date.now()
};

player.virtues.push(new Generator({
    name: "Purpose",
    cost: new Decimal(10),
    costMult: new Decimal(1.75),
    scaleStart: new Decimal(15),
    scaleFactor: new Decimal(10),
    multiplier: new Decimal(1),
    amount: new Decimal(0),
    bought: new Decimal(0)
}));
player.virtues.push(new Generator({
    name: "Perseverance",
    cost: new Decimal(1e6),
    costMult: new Decimal(3),
    scaleStart: new Decimal(15),
    scaleFactor: new Decimal(10),
    multiplier: new Decimal(1),
    amount: new Decimal(0),
    bought: new Decimal(0)
}));
player.virtues.push(new Generator({
    name: "Prudence",
    cost: new Decimal(1e14),
    costMult: new Decimal(4.25),
    scaleStart: new Decimal(15),
    scaleFactor: new Decimal(10),
    multiplier: new Decimal(1),
    amount: new Decimal(0),
    bought: new Decimal(0)
}));
player.virtues.push(new Generator({
    name: "Patience",
    cost: new Decimal(1e25),
    costMult: new Decimal(5.5),
    scaleStart: new Decimal(15),
    scaleFactor: new Decimal(10),
    multiplier: new Decimal(1),
    amount: new Decimal(0),
    bought: new Decimal(0)
}));