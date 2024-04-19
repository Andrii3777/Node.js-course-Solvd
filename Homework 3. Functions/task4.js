// Task 4: Recursion and Tail Call Optimization
module.exports = { calculateFactorial, power, powerTCO };

function calculateFactorial(n, curRes = 1) {
    if (n === 0) {
        return curRes;
    } else {
        return calculateFactorial(n - 1, n * curRes);
    }
}

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }

    if (exponent > 0) {
        return base * power(base, exponent - 1);
    } else {
        return 1 / (base * power(base, exponent + 1));
    }
}

// power() function with Tail Call Optimization (TCO)
function powerTCO(base, exponent, curRes = 1) {
    if (exponent === 0) {
        return curRes;
    }

    if (exponent > 0) {
        return powerTCO(base, exponent - 1, curRes * base);
    } else {
        return powerTCO(base, exponent + 1, curRes / base);
    }
}