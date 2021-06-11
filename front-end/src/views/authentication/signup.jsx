import { Form, Input, Button, message } from 'antd';
import React from 'react';
import { instance } from '../../axios.instance';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default class LoginPage extends React.Component {
    state = {
    }

    componentDidMount = () => {

    }

    onFinish = (values) => {
        // console.log('Success:', values);
        if (values.email !== '') {
            var re = /\S+@\S+\.\S+/;
            if (!re.test(values.email)) {
                message.error('Email không hợp lệ');
                return;
            };
        };
        instance.post('/signup', { ...values })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    };
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render() {
        return (
            <>
                <Form
                    style={{ marginTop: '20px' }}
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: false,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Họ và tên"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Nhập lại mật khẩu"
                        name="repassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please type your password again!',
                            },
                        ]}
                    >
                        <Input.Password />  
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: false,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Gửi
                    </Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}
