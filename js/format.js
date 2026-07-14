function format(amount, fixDP, expSF) {
    if (amount.abs().lessThanOrEqualTo(1000)) return amount.toFixed(fixDP);
    return amount.toExponential(expSF).replaceAll("+","");
}