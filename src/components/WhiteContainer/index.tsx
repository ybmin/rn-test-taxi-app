import {ReactNode} from 'react';

import {css} from '@emotion/react';
import {StyleProp, View, ViewStyle} from 'react-native';

import theme from '../../tools/theme';

type WhiteContainerProps = {
  children?: ReactNode;
};

const WhiteContainer = ({children}: WhiteContainerProps) => (
  <View
    style={
      css`
      margin: "0 0 15px",
      padding: "24px",
      boxShadow: ${theme.shadow},
      background: ${theme.white},
      overflow: "hidden",
      position: "relative",
      borderRadius: "12px",` as StyleProp<ViewStyle>
    }>
    {children}
  </View>
);

export default WhiteContainer;
