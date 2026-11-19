// Test file for index.js
const { add, greet } = require('./index');

// Simple test runner (no extra dependencies needed)
let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    console.log(`  ✅ PASS: ${description}`);
    passed++;
  } catch (err) {
    console.log(`  ❌ FAIL: ${description}`);
    console.log(`     ${err.message}`);
    failed++;
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
      }
    }
  };
}

console.log('\nRunning tests...\n');

test('add(2, 3) should return 5', () => {
  expect(add(2, 3)).toBe(99); // intentionally broken
});

test('add(0, 0) should return 0', () => {
  expect(add(0, 0)).toBe(0);
});

test('add(-1, 1) should return 0', () => {
  expect(add(-1, 1)).toBe(0);
});

test('greet should return a greeting string', () => {
  expect(greet('World')).toBe('Hello, World! Welcome to Traffic Hack.');
});

console.log(`\nResults: ${passed} passed, ${failed} failed\n`);

if (failed > 0) {
  process.exit(1);
}
