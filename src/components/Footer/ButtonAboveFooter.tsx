import theme from 'tools/theme';
import {View, Text} from 'dripsy';
import {css} from '@emotion/native';

type ButtonAboveFooterProps = {
  text: string;
  onClick?: () => void;
};

const ButtonAboveFooter = ({text, onClick}: ButtonAboveFooterProps) => (
  <View
    sx={css`
      padding: 6px;
    `}>
    <Text
      onPress={onClick}
      sx={css`
      ...theme.font12;
        color: ${theme.gray_text};
        ...theme.cursor();
      `}>
      {text}
    </Text>
  </View>
);

export default ButtonAboveFooter;
