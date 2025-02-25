const { convertirARomano } = require('./num_romanos');

test('Convertir 2 a romano', () => {
  expect(convertirARomano(2)).toBe('II');
});



