function fibonacci(num) {
// your code here
	if (num === 0) {
    return 0;
  } else if (num === 1 || num === 2) {
    return 1;
  } else if (num > 50) {
    return "Number too large. Please provide a number between 0 and 50.";
  }

  let a = 0;
  let b = 1;
  let result = 0;

  for (let i = 2; i <= num; i++) {
    result = a + b;
    a = b;
    b = result;
  }

  return result;
}

module.exports = fibonacci;
