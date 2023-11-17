// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { OrderedListOutlined, UserOutlined, UsergroupAddOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const ranking: NavItemType = {
  id: 'ranking',
  title: <FormattedMessage id="ranking" />,
  type: 'group',
  icon: OrderedListOutlined,
  children: [
    {
      id: 'player',
      title: <FormattedMessage id="player" />,
      type: 'item',
      url: '/player-ranking',
      icon: UserOutlined
    },
    {
      id: 'team',
      title: <FormattedMessage id="team" />,
      type: 'item',
      url: '/team-ranking',
      icon: UsergroupAddOutlined
    }
  ]
};

export default ranking;
