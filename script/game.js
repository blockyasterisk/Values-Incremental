const player = {
    progress: 10,
    producers: {
        amount: [0, 0, 0, 0],
        purchased: [0, 0, 0, 0],
        mult: [1, 1, 1, 1]
    }
};

const game = {
    producers: {
        costs: [10, 1e6, 1e15, 1e27],
        costMultipliers: [1.5625, 2.25, 3.0625, 4],
        scaleStart: [15, 15, 15, 15],
        scaleFactor: 5
    }
};

const flexRound = (num, whole) => {
    significantDigits = 5;
    if (num === 0) {
        return 0;
    } else if (Math.abs(num) >= Math.pow(10, significantDigits)) {
        return num.toExponential(significantDigits - 1).replaceAll('+', '');
    } else {
        return whole ? Math.floor(num) : num.toPrecision(significantDigits).replaceAll('+', '');
    }
}

const buyProducer = (index) => {
    const producerIndex = index - 1;

    if (player.progress >= game.producers.costs[producerIndex]) {
        player.progress -= game.producers.costs[producerIndex];

        if (player.producers.purchased[producerIndex] === 0) {
            player.producers.amount[producerIndex] = 1;
            player.producers.purchased[producerIndex] = 1;
        } else {
            player.producers.purchased[producerIndex] += 1;
            player.producers.mult[producerIndex] = Math.pow(2, player.producers.purchased[producerIndex] - 1);
        }

        game.producers.costs[producerIndex] *=
            game.producers.costMultipliers[producerIndex] *
            (player.producers.purchased[producerIndex] >= game.producers.scaleStart[producerIndex]
                ? game.producers.scaleFactor : 1);
    }
}

const update = () => {
    player.progress += player.producers.amount[0] * player.producers.mult[0] * 0.05;
    player.producers.amount[0] += player.producers.amount[1] * player.producers.mult[1] * 0.05;
    player.producers.amount[1] += player.producers.amount[2] * player.producers.mult[2] * 0.05;
    player.producers.amount[2] += player.producers.amount[3] * player.producers.mult[3] * 0.05;

    $("#progress").html(flexRound(player.progress));

    $("#prod1-amount").html(flexRound(player.producers.amount[0], true));
    $("#prod1-purchased").html(flexRound(player.producers.purchased[0], true));
    $("#prod1-production").html(flexRound(player.producers.amount[0] * player.producers.mult[0], false));
    $("#prod1-buy").html(`Cost: ${flexRound(game.producers.costs[0], false)} progress`);
    if (player.progress < game.producers.costs[0]) {
        $("#prod1-buy").prop("disabled", true);
        $("#prod1-buy").css("backgroundColor", "black");
        $("#prod1-buy").css("color", "white");
    } else {
        $("#prod1-buy").prop("disabled", false);
        $("#prod1-buy").css("backgroundColor", "white");
        $("#prod1-buy").css("color", "black");
    }

    $("#prod2-amount").html(flexRound(player.producers.amount[1], true));
    $("#prod2-purchased").html(flexRound(player.producers.purchased[1], true));
    $("#prod2-production").html(flexRound(player.producers.amount[1] * player.producers.mult[1], false));
    $("#prod2-buy").html(`Cost: ${flexRound(game.producers.costs[1], false)} progress`);
    if (player.progress < game.producers.costs[1]) {
        $("#prod2-buy").prop("disabled", true);
        $("#prod2-buy").css("backgroundColor", "black");
        $("#prod2-buy").css("color", "white");
    } else {
        $("#prod2-buy").prop("disabled", false);
        $("#prod2-buy").css("backgroundColor", "white");
        $("#prod2-buy").css("color", "black");
    }

    $("#prod3-amount").html(flexRound(player.producers.amount[2], true));
    $("#prod3-purchased").html(flexRound(player.producers.purchased[2], true));
    $("#prod3-production").html(flexRound(player.producers.amount[2] * player.producers.mult[2], false));
    $("#prod3-buy").html(`Cost: ${flexRound(game.producers.costs[2], false)} progress`);
    if (player.progress < game.producers.costs[2]) {
        $("#prod3-buy").prop("disabled", true);
        $("#prod3-buy").css("backgroundColor", "black");
        $("#prod3-buy").css("color", "white");
    } else {
        $("#prod3-buy").prop("disabled", false);
        $("#prod3-buy").css("backgroundColor", "white");
        $("#prod3-buy").css("color", "black");
    }

    $("#prod4-amount").html(flexRound(player.producers.amount[3], true));
    $("#prod4-purchased").html(flexRound(player.producers.purchased[3], true));
    $("#prod4-production").html(flexRound(player.producers.amount[3] * player.producers.mult[3], false));
    $("#prod4-buy").html(`Cost: ${flexRound(game.producers.costs[3], false)} progress`);
    if (player.progress < game.producers.costs[3]) {
        $("#prod4-buy").prop("disabled", true);
        $("#prod4-buy").css("backgroundColor", "black");
        $("#prod4-buy").css("color", "white");
    } else {
        $("#prod4-buy").prop("disabled", false);
        $("#prod4-buy").css("backgroundColor", "white");
        $("#prod4-buy").css("color", "black");
    }
}

setInterval(update, 50);

$(document).on("keydown", function(event) {
    if (event.key === "1") {
        buyProducer(1);
    } else if (event.key === "2") {
        buyProducer(2);
    } else if (event.key === "3") {
        buyProducer(3);
    } else if (event.key === "4") {
        buyProducer(4);
    } else if (event.key === "m") {
        for (let i = 1; i <= 4; i++) {
            buyProducer(i);
        }
    }
});

