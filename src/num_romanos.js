function convertirARomano(numero) {
    const valores = [
      { valor: 5, simbolo: 'V' },
      { valor: 4, simbolo: 'IV' }, // Añadimos el 4
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