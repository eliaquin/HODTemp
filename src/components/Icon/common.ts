import User from './svgs/User';
import Lock from './svgs/Lock';
import Fingerprint from './svgs/Fingerprint';
import FaceId from './svgs/FaceId';

export type IconName = 'user' | 'lock' | 'fingerprint' | 'faceId';

const IconMap = {
  user: User,
  lock: Lock,
  fingerprint: Fingerprint,
  faceId: FaceId,
};

export const getIcon = (name: IconName) => IconMap[name];
