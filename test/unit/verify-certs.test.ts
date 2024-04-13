import x509 from 'x509.js';
import { describe, assert } from 'poku';
import { defaults } from '../../src/profiles/ca/defaults.js';

describe('Ensuring all certificates are valids and are from Amazon RDS', {
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
