import { describe, assert } from 'poku';
import { profiles } from '../../src/index.js';

describe('Testing Profiles Final Bundle Structure', {
  pad: true,
  background: false,
});

assert.strictEqual(typeof profiles, 'object', 'Ensure profiles type');
assert(Array.isArray(profiles.ca), 'Ensure profiles CA type');
assert(
  profiles.ca.every((item) => typeof item === 'string'),
  'Ensure all profiles CA items are strings'
);
assert.strictEqual(profiles.ca.length, 115, 'Ensure profiles CA lenght');
