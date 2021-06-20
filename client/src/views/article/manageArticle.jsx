import React from 'react';
import { instance } from '../../axios.instance';
import { Row, Col, Typography, message, Table, Tag, Space, Button } from 'antd';
import moment from 'moment';
import { Link, Redirect } from 'react-router-dom';

const { Title, Text } = Typography;

export default class ManageArticle extends React.Component {
    state = {
        columns: [
            {
                title: 'Tiêu đề',
                dataIndex: 'title',
                key: 'title',
                render: (text, record) => <a href={'/article/view/' + record.id}>{text}</a>,
                width: 250,
                ellipsis: true
            },
            {
                title: 'Tóm lượt',
                dataIndex: 'summary',
                key: 'summary',
                // render: text => <Text ellipsis>{text}</Text>,
                width: 300,
                ellipsis: true
            },
            {
                title: 'Ngày tạo',
                dataIndex: 'createDate',
                key: 'createDate',
                render: text => moment(text).add(6, 'hours').format('LLLL'),
                width: 250,
                ellipsis: true
            },
            {
                title: 'Hình ảnh',
                dataIndex: 'image',
                key: 'image',
                render: text => text ?
                    <img
                        alt='article-img'
                        src={process.env.REACT_APP_SERVER_HOST + text}
                        style={{ height: '50px' }}
                    /> :
                    <img
                        alt='article-img'
                        src={process.env.REACT_APP_SERVER_HOST + '/images/default.jpg'}
                        style={{ height: '50px' }}
                    />,
                width: 150,
                ellipsis: true,
            },
            {
                title: 'Danh mục',
                key: 'topic',
                dataIndex: 'topic',
                render: tags => (
                    <>
                        {tags.map(tag => (
                            <Tag color='volcano' key={tag.value}>
                                {tag.label}
                            </Tag>
                        ))}
                    </>
                ),
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
        instance.get('/article/authoredArticle', {})
            .then(res => {
                console.log(res.data);
                if (res.data.length > 0)
                    this.setState({
                        data: res.data.map((i, index) => ({
                            id: i.id,
                            key: index,
                            title: i.title,
                            summary: i.summary,
                            content: i.content,
                            createDate: i.createDate,
                            image: i.image,
                            topic: i.topic
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
                    <Title style={{ margin: 'auto' }}>Quản lý bài viết</Title>
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