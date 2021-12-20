import { lazy } from 'react';

// project imports
import MainLayout from 'components/layout/MainLayout';
import Loadable from 'components/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('features/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('utils/Typography')));
const UtilsColor = Loadable(lazy(() => import('utils/Color')));
const UtilsShadow = Loadable(lazy(() => import('utils/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('utils/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('utils/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('features/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
