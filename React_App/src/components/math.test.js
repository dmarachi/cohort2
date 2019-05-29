import math from "./math";

test('Test the math functions', () => {
    // console.log('Hello World from divid');
    expect(math.divid(2,2)).toBe(1);
});
test('Test the math functions', () => {
    // console.log('Hello World from add');
    expect(math.sum(2,2)).toBe(4);
});
test('Test the math functions', () => {
    // console.log('Hello World from multiply');
    expect(math.multiply(2,2)).toBe(4);
});
test('Test the math functions', () => {
    // console.log('Hello World from sub');
    expect(math.sub(2,2)).toBe(0);
});
