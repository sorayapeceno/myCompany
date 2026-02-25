const { sumar, restar, multiplicar } = require('./calculadora');

test('sumar 2 + 3 = 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('restar 10 - 4 = 6', () => {
  expect(restar(10, 4)).toBe(6);
});

test('multiplicar 3 * 4 = 12', () => {
  expect(multiplicar(3, 4)).toBe(12);
});
