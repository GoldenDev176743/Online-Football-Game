// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { MessageOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const message: NavItemType = {
  id: 'message',
  title: <FormattedMessage id="message" />,
  type: 'item',
  icon: MessageOutlined,
  url: '/message'
};

export default message;
