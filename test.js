function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mod(a, b) {
  return a % b;
}

console.log("Mod:", mod(10, 3));


function div(a, b,c) {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
}

// Test runs
console.log("Add:", add(5, 3));
console.log("Sub:", sub(5, 3));
console.log("Mul:", mul(5, 3));
console.log("Div:", div(5, 3));
