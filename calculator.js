class Calculator {

    sum(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    subtract(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }

    divide(firstNumber, secondNumber) {
        if (secondNumber === 0)
            throw new Error("There is no division by zero");

        return firstNumber / secondNumber;
    }

    multiply(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }
}

module.exports = () => {
    return Calculator;
}
