import React from 'react';
import { instance } from '../../../axios.instance';
import { Row, Col, Typography, message, Table, Tag, Space, Button, notification } from 'antd';
import moment from 'moment';
import { Link, Redirect } from 'react-router-dom';

const { Title, Text } = Typography;

export default class ManageTopic extends React.Component {
    state = {
        columns: [
            {
                title: 'Tiêu đề',
                dataIndex: 'title',
                key: 'title',
                render: (text, record) => <a href={'#'}>{text}</a>,
                width: 250,
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
        instance.post('/article/deletetopic', { id })
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
        instance.get('/article/topic', {})
            .then(res => {
                console.log(res.data);
                if (res.data.length > 0)
                    this.setState({
                        data: res.data.map((i, index) => ({
                            id: i.id,
                            key: index,
                            title: i.label,
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
                    <Title style={{ margin: 'auto' }}>Quản lý Topic</Title>
                </Row>
                <Col span={24}>
                    <Button type="primary" href='/admin/topic/add'>
                        Thêm mới
                    </Button>
                    <Table columns={this.state.columns} dataSource={this.state.data} />
                </Col>
            </>
        )
    }
}