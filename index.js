// Simple Node.js app - Traffic Hack
function add(a, b) {
  return a + b;
}

function greet(name) {
  return `Hello, ${name}! Welcome to Traffic Hack.`;
}

module.exports = { add, greet };

// Run if executed directly
if (require.main === module) {
  console.log(greet('World'));
  console.log('2 + 3 =', add(2, 3));
}
