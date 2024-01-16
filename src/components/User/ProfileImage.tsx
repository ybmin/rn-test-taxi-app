import {useEffect, useState} from 'react';
import {Image, View} from 'dripsy';

import theme from 'tools/theme';
import {getS3Url} from 'tools/trans';

import defaultImg from 'static/assets/profileImgOnError.png';

type ProfileImageProps = {
  url: string;
  token?: string;
};

const ProfileImage = ({url, token}: ProfileImageProps) => {
  const getSrc = () => getS3Url(`/profile-img/${url}?token=${token || ''}`);
  const [src, setSrc] = useState(getSrc());

  useEffect(() => setSrc(getSrc()), [url, token]);

  return (
    <View
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: theme.gray_background,
      }}>
      <Image
        source={{uri: src}}
        sx={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        alt={`/profile-img/${url}`}
        onError={() => setSrc(defaultImg)}
      />
    </View>
  );
};

export default ProfileImage;
