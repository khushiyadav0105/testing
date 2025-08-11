import { describe, it, expect } from 'vitest';

function sum(a: number, b: number) {
  return a + b;
}

describe('sum function', () => {
  it('adds numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
