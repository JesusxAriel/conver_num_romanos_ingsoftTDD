const { convertirARomano } = require('./num_romanos');
test('Convertir 10 a romano', () => {
    expect(convertirARomano(400)).toBe('CD');
  });
