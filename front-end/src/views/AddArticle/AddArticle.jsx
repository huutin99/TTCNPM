import { useState } from 'react'
import React from 'react';
import './Style/AddArticle.css'
import 'antd/dist/antd.css';
import { Layout, Menu, List, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Sider, Footer, Content } = Layout;

const AddArticle = () => {
  // const [articles, setArticles]=useState([])
  return (
    <div className='Add'>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Trang chủ</Menu.Item>
            <Menu.Item key="2">Mới nhất</Menu.Item>
            <Menu.Item key="3">Nổi bật</Menu.Item>
          </Menu>
        </Header>
        <Layout style={{
            margin: '24px 350px 1px 350px', 
            overflow: 'initial',
            left:'400px'
        }}>
            <label>
              Chủ đề
              <input type="text" name="Chu de" />
            </label>
            <label>
              Chủ đề con
              <input type="text" name="Chu de con" />
            </label>
            <label>
                Tiêu đề
                <input type="text" name="Tieu de" />
            </label>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

      </Layout>

    </div>
  )
}

export default AddArticle
