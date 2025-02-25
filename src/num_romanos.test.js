const { convertirARomano } = require('./num_romanos');

test('Convertir 1 a romano', () => {
  expect(convertirARomano(1)).toBe('I');
});