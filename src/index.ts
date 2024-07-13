import { Profiles } from './@types/profiles.js';
import { defaults } from './profiles/ca/defaults.js';
import { proxy } from './profiles/ca/proxy.js';

const profiles: Profiles = {
  ca: [...defaults, ...proxy],
};

// eslint-disable-next-line import/no-default-export
export default profiles;
