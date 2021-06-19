import { Form, Input, Button, Select, message, Upload, notification } from 'antd';
import React from 'react';
import { instance } from '../../../axios.instance';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Redirect } from 'react-router-dom';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import Grid from '@material-ui/core/Grid';
import 'antd/dist/antd.css';

const { Option } = Select;
const { Dragger } = Upload;

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
};
const tailLayout = {
    wrapperCol: { offset: 12, span: 12 },
};

export default class AddTopic extends React.Component {
    state = {
        value: '',
        label: ''
    }

    openNotification = placement => {
        const key = 'updatable';
        notification.info({
            message: `Thêm mới thành công`,
            description:
              'Thành công rồi nhé',
            placement,
          });
        setTimeout(() => {
            notification.info({
                message: `Thêm mới thành công`,
                description:
                  'Thêm mới thành công rồi nhé!',
                placement,
              });
        }, 1000);
      };

    componentDidMount = () => {
        instance.get('/article/topic', {})
            .then(res => this.setState({ category: res.data.map(i => (<Option key={i.value}>{i.label}</Option>)) }))
            .catch(err => console.log(err.response.data.message))
    }

    handleSave = () => {
        if (this.state.label === '') {
            message.error('Tiêu đề Topic không thể trống');
            return;
        }
        // console.log(this.state.imgSrc);
        instance.post('/article/addTopic', {
            value: this.state.value,
            label: this.state.label,
        })
            .then((res) => {
                this.openNotification('bottomRight')
            }, (error) => {
                message.error(error.response.data.message)
            });
    }

    render() {
        if (localStorage.getItem('user') === null) {
            message.error('Bạn chưa đăng nhập');
            return <Redirect to="/" />
        }
        if (JSON.parse(localStorage.getItem('user')).role === 'reader') {
            message.error('Bạn không thể thực hiện chức năng này');
            return <Redirect to="/" />;
        }
        const { loading, imageUrl } = this.state;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            
            <>
                {console.log(JSON.parse(localStorage.getItem('user')).id)}
                <Grid item xs={12}>
                    <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Thêm bài viết</h1>
                </Grid>
                <Grid item xs={12}>
                    <Form
                        style={{ marginTop: '20px' }}
                        layout='vertical'
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                    >
                        <Form.Item
                            label="value"
                            name="value"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the title!',
                                },
                            ]}
                        >
                            <Input onChange={e => this.setState({ value: e.target.value })} />
                        </Form.Item>
                        <Form.Item
                            label="Label"
                            name="label"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the title!',
                                },
                            ]}
                        >
                            <Input onChange={e => this.setState({ label: e.target.value })} />
                        </Form.Item>
                        <Form.Item style={{ textAlign: 'center' }}>
                            <Button type="primary" onClick={this.handleSave}>Submit</Button>
                        </Form.Item>
                    </Form>
                </Grid>
            </>
        )
    }
}


