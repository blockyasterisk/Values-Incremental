function format(amount, dp) {
    let power = Math.floor(Math.log10(Math.abs(amount)));
    let mantissa = amount / Math.pow(10, power);
    if (power < 3 || amount === 0) return amount.toFixed(dp);
    return mantissa.toFixed(3) + "e" + power;
}