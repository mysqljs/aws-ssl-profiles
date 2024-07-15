import x509 from 'x509.js';
import { describe, assert } from 'poku';
import { defaults } from '../../src/profiles/ca/defaults.js';
import { proxy } from '../../src/profiles/ca/proxy.js';

describe('Ensuring all certificates are valid and parsable', {
  pad: true,
  background: false,
});

defaults.forEach((cert, index) => {
  const parsedCert = x509.parseCert(cert);
  const expected = 'Amazon RDS';

  assert.strictEqual(
    parsedCert.issuer.organizationalUnitName,
    expected,
    `Certificate at index ${index} from defaults`
  );
});

proxy.forEach((cert, index) => {
  const parsedCert = x509.parseCert(cert);
  let expected = 'Amazon';

  if (index === 4) {
    expected = 'Starfield Technologies, Inc.';
  }

  assert.strictEqual(
    parsedCert.issuer.organizationName,
    expected,
    `Certificate at index ${index} from proxy`
  );
});
