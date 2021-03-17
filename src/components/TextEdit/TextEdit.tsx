import * as React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import Icon, {IconName} from '../Icon';
import colors from '../../constants/colors';

export interface TextEditPropTypes extends TextInputProps {
  iconName?: IconName;
}

const TextEdit = ({
  iconName,
  placeholder,
  onChangeText,
  value,
}: TextEditPropTypes) => {
  return (
    <View
      style={[
        styles.container,
        iconName ? styles.imageContainer : styles.noImageContainer,
      ]}>
      {iconName ? <Icon name={iconName} color={colors.grey2} /> : null}
      <TextInput
        style={[styles.textInput, !iconName && styles.noImageTextInput]}
        placeholder={placeholder || ''}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    height: 44,
    borderRadius: 10,
    paddingHorizontal: 16,
    backgroundColor: colors.lighterGrey,
    borderBottomColor: colors.grey,
    borderTopColor: colors.grey,
    borderLeftColor: colors.grey,
    borderRightColor: colors.grey,
  },
  imageContainer: {},
  noImageContainer: {},
  image: {
    width: 50,
    height: 50,
  },
  textInput: {
    width: '100%',
    marginLeft: 8,
  },
  noImageTextInput: {
    marginLeft: 0,
  },
});

export default TextEdit;
