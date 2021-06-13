import React from 'react';
import { instance } from '../../axios.instance';
import { Row, Col, Typography, Tag } from 'antd';
import moment from 'moment';

const { Title } = Typography;

export default class ViewArticle extends React.Component {
    state = {}

    componentDidMount = () => {
        instance.get('/article/view?id=' + this.props.match.params.id, {})
            .then(res => {
                // console.log(res.data);
                this.setState({
                    data: res.data
                });
                instance.post('/article/incView', { id: this.props.match.params.id })
                    .then(res => { })
                    .catch(err => console.log(err.response.data.message))
            })
            .catch(err => console.log(err.response.data.message));
    }

    render() {
        // console.log(this.state.data);
        return (
            <>
                {this.state.data &&
                    <>
                        <Row style={{ maxWidth: '1000px', margin: 'auto', marginTop: '30px' }}>
                            <Col span={8}>
                                {this.state.data.image ?
                                    <img
                                        alt='article-img'
                                        src={process.env.REACT_APP_SERVER_HOST + this.state.data.image}
                                        style={{ width: '100%' }}
                                    /> :
                                    <img
                                        alt='article-img'
                                        src={process.env.REACT_APP_SERVER_HOST + '/images/default.jpg'}
                                        style={{ width: '100%' }}
                                    />
                                }
                            </Col>
                            <Col span={1}>
                            </Col>
                            <Col span={15}>
                                {this.state.data.topic.map(i => (<Tag color="#f50">{i}</Tag>))}
                                <br />
                                <small>{this.state.data.name} - {moment(this.state.data.createDate).add(6, 'hours').format('LLLL')}</small>
                                <Title level={3} style={{ marginBottom: '5px' }}>{this.state.data.title}</Title>
                                <i style={{ fontSize: 'small' }}>{this.state.data.summary}</i>
                            </Col>
                        </Row>
                        <Row style={{ maxWidth: '1000px', margin: 'auto', marginTop: '30px' }}>
                            <p dangerouslySetInnerHTML={{ __html: this.state.data.content }}></p>
                        </Row>
                    </>
                }
            </>
        )
    }
}