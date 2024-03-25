import {describe, expect, test} from '@jest/globals';
import { merge } from './merge';

describe('merge function', () => {
    test('should merge three sorted collections', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [6, 4, 2];
        const collection3 = [7, 8, 9];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(merge(collection1, collection2, collection3)).toEqual(expected);
    });

    test('should handle empty collections', () => {
        const collection1: number[] = [];
        const collection2 = [6, 4, 2];
        const collection3: number[] = [];
        const expected = [2, 4, 6];
        expect(merge(collection1, collection2, collection3)).toEqual(expected);
    });

    test('should handle collections of different lengths', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [6, 4, 2, 0];
        const collection3 = [7, 8, 9];
        const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(merge(collection1, collection2, collection3)).toEqual(expected);
    });
});
