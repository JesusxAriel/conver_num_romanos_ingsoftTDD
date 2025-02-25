const { convertirARomano } = require('./num_romanos');
test('Convertir 6 a romano', () => {
    expect(convertirARomano(6)).toBe('VI');
  });
