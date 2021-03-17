import * as React from 'react';
import {SvgProps} from 'react-native-svg';
import {IconName, getIcon} from './common';

export interface IconProps extends SvgProps {
  name?: IconName;
}

const Icon = ({name, width, height, color}: IconProps) => {
  if (!name) return null;
  const MyIcon = getIcon(name);
  return <MyIcon width={width} height={height} color={color} />;
};

export default Icon;
