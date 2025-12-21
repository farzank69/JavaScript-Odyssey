// Best Practices followed in TypeScript
// Bad: Redundant type annotation
const first_name: string = 'John';

// Good: Let TypeScript infer the type
const f_name = 'John';

// Bad: Redundant return type
function add(a: number, b: number): number {
  return a + b;
}

// Good: Let TypeScript infer return type
function addtwo(a: number, b: number) {
  return a + b;
}

// Bad: Using 'any' type
let data: any = 'Hello World';

// Good: Use specific types
let message: string = 'Hello World';

// Bad: Using non-null assertion operator unnecessarily
function getLength(str?: string) {
  return str!.length;
}

// Good: Handle undefined properly
function getLengthSafe(str?: string) {
  return str ? str.length : 0;
}