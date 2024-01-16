import {memo, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'dripsy';

import {Members} from 'types/members';

import Modal from 'components/Modal';
import Navigation from 'components/Navigation';

import theme from 'tools/theme';

// import { ReactComponent as SparcsLogoBlack } from "static/assets/sparcsLogos/SparcsLogoBlack.svg";
// import { ReactComponent as SparcsLogoYellow } from "static/assets/sparcsLogos/SparcsLogoYellow.svg";
import {
  members,
  members2023FallEvent,
  members2023SpringEvent,
} from 'static/members';

type MemberProps = Members[number]['list'][number];

const Member = ({name, id, period}: MemberProps) => (
  <View
    sx={{
      background: theme.purple_light,
      borderRadius: '10px',
      padding: '16px 12px 12px',
      boxShadow: theme.shadow,
      display: 'flex',
      flexDirection: 'column',
    }}>
    <View
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
      }}>
      <Text
        sx={{
          ...theme.font14_bold,
          whiteSpace: 'nowrap' as const,
        }}>
        {name}
      </Text>
      {/* <SparcsLogoYellow
        style={{
          height: "18px",
          paddingLeft: "8px",
          paddingRight: "4px",
        }}
      /> */}
      <Text
        sx={{
          ...theme.font12,
          color: theme.yellow,
          fontWeight: 'bold',
        }}>
        {id}
      </Text>
    </View>
    <Text
      sx={{
        ...theme.font10_bold,
        color: theme.gray_text,
      }}>
      {period}
    </Text>
  </View>
);

type BodyMembersProps = {values: Members};

const BodyMembers = ({values}: BodyMembersProps) => (
  <View
    sx={{
      overflow: 'auto',
      paddingTop: '12px',
      minHeight: '270px',
      height: 'calc(100vh - 360px)',
      maskImage:
        'linear-gradient(to bottom, transparent, white 16px, white calc(100% - 16px), transparent 100%)',
    }}>
    {values.map(({position, list}) => (
      <View key={position}>
        <Text
          sx={{
            ...theme.font14_bold,
            padding: '0 0 12px 12px',
          }}>
          {position}
        </Text>
        <View
          sx={{
            display: 'flex',
            flexWrap: 'wrap' as const,
            gap: '12px',
            paddingBottom: '12px',
          }}>
          {list.map(member => (
            <Member key={member.id} {...member} />
          ))}
        </View>
      </View>
    ))}
  </View>
);

type ModalCreditProps = {
  defaultSelectedCatagory?: string;
} & Parameters<typeof Modal>[0];

const ModalCredit = ({
  defaultSelectedCatagory,
  ...modalProps
}: ModalCreditProps) => {
  const {t} = useTranslation('mypage');
  const pages = useMemo(
    () => [
      {
        key: 'all',
        name: t('page_credit.category_all'),
        body: <BodyMembers values={members} />,
      },
      {
        key: '2023FallEvent',
        name: t('page_credit.category_2023fall_event'),
        body: <BodyMembers values={members2023FallEvent} />,
      },
      {
        key: '2023SpringEvent',
        name: t('page_credit.category_2023spring_event'),
        body: <BodyMembers values={members2023SpringEvent} />,
      },
    ],
    [t],
  );

  return (
    <Modal
      width={theme.modal_width_large}
      padding="16px 12px 12px"
      {...modalProps}>
      <View
        sx={{
          ...theme.font18,
          display: 'flex',
          alignItems: 'center',
          marginBottom: '12px',
        }}>
        {/* <SparcsLogoBlack
          style={{
            height: "21px",
            width: "auto",
            margin: "0 8px",
          }}
        /> */}
        <Text>{t('credit')}</Text>
      </View>
      <Navigation
        defaultSelectedKey={defaultSelectedCatagory}
        pages={pages}
        isDisplayDottedLine
      />
    </Modal>
  );
};

export default memo(ModalCredit);
