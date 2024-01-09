import React, {HTMLProps} from 'react';

import {css} from '@emotion/react';
import {TextInput, TextStyle, StyleProp} from 'react-native';

import theme from '../../tools/theme';
import {ReactNativeStyle} from '@emotion/native';

type InputProps = {
  value?: string;
  onChangeValue?: (v: string) => void;
  className?: string;
};

const Input = ({
  value,
  onChangeValue,
  className,
  ...inputProps
}: InputProps) => (
  <TextInput
    style={
      css`
      border: "none",
      outline: "none",
      padding: '6px 12px';
      borderradius: '6px';
      background: ${theme.purple_light},
      boxShadow: ${theme.shadow_purple_input_inset},
      ...${theme.font14},
      ` as ReactNativeStyle
    }
    editable
    value={value}
    onChangeText={onChangeValue}
    {...inputProps}
  />
);

export default Input;
