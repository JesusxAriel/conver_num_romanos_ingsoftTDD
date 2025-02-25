const { convertirARomano } = require('./num_romanos');
test('Convertir 5 a romano', () => {
    expect(convertirARomano(5)).toBe('V');
  });
