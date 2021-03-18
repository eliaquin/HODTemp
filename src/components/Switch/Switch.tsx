import React from 'react';
import {Switch as RNSwitch, SwitchProps} from 'react-native';
import colors from '../../constants/colors';

const Switch = (props: SwitchProps) => (
  <RNSwitch
    ios_backgroundColor={colors.hodGrey}
    trackColor={{false: colors.hodGrey, true: colors.hodBlue}}
    thumbColor={colors.smoke}
    {...props}
  />
);

export default Switch;
