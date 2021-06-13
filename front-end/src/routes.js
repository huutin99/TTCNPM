import { lazy } from 'react';

const Home = lazy(() => import('./views/homepage/Home'));
// const Home2 = lazy(() => import('./views/homepage/Home2'));
const AdminPage = lazy(() => import('./views/admin/AdminPage'));
const LoginPage = lazy(() => import('./views/authentication/login'));
const SignupPage = lazy(() => import('./views/authentication/signup'));
const AddArticle = lazy(() => import('./views/article/addArticle'));
const ViewArticle = lazy(() => import('./views/article/viewArticle'));
const ManageArticle = lazy(() => import('./views/article/manageArticle'));
const EditArticle = lazy(() => import('./views/article/editArticle'));

const routes = [
    { path: '/', exact: true, name: 'Admin', component: Home },
    { path: '/admin', exact: true, name: 'Admin Page', component: AdminPage },
    { path: '/login', exact: true, name: 'Login Page', component: LoginPage },
    { path: '/signup', exact: true, name: 'Signup Page', component: SignupPage },
    { path: '/article/add', exact: true, name: 'Add Article', component: AddArticle },
    { path: '/article/view/:id', exact: true, name: 'View Article', component: ViewArticle },
    { path: '/article/edit/:id', exact: true, name: 'Edit Article', component: EditArticle },
    { path: '/article/manage', exact: true, name: 'Manage Article', component: ManageArticle },
];

export default routes;