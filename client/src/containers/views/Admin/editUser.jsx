import { Form, Input, Button, Select, message, Upload, notification } from 'antd';
import React from 'react';
import { instance } from '../../../axios.instance';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Redirect } from 'react-router-dom';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Option } = Select;



export default class EditUser extends React.Component {
    state = {
        username: '',
        password: [],
        name: '',
        email: '',
        role:''
    }

    formRef = React.createRef();

    componentDidMount = () => {
        this.getUserData()
    }

    openNotification = placement => {
        const key = 'updatable';
        notification.info({
            message: `Sửa thành công`,
            description:
              'Sửa thành công rồi nhé',
            placement,
          });
        setTimeout(() => {
            notification.info({
                message: `Sửa thành công`,
                description:
                  'Sửa thành công rồi nhé!',
                placement,
              });
        }, 1000);
      };

      getUserData = () => {
        instance.get('/article/edituser?id=' + this.props.match.params.id, {})
            .then(res => {
                // console.log('hasdfyqieuwryi', res.data);
                this.setState({
                    username: res.data.username,
                    password: res.data.password,
                    name: res.data.name,
                    email: res.data.email,
                    role: res.data.role
                });
                // console.log(res.data.topic);
                this.formRef.current.setFieldsValue({
                    username: res.data.username,
                    password: res.data.password,
                    name: res.data.name,
                    email: res.data.email,
                    role: res.data.role
                });
            })
            .catch(err => message.error(err.response.data.message));
    }

    handleSave = () => {
        if (this.state.title === '') {
            message.error('Tiêu đề bài viết không thể trống');
            return;
        }
        // console.log(this.state);
        instance.post('/article/saveEditedUser', {
            id: this.props.match.params.id,
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            email: this.state.email,
            role: this.state.role
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
                <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Chỉnh sửa thông tin</h1>
                <Form
                    style={{ marginTop: '20px' }}
                    layout='vertical'
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    ref={this.formRef}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the title!',
                            },
                        ]}
                    >
                        <Input onChange={e => this.setState({ username: e.target.value })} value={this.state.username} />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the title!',
                            },
                        ]}
                    >
                        <Input onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
                    </Form.Item>
                    <Form.Item
                        label="Tên"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the title!',
                            },
                        ]}
                    >
                        <Input onChange={e => this.setState({ name: e.target.value })} value={this.state.name} />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the title!',
                            },
                        ]}
                    >
                        <Input onChange={e => this.setState({ email: e.target.value })} value={this.state.email} />
                    </Form.Item>
                    <Form.Item
                        label="Quyền"
                        name="role"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the title!',
                            },
                        ]}
                    >
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder={this.state.role}
                            optionFilterProp="children"
                            onChange={e => this.setState({ role: e })}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="admin">Admin</Option>
                            <Option value="reader">Người đọc</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item style={{ textAlign: 'center' }}>
                        <Button type="primary" onClick={this.handleSave}>Submit</Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}