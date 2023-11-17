// project import
import home from './home';
import game from './game';
import profile from './profile';
import schedule from './schedule';
import ranking from './ranking';
import ecommerce from './ecommerce';
import message from './message';
import rules from './rules';

// types
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [home, game, profile, schedule, ranking, ecommerce, message, rules]
};

export default menuItems;
