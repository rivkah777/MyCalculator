class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculador = new Calculator();
    this.typeOfOperation = undefined;
    this.valorActual = '';
    this.valorAnterior = '';
    

  }

  remove() {
    this.valorActual = this.valorActual.toString().slice(0,-1);
    this.printValues();
  }

  removeAll() {
    this.valorActual = '';
    this.valorAnterior = '';
    this.typeOfOperation = undefined;
    this.printValues();
  }

  
  computar(type) {
    this.typeOfOperation !== 'equal' && this.calculate();
    this.typeOfOperation = type;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = '';
    this.printValues();
  }



  addNumber(number) {
    if(number === '.' && this.valorActual.includes('.')) return
    this.valorActual = this.valorActual.toString() + number.toString();
    this.printValues();
  }

  printValues() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = this.valorAnterior;
  }


  calculate() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if( isNaN(valorActual) || isNaN(valorAnterior) ) return 
    this.valorActual = this.calculador[this.typeOfOperation](valorAnterior, valorActual);
  }

}
