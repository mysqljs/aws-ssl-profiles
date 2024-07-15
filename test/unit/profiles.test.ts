import { test, strict } from 'poku';
import profiles from '../../src/index.js';

test('Testing Profiles Final Bundle Structure', () => {
  strict.strictEqual(typeof profiles, 'object', 'Ensure profiles type');
  strict(Array.isArray(profiles.ca), 'Ensure profiles CA type');
  strict(
    profiles.ca.every((item) => typeof item === 'string'),
    'Ensure all profiles CA items are strings'
  );
  strict.strictEqual(profiles.ca.length, 120, 'Ensure profiles CA length');
});
