const { convertirARomano } = require('./num_romanos');
test('Convertir 9 a romano', () => {
    expect(convertirARomano(9)).toBe('IX');
  });
