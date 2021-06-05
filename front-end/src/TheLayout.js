import './App.css';

import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import routes from './routes'

const { Header, Content, Footer } = Layout;

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

const TheLayout = () => (
    <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1">Trang chủ</Menu.Item>
                <Menu.Item key="2">Mới nhất</Menu.Item>
                <Menu.Item key="3">Nổi bật</Menu.Item>
            </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <Route>
                <Suspense>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                        <route.component {...props} />
                                    )} />
                            )
                        })}
                        <Redirect from="/" to="/dashboard" />
                    </Switch>
                </Suspense>
            </Route>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
);

export default TheLayout;
