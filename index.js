const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const buttonsNumbers = document.querySelectorAll('.number');
const buttonsOperators = document.querySelectorAll('.operator');

const display = new Display(displayValorAnterior, displayValorActual);

buttonsNumbers.forEach(button => {
  button.addEventListener('click', () => display.addNumber(button.innerHTML));
});


buttonsOperators.forEach(button => {
  button.addEventListener('click', () => display.computar(button.value))
});





// const calculator = new Calculator();
    // just testing calculations are working
// console.log(calculator.multiply(3,3));

