import React from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, Text} from 'react-native';
import colors from '../../constants/colors';

export interface ButtonProps {
  label: string;
  onPress: (event: GestureResponderEvent | null | undefined) => void;
}

const Button = ({label, onPress}: ButtonProps) => (
  <Pressable style={styles.root} onPress={onPress}>
    <Text style={styles.text}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  root: {
    width: 164,
    height: 38,
    backgroundColor: colors.hodBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16,
  },
});

export default Button;
