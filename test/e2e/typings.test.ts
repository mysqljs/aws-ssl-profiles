import { test, strict } from 'poku';
import { readFile } from 'node:fs/promises';

test('Ensure index.d.ts Typings', async () => {
  const src = await readFile('./src/index.d.ts', 'utf-8');
  const lib = await readFile('./lib/index.d.ts', 'utf-8');

  strict.strictEqual(src, lib, '"src" and "lib" should be the same the same');
});
