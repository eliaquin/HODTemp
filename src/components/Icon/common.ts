import User from './svgs/User';
import Lock from './svgs/Lock';
import Fingerprint from './svgs/Fingerprint';

export type IconName = 'user' | 'lock' | 'fingerprint';

const IconMap = {
  user: User,
  lock: Lock,
  fingerprint: Fingerprint,
};

export const getIcon = (name: IconName) => IconMap[name];
