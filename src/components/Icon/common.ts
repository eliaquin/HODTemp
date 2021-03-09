import User from './svgs/User';
import Lock from './svgs/Lock';

export enum IconNames {
  user = 'user',
  lock = 'lock',
}

const IconMap = {
  [IconNames.user]: User,
  [IconNames.lock]: Lock,
};

export const getIcon = (name: IconNames) => IconMap[name];
