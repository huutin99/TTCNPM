import { lazy } from 'react';

const Home = lazy(() => import('./views/homepage/Home'));
// const Home2 = lazy(() => import('./views/homepage/Home2'));
const AdminPage = lazy(() => import('./views/admin/AdminPage'));
const Content = lazy(() => import('./views/contentPage/ContentArticle'));
const AddArticle = lazy(() => import('./views/AddArticle/AddArticle'));

const routes = [
    { path: '/', exact: true, name: 'Admin', component: Home },
    // { path: '/home2', name: 'Trang chủ', component: Home2 },
    { path: '/admin', exact: true, name: 'Admin Page', component: AdminPage },
    { path: '/content', exact: true, name: 'Content Page', component: Content },
    { path: '/add', exact: true, name: 'Add Page', component: AddArticle},
];

export default routes;