//Jasmine tests

describe("fizz buzz", function() {

  var fizzbuzz = FizzBuzz;

  it("checks fizz", function() {
    expect(fizzbuzz.checkFizz(3)).toEqual("Fizz");
    expect(fizzbuzz.checkFizz(4)).toBeUndefined();
  });

  it("checks buzz", function() {
    expect(fizzbuzz.checkBuzz(5)).toEqual("Buzz");
    expect(fizzbuzz.checkBuzz(4)).toBeUndefined;
  });

  it("checks fizz buzz", function() {
    expect(fizzbuzz.checkFizzBuzz(15)).toEqual("FizzBuzz");
    expect(fizzbuzz.checkFizzBuzz(14)).toBeUndefined();
  });

});