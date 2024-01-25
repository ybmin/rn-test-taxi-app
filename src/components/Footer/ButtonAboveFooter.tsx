import theme from 'tools/theme';
import {View, Text, SxProp} from 'dripsy';

type ButtonAboveFooterProps = {
  text: string;
  onClick?: () => void;
};

const ButtonAboveFooter = ({text, onClick}: ButtonAboveFooterProps) => (
  <View
    sx={{
      padding: '6px',
    }}>
    <Text
      onPress={onClick}
      sx={{
        color: theme.gray_text,
        ...theme.font12,
        ...(theme.cursor() as SxProp),
      }}>
      {text}
    </Text>
  </View>
);

export default ButtonAboveFooter;
