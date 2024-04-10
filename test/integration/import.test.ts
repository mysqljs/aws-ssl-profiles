import { describe, assert } from 'poku';
import * as index from '../../src/index.js';

describe('Testing Imports', {
  pad: true,
  background: false,
});

assert(index.profiles, 'Import default profiles');
