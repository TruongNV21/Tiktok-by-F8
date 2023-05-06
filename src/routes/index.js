//Public Rotes
import routesConfig from '~/config/routes';
import {Home, Following, Profile, Search, Upload } from '~/page'
import HeaderOnly from "~/components/Layout/HeaderOnly";
const publicRoutes = [
    { path: routesConfig.root, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
