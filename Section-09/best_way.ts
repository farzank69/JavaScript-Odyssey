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