import { it, expect, describe } from 'vitest';
import * as calc from '../utils/calUtil.js';

describe('Add operation', () => {
    it('should add numbers correctly', () => {
        // Arrange
        const a = 5;
        const b = 3;
        const expected = 8;

        // Act
        const actual = calc.add(a, b);

        // Assert
        expect(actual).toBe(expected);
    });

    it('should add negative numbers correctly', () => {
        expect(calc.add(-5, -3)).toBe(-8);
    });

    it('should add zero correctly', () => {
        expect(calc.add(5, 0)).toBe(5);
    });
});

describe('Subtract operation', () => {
    it('should subtract numbers correctly', () => {
        expect(calc.subtract(5, 3)).toBe(2);
    });
});

describe('Multiply operation', () => {
    it('should multiply numbers correctly', () => {
        expect(calc.multiply(5, 3)).toBe(15);
    });
});

describe('Divide operation', () => {
    it('should divide numbers correctly', () => {
        expect(calc.divide(6, 3)).toBe(2);
    });

    it('should throw an error when dividing by zero', () => {
        expect(() => calc.divide(5, 0)).toThrow();
    });
});
