
// math.test.js
import { add, subtract, multiply, divide } from './math.js';

describe('Math Functions', () => {
  test('add(1, 2) should return 3', () => {
    expect(add(2, 1)).toBe(3);
  });

  test('subtract(5, 3) should return 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('multiply(4, 3) should return 12', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test('divide(6, 3) should return 2', () => {
    expect(divide(6, 3)).toBe(2);
  });

  test('divide(1, 0) should throw an error', () => {
    expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
  });
});
