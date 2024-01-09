import theme from 'tools/theme';

import {Pressable, Text, View} from 'dripsy';
import {css} from '@emotion/native';

type ButtonShareProps = {
  text: string;
  icon: React.ReactNode;
  background: string;
  onClick?: () => void;
};

const ButtonShare = ({text, icon, background, onClick}: ButtonShareProps) => (
  <Pressable
    sx={css`
      width: 45px;
      cursor: pointer;
    `}
    onPress={onClick}>
    <View
      sx={css`
        width: 45px;
        height: 45px;
        borderradius: 6px;
        backgroundcolor: ${background};
        boxshadow: ${theme.shadow_gray_button_inset};
        color: ${theme.gray_text};
        display: flex;
        alignitems: center;
        justifycontent: center;
      `}>
      {icon}
    </View>
    <Text
      style={[
        sx`
          color: ${theme.gray_text};
          textalign: center;
          paddingtop: 4px;
        `,
        theme.font10,
      ]}>
      {text}
    </Text>
  </Pressable>
);

export default ButtonShare;
