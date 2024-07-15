import type { Profiles } from './@types/profiles.js';
export declare const proxyBundle: Profiles;
declare const profiles: Profiles;
declare module 'aws-ssl-profiles' {
  export = profiles;
  export const proxyBundle: Profiles;
}
export default profiles;
