/**
 * @jest-environment jsdom
 */

const {calculateBMI} = require('./main');

test.each([[100, 2, 25], [20, 2, 5], [20, 5, 0.8]])(
    '%i / %i^2 equals %i', (a, b, expected) =>{
        expect(calculateBMI(a, b)).toBe(expected);
    },
);