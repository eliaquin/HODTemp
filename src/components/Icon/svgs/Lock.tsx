import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {LOGO_HEIGHT, LOGO_WIDTH} from '../constants';

function Lock({width, height, color}: SvgProps) {
  return (
    <Svg
      viewBox="0 0 448 512"
      width={width || LOGO_WIDTH}
      height={height || LOGO_HEIGHT}>
      <Path
        fill={color || 'black'}
        d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM264 392c0 22.1-17.9 40-40 40s-40-17.9-40-40v-48c0-22.1 17.9-40 40-40s40 17.9 40 40v48zm32-168H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
      />
    </Svg>
  );
}

export default Lock;
