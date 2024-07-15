import type { Profiles } from './@types/profiles.js';
import { defaults } from './profiles/ca/defaults.js';
import { proxies } from './profiles/ca/proxies.js';

export const proxyBundle: Profiles = {
  ca: proxies,
};

const profiles: Profiles = {
  ca: [...defaults, ...proxies],
};

// eslint-disable-next-line import/no-default-export
export default profiles;
