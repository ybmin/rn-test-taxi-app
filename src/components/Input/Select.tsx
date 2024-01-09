import theme from '../../tools/theme';

import {Text, TextStyle, StyleProp, View} from 'react-native';

import {useState} from 'react';

import {css} from '@emotion/native';

import Icons from 'react-native-vector-icons/MaterialIcons';

import {Picker} from '@react-native-picker/picker';

type SelectProps = {
  value: string;
  options: Array<{value: string; label: string}>;
  onChangeValue?: (v: string) => void;
  className?: string; // for emotion (css props)
};

const ArrowDropDownRoundedIcon = <Icons name="arrow-drop-down" size={16} />;

const Select = ({value, options, onChangeValue, className}: SelectProps) => {
  const [state, setState] = useState([]);
  return (
    <View
      style={
        css`
        position: "relative",
        display: "flex",
        alignItems: "center",
        color: ${theme.purple},
        borderRadius: "6px",
        height: "28px",
        padding: "0 19px 0 10px",
        background: ${theme.purple_light},
        boxShadow: ${theme.shadow_purple_input_inset},
        ...${theme.font14},
      ` as StyleProp<TextStyle>
      }>
      {/* {ArrowDropDownRoundedIcon} */}
      {/* #1. react native picker 사용  */}
      <Picker
        selectedValue={value}
        onValueChange={(itemValue: string) => onChangeValue?.(itemValue)}
        mode="dropdown"
        style={css`{
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            opacity: 0,
          }`} //...${theme.cursor()} 추가 방안 필요
      >
        {options.map(value => (
          <Picker.Item value={value} />
        ))}
      </Picker>
    </View>
  );
};

export default Select;
