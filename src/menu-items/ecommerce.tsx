// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { ShoppingCartOutlined, ShopOutlined, SketchOutlined, MehOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const ecommerce: NavItemType = {
  id: 'e-commerce',
  title: <FormattedMessage id="e-commerce" />,
  type: 'group',
  icon: ShoppingCartOutlined,
  children: [
    {
      id: 'shop',
      title: <FormattedMessage id="shop" />,
      type: 'item',
      url: '/shop',
      icon: ShopOutlined
    },
    {
      id: 'vip',
      title: <FormattedMessage id="vip" />,
      type: 'item',
      url: '/vip',
      icon: SketchOutlined
    },
    {
      id: 'membership',
      title: <FormattedMessage id="membership" />,
      type: 'item',
      url: '/membership',
      icon: MehOutlined
    }
  ]
};

export default ecommerce;
