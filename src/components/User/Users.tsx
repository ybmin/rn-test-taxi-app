import {View} from 'dripsy';
import User from '.';

type UsersProps = {
  values: Array<User>;
};

const Users = ({values}: UsersProps) => (
  <View
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px 8px',
      overflow: 'hidden',
    }}>
    {values.map(value => (
      <User key={value._id} value={value} />
    ))}
  </View>
);

export default Users;
