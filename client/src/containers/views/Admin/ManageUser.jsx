import React from 'react';
import { instance } from '../../../axios.instance';
import { Row, Col, Typography, message, Table, Tag, Space, Button,  notification} from 'antd';
import moment from 'moment';
import { Link, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';

const { Title, Text } = Typography;

export default class ManageUser extends React.Component {
    state = {
        columns: [
            {
                title: 'Tên đầy đủ',
                dataIndex: 'name',
                key: 'name',
                render: (text, record) => <a href={'/article/view/' + record.id}>{text}</a>,
                width: 250,
                ellipsis: true
            },
            {
                title: 'Username',
                dataIndex: 'username',
                key: 'username',
                render: text => <p>{text}</p>,
                width: 150,
                ellipsis: true
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
                render: text => <p>{text}</p>,
                width: 250,
                ellipsis: true
            },
            {
                title: 'Quyền',
                dataIndex: 'role',
                key: 'role',
                render: text => <p>{text}</p>,
                width: 150,
                ellipsis: true
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Button type="primary" href={'/admin/user/edit/' + record.id}>
                            Chỉnh sửa
                        </Button>
                        <Button type="danger" onClick={() => this.handleDelete(record.id)}>Xóa</Button>
                    </Space>
                ),
            },
        ]
    }

    handleDelete = id => {
        instance.post('/article/deleteuser', { id })
            .then(res => {
                this.openNotification('bottomRight')
            })
            .catch(err =>
                message.success(err.response.data.message)
            )
        // console.log(id);
    }
    openNotification = placement => {
        const key = 'updatable';
        notification.info({
            message: `Xóa thành công`,
            description:
              'Xóa thành công rồi nhé',
            placement,
          });
        setTimeout(() => {
            notification.info({
                message: `Xóa thành công`,
                description:
                  'Xóa thành công rồi nhé!',
                placement,
              });
            window.location.reload();
        }, 3000);
      };

    componentDidMount = () => {
        this.getArticleData()
    }

    getArticleData = () => {
        instance.get('/admin/user', {})
            .then(res => {
                console.log(res.data);
                if (res.data.length > 0)
                    this.setState({
                        data: res.data.map((i, index) => ({
                            id: i.id,
                            key: index,
                            name: i.name,
                            username: i.username,
                            email: i.email,
                            role: i.role,
                        }))
                    })
            })
            .catch(err => console.log(err.response.data.message))
    }

    render() {
        // console.log(this.state.data);
        if (JSON.parse(localStorage.getItem('user')).role === 'reader') {
            message.error('Bạn không thể thực hiện chức năng này');
            return <Redirect to="/" />;
        }
        return (
            <>
                <Row style={{ maxWidth: '1000px', margin: '30px auto 30px' }}>
                    <Title style={{ margin: 'auto' }}>Quản lý Người dùng</Title>
                </Row>
                <Col span={24}>
                    <Button type="primary" href='/article/add'>
                        Thêm mới
                    </Button>
                    <Table columns={this.state.columns} dataSource={this.state.data} />
                </Col>
            </>
        )
    }
}