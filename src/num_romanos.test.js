const { convertirARomano } = require('./num_romanos');
test('Convertir 5 a romano', () => {
    expect(convertirARomano(4)).toBe('V');
  });
