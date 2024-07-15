import x509 from 'x509.js';
import { test, strict } from 'poku';
import { defaults } from '../../src/profiles/ca/defaults.js';
import { proxies } from '../../src/profiles/ca/proxies.js';

test('Ensuring all certificates are valid and parsable', () => {
  for (const [index, cert] of defaults.entries()) {
    const parsedCert = x509.parseCert(cert);
    const expected = 'Amazon RDS';

    strict.strictEqual(
      parsedCert.issuer.organizationalUnitName,
      expected,
      `Certificate at index ${index} from defaults`
    );
  }

  for (const [index, cert] of proxies.entries()) {
    const parsedCert = x509.parseCert(cert);
    const expected = /^(Amazon|Starfield Technologies, Inc\.)$/;

    strict.match(
      parsedCert.issuer.organizationName!,
      expected,
      `Certificate at index ${index} from proxies`
    );
  }
});
