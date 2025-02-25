const { convertirARomano } = require('./num_romanos');
test('Convertir 3 a romano', () => {
    expect(convertirARomano(3)).toBe('III');
  });
