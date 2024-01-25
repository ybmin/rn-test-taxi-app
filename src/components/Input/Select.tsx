import theme from 'tools/theme';

import {View} from 'dripsy';

import {css} from '@emotion/native';

// import Icons from 'react-native-vector-icons/MaterialIcons';

import {Picker} from '@react-native-picker/picker';

type SelectProps = {
  value: string;
  options: Array<{value: string; label: string}>;
  onChangeValue?: (v: string) => void;
  className?: string; // for emotion (css props)
};

// const ArrowDropDownRoundedIcon = <Icons name="arrow-drop-down" size={16} />;

const Select = ({value, options, onChangeValue, className}: SelectProps) => {
  return (
    <View
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '6px',
        height: '28px',
        padding: '0 19px 0 10px',
        background: theme.purple_light,
        boxShadow: theme.shadow_purple_input_inset,
      }}>
      {/* {ArrowDropDownRoundedIcon} */}
      {/* #1. react native picker 사용  */}
      <Picker
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => onChangeValue?.(itemValue)}
        mode="dropdown"
        style={css`{
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            opacity: 0,
            color: ${theme.purple},
          }`} //...${theme.cursor()} 추가 방안 필요
      >
        {options.map(({value, label}) => (
          <Picker.Item
            key={value}
            label={label}
            value={value}
            style={{fontSize: 14, lineHeight: 10}}
            color={theme.purple}
          />
        ))}
      </Picker>
    </View>
  );
};

export default Select;
