export function calculateRuns(x, y) {
  return internalCalculator(x + y);
}

export function calculateAverage(x, y) {
  return x + y / 2;
}

export const person = 'Harsh';

function internalCalculator(x, y) {
  return x * y + y;
}
