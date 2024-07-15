import { test, strict } from 'poku';
import awsCaBundle, { proxyBundle } from '../../lib/index.js';

test('Testing import (ESM)', () => {
  strict(typeof awsCaBundle?.ca?.length === 'number', 'Default import');
  strict(typeof proxyBundle?.ca?.length === 'number', '"proxyBundle" import');
});
