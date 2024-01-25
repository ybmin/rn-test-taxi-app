import {ReactNode} from 'react';

import {css} from '@emotion/react';
import {View} from 'dripsy';

import theme from 'tools/theme';

type WhiteContainerProps = {
  children?: ReactNode;
};

const WhiteContainer = ({children}: WhiteContainerProps) => (
  <View
    sx={{
      margin: '0 0 15px',
      padding: '24px',
      boxShadow: theme.shadow,
      backgroundColor: theme.white,
      overflow: 'hidden',
      position: 'relative',
      borderRadius: '12px',
    }}>
    {children}
  </View>
);

export default WhiteContainer;
