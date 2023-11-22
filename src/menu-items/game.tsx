// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { RedditOutlined, HistoryOutlined, TableOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const game: NavItemType = {
  id: 'game',
  title: <FormattedMessage id="game" />,
  type: 'group',
  icon: RedditOutlined,
  children: [
    {
      id: 'match',
      title: <FormattedMessage id="match" />,
      type: 'item',
      url: '/match',
      icon: HistoryOutlined
    },
    {
      id: 'overview',
      title: <FormattedMessage id="overview" />,
      type: 'item',
      url: '/overview',
      icon: TableOutlined
    }
  ]
};

export default game;
