import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
const DEFAULT_COLOR = colors.black;

interface BarProps {
  barColor?: string;
}

const Bar = ({barColor}: BarProps) => (
  <View
    style={[
      styles.root,
      {
        borderTopColor: barColor || DEFAULT_COLOR,
        borderBottomColor: barColor || DEFAULT_COLOR,
      },
    ]}
  />
);

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
  },
});

export default Bar;
