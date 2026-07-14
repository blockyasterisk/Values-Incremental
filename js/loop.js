function producePrevious(generatorArray, diff) {
    for (let i = 1; i < generatorArray.length; i++) {
        let g = generatorArray[i];
        generatorArray[i - 1].amount 
        = generatorArray[i - 1].amount.plus(g.productionPerSecond.times(diff));

    }
}

function gameLoop(that) {
    const speed = 1;
    const diff = (Date.now() - that.player.lastUpdate)/1000 * speed;
    that.player.progress =
    that.player.progress.plus(that.player.virtues[0].productionPerSecond.times(diff));
    producePrevious(that.player.virtues, diff);

    that.player.lastUpdate = Date.now();
}