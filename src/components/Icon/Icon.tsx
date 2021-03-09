import * as React from 'react';
import {SvgProps} from 'react-native-svg';
import {IconNames, getIcon} from './common';

export interface IconProps extends SvgProps {
  name: IconNames;
}

const Icon = ({name, width, height, color}: IconProps) => {
  const MyIcon = getIcon(name);
  return <MyIcon width={width} height={height} color={color} />;
};

export default Icon;
