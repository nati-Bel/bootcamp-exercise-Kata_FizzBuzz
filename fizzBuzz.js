class FizzBuzz {
  retornar_fizz_buzz(numero) {
    if (numero % 3 == 0 && numero % 5 == 0) {
      return "FizzBuzz";
    } else if (numero % 3 == 0) {
      return "Fizz";
    } else if (numero % 5 == 0) {
      return "Buzz";
    }
  }
};


module.exports = FizzBuzz