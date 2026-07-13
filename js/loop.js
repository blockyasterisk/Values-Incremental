function producePrevious(generatorArray, diff) {
    for (let i = 1; i < generatorArray.length; i++) {
        let g = generatorArray[i];
        generatorArray[i - 1].amount += g.productionPerSecond * diff;

    }
}

function gameLoop(that) {
    const diff = (Date.now() - that.player.lastUpdate)/1000;
    that.player.progress += that.player.virtues[0].productionPerSecond * diff;
    producePrevious(that.player.virtues, diff);

    that.player.lastUpdate = Date.now();
}