function convertirARomano(numero) {
    const valores = [
      { valor: 9, simbolo: 'IX' },
      { valor: 5, simbolo: 'V' },
      { valor: 4, simbolo: 'IV' },
      { valor: 1, simbolo: 'I' },
    ];
  
    let resultado = '';
    for (const { valor, simbolo } of valores) {
      while (numero >= valor) {
        resultado += simbolo;
        numero -= valor;
      }
    }
    return resultado;
  }
  
  module.exports = { convertirARomano };