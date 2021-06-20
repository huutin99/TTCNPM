import React, { Component } from "react";
import { Row, Col, Typography, message, Table, Tag, Space, Button } from 'antd';
import './style.css';
import { instance } from '../../axios.instance';

class ManageUser extends Component {
    state = {
        columns: [
            {
                title: 'Họ tên',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'Quyền',
                dataIndex: 'role',
                key: 'role',
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
    };

    componentDidMount = () => {
        this.getUserData();
    }

    getUserData = () => {
        // console.log(SERVER_HOST);
        instance.get('/admin/user')
            .then(res => {
                // console.log(res);
                this.setState({
                    data: res.data.map((i, index) => ({
                        id: i.id,
                        key: index,
                        name: i.name,
                        email: i.email,
                        role: i.role
                    }))
                })
            }
            )
            .catch(err =>
                console.log(err)
            )
    }

    render() {
        return (
            <>
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </>
        );
    };
}

export default ManageUser;