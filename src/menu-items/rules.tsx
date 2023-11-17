// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { AndroidOutlined, QuestionCircleOutlined, LikeOutlined, CloudUploadOutlined, ThunderboltOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const rules: NavItemType = {
  id: 'rule',
  title: <FormattedMessage id="rule" />,
  type: 'group',
  icon: AndroidOutlined,
  children: [
    {
      id: 'how-to-play',
      title: <FormattedMessage id="how-to-play" />,
      type: 'item',
      url: '/how-to-play',
      icon: QuestionCircleOutlined
    },
    {
      id: 'award',
      title: <FormattedMessage id="award" />,
      type: 'item',
      url: '/award',
      icon: LikeOutlined
    },
    {
      id: 'level',
      title: <FormattedMessage id="level" />,
      type: 'item',
      url: '/level',
      icon: CloudUploadOutlined
    },
    {
      id: 'skillset',
      title: <FormattedMessage id="skillset" />,
      type: 'item',
      url: '/skillset',
      icon: ThunderboltOutlined
    }
  ]
};

export default rules;
