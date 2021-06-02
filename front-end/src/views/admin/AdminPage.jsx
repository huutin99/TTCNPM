import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
} from '@ant-design/icons';

import './style.css';

import axios from 'axios';

const { Content, Sider } = Layout;
const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;
const instance = axios.create({
    baseURL: SERVER_HOST,
    timeout: 20000,
    headers: {
        // 'X-Custom-Header': 'foobar' 
        "Access-Control-Allow-Origin": "*"
    }
});

class AdminPage extends Component {
    state = {
        collapsed: false,
    };

    componentDidMount = () => {
        this.getUserData();
    }

    getUserData = () => {
        console.log(SERVER_HOST);
        instance.get(SERVER_HOST + '/admin/user')
            .then(res =>
                console.log(res)
            )
            .catch(err =>
                console.log(err)
            )
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <>
                <Layout>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                Quản lý người dùng
                            </Menu.Item>
                            <Menu.Item key="2" icon={<DesktopOutlined />}>
                                Quản lý bài viết
                            </Menu.Item>
                            <Menu.Item key="9" icon={<FileOutlined />}>
                                Quản lý chủ đề
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Admin</Breadcrumb.Item>
                            {/* <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item> */}
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </>
        );
    };
}

export default AdminPage;