//Public Rotes
import {Home, Following, Profile, Search, Upload } from '~/page'
import HeaderOnly from "~/components/Layout/HeaderOnly";
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/profile", component: Profile },
    { path: "/search", component: Search, layout: null },
    { path: "/upload", component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
