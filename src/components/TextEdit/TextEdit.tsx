import * as React from 'react';
import {TextInput, View, Image} from 'react-native';

export type TextEditPropTypes = {
  imagePath?: string;
};

const TextEdit = ({imagePath}: TextEditPropTypes) => {
  const hasImage = !!imagePath;
  return (
    <View>
      {hasImage ? <Image source={require(imagePath || '')} /> : null}
      <TextInput />
    </View>
  );
};

export default TextEdit;
