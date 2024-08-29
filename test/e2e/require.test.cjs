'use strict';

const { test, strict } = require('poku');
const awsCaBundle = require('../../lib/index.js');
const { ca: awsCas } = require('../../lib/index.js').default;
const { proxyBundle } = require('../../lib/index.js');

test('Testing require (CJS)', () => {
  strict(typeof awsCaBundle?.ca?.length === 'number', 'Default require');
  strict(typeof awsCas?.length === 'number', 'Default require with default property present');
  strict(typeof proxyBundle?.ca?.length === 'number', '"proxyBundle" require');
  strict(
    typeof awsCaBundle.proxyBundle?.ca?.length === 'number',
    '"proxyBundle" from default require'
  );
});
