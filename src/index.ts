import type { Profiles } from './@types/profiles.js';
import { defaults } from './profiles/ca/defaults.js';
import { proxies } from './profiles/ca/proxies.js';

const proxyBundle: Profiles = {
  ca: proxies,
};

const profiles: Profiles = {
  ca: [...defaults, ...proxies],
};

module.exports = profiles;
module.exports.proxyBundle = proxyBundle;
module.exports.default = profiles;
