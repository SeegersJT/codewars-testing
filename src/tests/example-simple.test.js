import { expect } from 'chai';

import addNumbers from '../challenges/example-descriptive.js';

describe('Example - Add Numbers Function Tests', () => {
  it('test 1', () => {expect(addNumbers(5, 7)).to.equal(12);});
  it('test 2', () => {expect(addNumbers(5, -3)).to.equal(2);});
  it('test 3', () => {expect(addNumbers(-4, -6)).to.equal(-10);});
  it('test 4', () => {expect(addNumbers(1.5, 2.5)).to.equal(4);});
  it('test 5', () => {
    expect(0, 5).to.equal(5);
    expect(5, 0).to.equal(5);
  });
});
