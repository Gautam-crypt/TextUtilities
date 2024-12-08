import { toUpperCase, toLowerCase } from './utils';

test('converts text to uppercase', () => {
  const input = 'hello world';
  const output = toUpperCase(input);
  expect(output).toBe('HELLO WORLD');
});

test('converts text to lowercase', () => {
  const input = 'Hello World';
  const output = toLowerCase(input);
  expect(output).toBe('hello world');
});
