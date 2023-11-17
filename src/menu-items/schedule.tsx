// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { ScheduleOutlined, ContactsOutlined, DashboardOutlined, ApartmentOutlined, StarOutlined, TrophyOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const schedule: NavItemType = {
  id: 'schedule',
  title: <FormattedMessage id="schedule" />,
  type: 'group',
  icon: ScheduleOutlined,
  children: [
    {
      id: 'myschedule',
      title: <FormattedMessage id="myschedule" />,
      type: 'item',
      url: '/myschedule',
      icon: ContactsOutlined
    },
    {
      id: 'championship',
      title: <FormattedMessage id="championship" />,
      type: 'item',
      url: '/championship',
      icon: DashboardOutlined
    },
    {
      id: 'copacup',
      title: <FormattedMessage id="copacup" />,
      type: 'item',
      url: '/copacup',
      icon: ApartmentOutlined
    },
    {
      id: 'footballcup',
      title: <FormattedMessage id="footballcup" />,
      type: 'item',
      url: '/footballcup',
      icon: StarOutlined
    },
    {
      id: 'worldcup',
      title: <FormattedMessage id="worldcup" />,
      type: 'item',
      url: '/worldcup',
      icon: TrophyOutlined
    }
  ]
};

export default schedule;
