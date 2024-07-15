import type { Profiles } from './@types/profiles.js';
import { defaults } from './profiles/ca/defaults.js';
import { proxies } from './profiles/ca/proxies.js';

const proxyBundle: Profiles = {
  ca: proxies,
};

const profiles: Profiles = {
  ca: [...defaults, ...proxies],
};

// CJS
module.exports = profiles;
module.exports.proxyBundle = proxyBundle;

// ESM
export default profiles;
