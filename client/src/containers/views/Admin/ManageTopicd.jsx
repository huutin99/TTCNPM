import React from 'react';
import { instance } from '../../../axios.instance';
import { Row, Col, Typography, message, Table, Tag, Space, Button } from 'antd';
import moment from 'moment';
import { Link, Redirect } from 'react-router-dom';

const { Title, Text } = Typography;

export default class ManageTopicd extends React.Component {
    state = {
        columns: [
            {
                title: 'Tiêu đề',
                dataIndex: 'title',
                key: 'title',
                render: (text, record) => <a href={'/article/view/' + record.id}>{text}</a>,
                width: 250,
                ellipsis: true
            }
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
                <Col span={24}>
                    <Table columns={this.state.columns} dataSource={this.state.data} />
                </Col>
            </>
        )
    }
}