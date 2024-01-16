import ProfileImage from './ProfileImage';
import {View, Text} from 'dripsy';

import theme from 'tools/theme';

type UserProps = {value: User; isDeparted?: boolean};

const User = ({value, isDeparted}: UserProps) => {
  const isSettlement =
    value?.isSettlement === 'paid' || value?.isSettlement === 'sent';
  return (
    <View
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        maxWidth: '100%',
        flexDirection: 'row',
      }}>
      <View
        sx={{
          minWidth: 21,
          height: 21,
          overflow: 'hidden',
          borderRadius: '50%',
          background: theme.gray_line,
        }}>
        <ProfileImage url={value.profileImageUrl} />
      </View>
      <View
        sx={{
          borderRadius: 6,
          padding: '4px 6px 3px',
          boxShadow: theme.shadow_gray_input_inset,
          color: isDeparted && isSettlement ? theme.white : theme.gray_text,
          backgroundColor:
            isDeparted && isSettlement ? theme.purple : theme.gray_background,
          flexDirection: 'row',
          alignItems: 'center',
          // ...theme.ellipsis,
        }}>
        <Text
          sx={{
            ...theme.font10,
          }}>
          {value.nickname}
        </Text>
        {isDeparted && !isSettlement && <Text sx={theme.font8}>(미정산)</Text>}
      </View>
    </View>
  );
};

export default User;
