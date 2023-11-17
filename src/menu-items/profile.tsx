// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { TeamOutlined, SmileOutlined, HeartOutlined, AliwangwangOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const profile: NavItemType = {
  id: 'profile',
  title: <FormattedMessage id="profile" />,
  type: 'group',
  icon: TeamOutlined,
  children: [
    {
      id: 'myprofile',
      title: <FormattedMessage id="myprofile" />,
      type: 'item',
      url: '/myprofile',
      icon: SmileOutlined
    },
    {
      id: 'myteam',
      title: <FormattedMessage id="myteam" />,
      type: 'item',
      url: '/myteam',
      icon: HeartOutlined
    },
    {
      id: 'otherteam',
      title: <FormattedMessage id="otherteam" />,
      type: 'item',
      url: '/otherteam',
      icon: AliwangwangOutlined
    }
  ]
};

export default profile;
