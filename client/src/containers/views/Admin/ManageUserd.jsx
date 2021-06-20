import React from 'react';
import { instance } from '../../../axios.instance';
import { Row, Col, Typography, message, Table, Tag, Space, Button } from 'antd';
import moment from 'moment';
import { Link, Redirect } from 'react-router-dom';

const { Title, Text } = Typography;

export default class ManageUserd extends React.Component {
    state = {
        columns: [
            {
                title: 'Tên đầy đủ',
                dataIndex: 'name',
                key: 'name',
                render: (text, record) => <a href={'/article/view/' + record.id}>{text}</a>,
                width: 150,
                ellipsis: true
            },
            {
                title: 'Quyền',
                dataIndex: 'role',
                key: 'role',
                width: 100,
                render: text => <p>{text}</p>,
                ellipsis: true
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Button type="primary" href={'/article/edit/' + record.id}>
                            Chỉnh sửa
                        </Button>
                        <Button type="danger" onClick={() => this.handleDelete(record.id)}>Xóa</Button>
                    </Space>
                ),
            },
        ]
    }

    handleDelete = id => {
        instance.post('/article/delete', { id })
            .then(res => {
                message.success(res.data);
            })
            .catch(err =>
                message.success(err.response.data.message)
            )
        // console.log(id);
    }

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
                <Col span={24} style={{float: "left"}}>
                    <Table columns={this.state.columns} dataSource={this.state.data} />
                </Col>
            </>
        )
    }
}