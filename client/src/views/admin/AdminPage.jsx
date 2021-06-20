import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
} from '@ant-design/icons';
import ManageUser from "./manageUser";
import ManageArticle from "./manageArticle";
import ManageTopic from "./manageTopic";

import './style.css';
import { instance } from '../../axios.instance';

const { Content, Sider } = Layout;

class AdminPage extends Component {
    state = {
        collapsed: false,
        manage: 1
    };

    componentDidMount = () => {
        // this.getUserData();
    }

    getUserData = () => {
        // console.log(SERVER_HOST);
        instance.get('/admin/user')
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
                <Content style={{ padding: '0 50px', height: '80vh' }}>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                                onClick={e => this.setState({ manage: e.key })}
                            >
                                <Menu.Item key="1" icon={<PieChartOutlined />}>
                                    Quản lý người dùng
                                </Menu.Item>
                                <Menu.Item key="2" icon={<DesktopOutlined />}>
                                    Quản lý bài viết
                                </Menu.Item>
                                <Menu.Item key="3" icon={<FileOutlined />}>
                                    Quản lý chủ đề
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280, height: '81vh', overflow: 'scroll' }}>
                            {this.state.manage === '1' && <ManageUser />}
                            {this.state.manage === '2' && <ManageArticle />}
                            {this.state.manage === '3' && <ManageTopic />}
                        </Content>
                    </Layout>
                </Content>
            </>
        );
    };
}

export default AdminPage;