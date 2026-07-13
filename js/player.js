var player = {
    progress: 10,
    virtues: [],
    lastUpdate: Date.now()
};

player.virtues.push(new Generator({
    name: "Purpose",
    cost: 10,
    costMult: 1.75,
    scaleStart: 15,
    scaleFactor: 10,
    multiplier: 1,
    amount: 0,
    bought: 0
}));
player.virtues.push(new Generator({
    name: "Perseverance",
    cost: 1e6,
    costMult: 3,
    scaleStart: 15,
    scaleFactor: 10,
    multiplier: 1,
    amount: 0,
    bought: 0
}));
player.virtues.push(new Generator({
    name: "Prudence",
    cost: 1e14,
    costMult: 4.25,
    scaleStart: 15,
    scaleFactor: 10,
    multiplier: 1,
    amount: 0,
    bought: 0
}));
player.virtues.push(new Generator({
    name: "Patience",
    cost: 1e25,
    costMult: 5.5,
    scaleStart: 15,
    scaleFactor: 10,
    multiplier: 1,
    amount: 0,
    bought: 0
}));