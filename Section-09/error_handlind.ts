function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error: any) {
  console.error('An error occurred:', error.message);
}

// Custom Error Class
class ValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message);
    this.name = 'ValidationError';
    // Restore prototype chain
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

class DatabaseError extends Error {
  constructor(message: string, public code: number) {
    super(message);
    this.name = 'DatabaseError';
    Object.setPrototypeOf(this, DatabaseError.prototype);
  }
}

// Usage
function validateUser(user: any) {
  if (!user.name) {
    throw new ValidationError('Name is required', 'name');
  }
  if (!user.email.includes('@')) {
    throw new ValidationError('Invalid email format', 'email');
  }
}

// Type guards 
function isErrorWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record"">).message === 'string'
  );
}

function isValidationError(error: unknown): error is ValidationError {
  return error instanceof ValidationError;
}

// Usage in catch block
try {
  validateUser({});
} catch (error: unknown) {
  if (isValidationError(error)) {
    console.error(`Validation error in ${error.field}: ${error.message}`);
  } else if (isErrorWithMessage(error)) {
    console.error('An error occurred:', error.message);
  } else {
    console.error('An unknown error occurred');
  }
}