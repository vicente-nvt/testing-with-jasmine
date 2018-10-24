var Calculator = require("./calculator")();

describe("Calculator", () => {

    it("should sum two integers", () => {
        var sumExpected = 8;

        var sumCalculated = new Calculator().sum(3, 5);

        expect(sumExpected).toEqual(sumCalculated);
    });

    it("should subtract two integers", () => {
        var subtractionExpected = 10;

        var subtractionCalculated = new Calculator().subtract(13, 3);

        expect(subtractionExpected).toEqual(subtractionCalculated);
    });

    it("should divide two integers", () => {
        divisionExpected = 3;

        var divisionCalculated = new Calculator().divide(30, 10);

        expect(divisionExpected).toEqual(divisionCalculated);
    });

    it ("should not divide when de secondNumber is zero", () => {

        var act = () => { new Calculator().divide(10, 0) }

        expect(act).toThrow(new Error("There is no division by zero"))
    });

    it("should multiply two integers", () => {
        var multiplicationExpected = 24;

        var multiplicationCalculated = new Calculator().multiply(3, 8);

        expect(multiplicationExpected).toEqual(multiplicationCalculated);
    })
});