function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b,c) {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
}

// Test runs
console.log("Add:", add(5, 3));
console.log("Sub:", sub(5, 3));
console.log("Mul:", mul(5, 3));
console.log("Div:", div(5, 3));
