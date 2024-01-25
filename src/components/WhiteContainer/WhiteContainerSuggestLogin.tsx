import Button from 'components/Button';
import LinkLogin from 'components/Link/LinkLogin';

import {Text} from 'dripsy';
import {css} from '@emotion/react';

import WhiteContainer from '.';

import theme from 'tools/theme';
import {ReactNativeStyle} from '@emotion/native';

const WhiteContainerSuggestLogin = () => (
  <WhiteContainer>
    <Text
      style={{
        ...theme.font14,
        marginBottom: 12,
      }}>
      로그인이 필요한 서비스입니다
    </Text>
    <LinkLogin>
      <Button
        type="purple"
        style={
          css`
          padding: "14px 0 13px",
          borderRadius: "12px",` as ReactNativeStyle
        }
        textStyle={css`...${theme.font16_bold},` as ReactNativeStyle}>
        로그인
      </Button>
    </LinkLogin>
  </WhiteContainer>
);

export default WhiteContainerSuggestLogin;
