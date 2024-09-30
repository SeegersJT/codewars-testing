import { expect } from 'chai'; // Importing Chai for assertions
import addNumbers from '../challenges/example-descriptive.js'; // Adjust the path as necessary

/**
 * Test suite for the addNumbers function.
 */
describe('Example - Add Numbers Function Tests', () => {

  /**
   * Test case for adding positive numbers.
   */
  it('should return the sum of two positive numbers', () => {
    const result = addNumbers(5, 7); // Call the function with sample inputs
    const expected = 12; // Define the expected output
    expect(result).to.equal(expected); // Assert that the result matches the expected output
  });

  /**
   * Test case for adding a positive and a negative number.
   */
  it('should return the correct sum when one number is negative', () => {
    const result = addNumbers(5, -3); // Call the function with a positive and a negative number
    const expected = 2; // Define the expected output
    expect(result).to.equal(expected); // Assert that the result matches the expected output
  });

  /**
   * Test case for adding two negative numbers.
   */
  it('should return the correct sum of two negative numbers', () => {
    const result = addNumbers(-4, -6); // Call the function with two negative numbers
    const expected = -10; // Define the expected output
    expect(result).to.equal(expected); // Assert that the result matches the expected output
  });

  /**
   * Test case for adding zero.
   */
  it('should return the same number when adding zero', () => {
    const result1 = addNumbers(0, 5); // Adding zero to a positive number
    const result2 = addNumbers(5, 0); // Adding zero to another positive number
    expect(result1).to.equal(5); // Assert that adding zero returns the same number
    expect(result2).to.equal(5); // Assert that adding zero returns the same number
  });

  /**
   * Test case for adding non-integer numbers.
   */
  it('should return the correct sum for non-integer numbers', () => {
    const result = addNumbers(1.5, 2.5); // Call the function with decimal numbers
    const expected = 4; // Define the expected output
    expect(result).to.equal(expected); // Assert that the result matches the expected output
  });
});
