const { convertirARomano } = require('./num_romanos');
test('Convertir 4 a romano', () => {
    expect(convertirARomano(4)).toBe('IV');
  });
