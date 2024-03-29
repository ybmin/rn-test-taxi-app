import {TextInput} from 'dripsy';

import theme from 'tools/theme';

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
    sx={{
      flex: 1,
      height: 28,
      border: 'none',
      outline: 'none',
      padding: '6px 12px',
      borderRadius: 6,
      backgroundColor: theme.purple_light,
      boxShadow: theme.shadow_purple_input_inset,
      ...theme.font14,
    }}
    editable
    value={value}
    onChangeText={onChangeValue}
    {...inputProps}
  />
);

export default Input;
