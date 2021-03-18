import * as React from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import Icon, {IconName} from '../Icon';
import colors from '../../constants/colors';

export interface TextEditPropTypes extends TextInputProps {
  iconName?: IconName;
  hasButton?: boolean;
  iconButtonName?: IconName;
  onIconButtonPress?: () => void;
  iconColor?: string;
  iconButtonColor?: string;
}

const TextEdit = (props: TextEditPropTypes) => {
  const {
    iconName,
    placeholder,
    onChangeText,
    value,
    hasButton = false,
    iconButtonName,
    onIconButtonPress,
    iconColor,
    iconButtonColor,
  } = props;
  return (
    <View style={[styles.container]}>
      <View style={styles.imageContainer}>
        {iconName ? <Icon name={iconName} color={iconColor} /> : null}
        <TextInput
          {...props}
          style={[styles.textInput, !iconName && styles.noImageTextInput]}
          placeholder={placeholder || ''}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
      {hasButton ? (
        <Pressable style={styles.innerButton} onPress={onIconButtonPress}>
          <Icon
            name={iconButtonName}
            color={iconButtonColor}
            width={22}
            height={22}
          />
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  noImageContainer: {},
  image: {
    width: 50,
    height: 50,
  },
  textInput: {
    marginLeft: 8,
    marginRight: 8,
    flex: 1,
  },
  noImageTextInput: {
    marginLeft: 0,
  },
  innerButton: {
    // marginRight: 16,
  },
});

export default TextEdit;
