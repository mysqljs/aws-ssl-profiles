import { Profiles } from './@types/profiles.js';
import { defaults } from './profiles/ca/defaults.js';

const profiles: Profiles = {
  ca: defaults,
};

// eslint-disable-next-line import/no-default-export
export default profiles;
