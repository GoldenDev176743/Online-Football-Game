import { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import CommonLayout from 'layout/CommonLayout';
import Loadable from 'components/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// pages routing
const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction')));
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));
const Home = Loadable(lazy(() => import('pages/home')));
const Match = Loadable(lazy(() => import('pages/game/match')));
const Overview = Loadable(lazy(() => import('pages/game/overview')));
const Myprofile = Loadable(lazy(() => import('pages/profile/myprofile')));
const Myteam = Loadable(lazy(() => import('pages/profile/myteam')));
const Otherteam = Loadable(lazy(() => import('pages/profile/otherteam')));
const Myschedule = Loadable(lazy(() => import('pages/schedule/myschedule')));
const Championship = Loadable(lazy(() => import('pages/schedule/championship')));
const Copacup = Loadable(lazy(() => import('pages/schedule/copacup')));
const Footballcup = Loadable(lazy(() => import('pages/schedule/footballcup')));
const Worldcup = Loadable(lazy(() => import('pages/schedule/worldcup')));
const Player = Loadable(lazy(() => import('pages/ranking/player')));
const Team = Loadable(lazy(() => import('pages/ranking/team')));
const Shop = Loadable(lazy(() => import('pages/ecommerce/shop')));
const Vip = Loadable(lazy(() => import('pages/ecommerce/vip')));
const Membership = Loadable(lazy(() => import('pages/ecommerce/membership')));
const Message = Loadable(lazy(() => import('pages/message')));
const Howtoplay = Loadable(lazy(() => import('pages/rule/howtoplay')));
const Award = Loadable(lazy(() => import('pages/rule/award')));
const Level = Loadable(lazy(() => import('pages/rule/level')));
const Skillset = Loadable(lazy(() => import('pages/rule/skillset')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: 'sample-page',
          element: <SamplePage />
        },
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'match',
          element: <Match />
        },
        {
          path: 'overview',
          element: <Overview />
        },
        {
          path: 'myprofile',
          element: <Myprofile />
        },
        {
          path: 'myteam',
          element: <Myteam />
        },
        {
          path: 'otherteam',
          element: <Otherteam />
        },
        {
          path: 'myschedule',
          element: <Myschedule />
        },
        {
          path: 'championship',
          element: <Championship />
        },
        {
          path: 'copacup',
          element: <Copacup />
        },
        {
          path: 'footballcup',
          element: <Footballcup />
        },
        {
          path: 'worldcup',
          element: <Worldcup />
        },
        {
          path: 'player-ranking',
          element: <Player />
        },
        {
          path: 'team-ranking',
          element: <Team />
        },
        {
          path: 'shop',
          element: <Shop />
        },
        {
          path: 'vip',
          element: <Vip />
        },
        {
          path: 'membership',
          element: <Membership />
        },
        {
          path: 'message',
          element: <Message />
        },
        {
          path: 'how-to-play',
          element: <Howtoplay />
        },
        {
          path: 'award',
          element: <Award />
        },
        {
          path: 'level',
          element: <Level />
        },
        {
          path: 'skillset',
          element: <Skillset />
        }
      ]
    },
    {
      path: '/maintenance',
      element: <CommonLayout />,
      children: [
        {
          path: '404',
          element: <MaintenanceError />
        },
        {
          path: '500',
          element: <MaintenanceError500 />
        },
        {
          path: 'under-construction',
          element: <MaintenanceUnderConstruction />
        },
        {
          path: 'coming-soon',
          element: <MaintenanceComingSoon />
        }
      ]
    }
  ]
};

export default MainRoutes;
