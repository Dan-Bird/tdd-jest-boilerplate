const each = require('jest-each').default;

const Canary = require('./index.js');

describe('Canary Test', () => {
  each([
    [Canary(), true],
    [Canary(), true],
  ]).it('should return true if set up correctly', (test, result) => {
    expect(test).toBe(result);
  });
});
