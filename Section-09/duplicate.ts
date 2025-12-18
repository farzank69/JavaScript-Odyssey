function duplicateArray<T>(arr: T[]): T[] {
    return arr.concat(arr);
}

// Example usage:
const numbers = [1, 2, 3];
const duplicatedNumbers = duplicateArray(numbers);
console.log(duplicatedNumbers); // Output: [1, 2, 3, 1, 2, 3]

const strings = ['a', 'b', 'c'];
const duplicatedStrings = duplicateArray(strings);
console.log(duplicatedStrings); // Output: ['a', 'b', 'c', 'a', 'b', 'c']

const mixed = [1, 'two', true];
const duplicatedMixed = duplicateArray(mixed);
console.log(duplicatedMixed); // Output: [1, 'two', true, 1, 'two', true]