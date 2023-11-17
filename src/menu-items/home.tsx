// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { HomeOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const home: NavItemType = {
  id: 'home',
  title: <FormattedMessage id="home" />,
  type: 'item',
  icon: HomeOutlined,
  url: '/home'
};

export default home;
