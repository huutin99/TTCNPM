import './App.css';

import React, { Suspense } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { Layout, Menu, Button, message } from 'antd';
import 'antd/dist/antd.css';
import routes from './routes';
import { connect } from 'react-redux';
import { instance } from './axios.instance';
import Cookies from 'universal-cookie';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
const cookies = new Cookies();

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

const handleLogout = () => {
    // console.log('here')
    instance.post('/logout', {})
        .then(res => message.success(res.data))
        .catch(err => message.error(err.response.data.message));
    localStorage.removeItem('user');
}

const TheLayout = (props) => {
    // console.log(cookies.get('token'));
    if (!cookies.get('token')) {
        // console.log('heooe')
        localStorage.removeItem('user');
    }
    return <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1">Trang chủ</Menu.Item>
                <Menu.Item key="2">Mới nhất</Menu.Item>
                <Menu.Item key="3">Nổi bật</Menu.Item>
                {localStorage.getItem('user') && cookies.get('token') ?
                    <>
                        <Menu.Item key="4" style={{ float: 'right' }}>
                            <Button type="link" size='large' href='/' onClick={handleLogout}>
                                Đăng xuất
                            </Button>
                        </Menu.Item>
                        {JSON.parse(localStorage.getItem('user')).role !== 'reader' &&
                            <>
                                {JSON.parse(localStorage.getItem('user')).role === 'writer' ?
                                    <Menu.Item key="5" style={{ float: 'right' }}><Link to="/article/manage" />Quản lý bài viết</Menu.Item> :
                                    <SubMenu style={{ float: 'right' }} title={<span>Công cụ</span>}>
                                        <Menu.Item key="setting:1"><Link to="/article/manage" />Quản lý bài viết</Menu.Item>
                                        <Menu.Item key="setting:2"><Link to="/admin" />Quản lý hệ thống</Menu.Item>
                                    </SubMenu>
                                }
                            </>
                        }
                    </> :
                    <>
                        <Menu.Item key="4" style={{ float: 'right' }}>
                            <Button type="link" size='large' href='/login'>
                                Đăng nhập
                            </Button>
                        </Menu.Item>
                        <Menu.Item key="5" style={{ float: 'right' }}>
                            <Button type="link" size='large' href='/signup'>
                                Đăng ký
                            </Button>
                        </Menu.Item>
                    </>
                }
            </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, marginBottom: '70px' }}>
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
                        <Redirect from="/" to="/" />
                    </Switch>
                </Suspense>
            </Route>
        </Content>
        <Footer style={{ textAlign: 'center', position: 'fixed', width: '100%', bottom: '0', backgroundColor: '#001529', color: 'lightgray', height: '70px' }}>Thực tập công nghệ phần mềm 2021</Footer>
    </Layout>
}

    ;

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(TheLayout);
