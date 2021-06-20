import React from 'react';
import { instance } from '../../../axios.instance';
import Typography from '@material-ui/core/Typography';
import { Form, Input, Button, Radio, Select, message, Upload, notification } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { combineReducers } from 'redux';
import './viewArticle.css';

 

export default class ViewArticle extends React.Component {
    state = {
        rateing: '',
        uid: '',
        aid: ''

    }
    openNotification = placement => {
        const key = 'updatable';
        notification.info({
            message: `Đánh giá thành công`,
            description:
              'Thành công rồi nhé',
            placement,
          });
        setTimeout(() => {
            notification.info({
                message: `Đánh giá thành công`,
                description:
                  'Đánh giá thành công rồi nhé!',
                placement,
              });
        }, 1000);
      };
      openWarn = placement => {
        const key = 'updatable';
        notification.warning({
            message: `Bạn đã đánh giá rồi`,
            description:
              'Bạn đã đánh giá rồi',
            placement,
          });
        setTimeout(() => {
            notification.warning({
                message: `Bạn đã đánh giá rồi`,
                description:
                  'Bạn đã đánh giá rồi',
                placement,
              });
        }, 1000);
      };

    componentDidMount = () => {
        instance.get('/article/view?id=' + this.props.match.params.id, {})
            .then(res => {
                this.setState({
                    data: res.data
                });
                instance.post('/article/incView', { id: this.props.match.params.id })
                    .then(res => { })
                    .catch(err => console.log(err.response.data.message))
            })
            .catch(err => console.log(err.response.data.message));
        instance.get('/article/allComment?aid=' + this.props.match.params.id, {})
            .then(res =>
                this.setState({ allcomment: res.data.map(i => (<li >{moment(i.time).add(6, 'hours').format('LLL')} - {i.name}: {i.content}</li>)) })
            )
            .catch(err => console.log(err.response.data.message))
    }

    handleRate = () => {
        // console.log(this.state.imgSrc);
        console.log(this.state.rate);

        instance.post('/article/rate', {
            muid: JSON.parse(localStorage.getItem('user')).id,
            maid: this.props.match.params.id,
            mrating: this.state.rate
        })
        .then(res => { 
            this.openNotification('bottomRight')    
        })
        .catch( 
        )
    }
    handleComment = () => {
        console.log(JSON.parse(localStorage.getItem('user')).id);

        instance.post('/article/comment', {
            muid: JSON.parse(localStorage.getItem('user')).id,
            maid: this.props.match.params.id,
            mcontent: this.state.comment
        })
        .then(res => { 
            window.location.reload();   
        })
        .catch( 
        )
    }

    render() {
        console.log(this.state.data);
        return (
            <>
                {this.state.data &&
                <>
                    <img src={this.state.data.image} alt="avatar" style={{ width: '100%' }} />
                    <Typography style={{ textAlign: "Left", marginTop: '2rem' }} variant="h3" component="h2">
                        {this.state.data.title}
                    </Typography>
                    <Typography style={{ textAlign: "Left" }} variant="subtitle1" gutterBottom>
                        {moment(this.state.data.createDate).add(6, 'hours').format('LLLL')}
                    </Typography>
                    {
                        (localStorage.getItem('user'))?
                        <>
                        <Form
                        style={{ marginTop: '20px' }}
                        layout='vertical'
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                    >
                        <Form.Item
                        name="sex"
                        rules={[
                            {
                                required: true,
                                message: 'Please check this option!',
                            },
                        ]}
                    >
                      <Radio.Group onChange={e => this.setState({ rate: e.target.value })} style={{ marginTop: 16 }}>
                        <Radio.Button value="1">1 sao</Radio.Button>
                        <Radio.Button value="2">2 sao</Radio.Button>
                        <Radio.Button value="3">3 sao</Radio.Button>
                        <Radio.Button value="4">4 sao</Radio.Button>
                        <Radio.Button value="5">5 sao</Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                        <Form.Item style={{ textAlign: 'center' }}>
                            <Button type="primary" onClick={this.handleRate}>Đánh giá</Button>
                        </Form.Item>
                    </Form>
                        </>
                        
                        :
                        <>
                        <Button type="link" size='large' href='/login' color="inherit">Đăng nhập để đánh giá</Button>
                        </>
                        }
                    <Typography style={{ fontWeight: "Bold", textAlign: "Left"  }} variant="body1" gutterBottom>
                        {this.state.data.summary}
                    </Typography>
                    <hr></hr>
                    <Typography style={{ textAlign: "justify"  }} variant="body1" gutterBottom>
                    <p dangerouslySetInnerHTML={{ __html: this.state.data.content }}></p>
                    </Typography>
                    <hr></hr>
                    <h3>Bình Luận</h3>
                    <ul style={{ fontSize: "20px"  }}>
                    {this.state.allcomment}
                    </ul>
                    {
                        (localStorage.getItem('user'))?
                        <>
                        <Form
                            style={{ marginTop: '20px' }}
                            layout='vertical'
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                        >
                            <Form.Item
                                label="Bình luận"
                                name="title"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input the title!',
                                    },
                                ]}
                                >
                                <Input onChange={e => this.setState({ comment: e.target.value })} />
                            </Form.Item>
                            <Form.Item style={{ textAlign: 'center' }}>
                                <Button type="primary" onClick={this.handleComment}>Gửi</Button>
                            </Form.Item>
                        </Form>                        </>
                        
                        :
                        <>
                        <Button type="link" size='large' href='/login' color="inherit">Đăng nhập để bình luận</Button>
                        </>
                        }
                    
                </>
                }
            </>
        )
    }
}