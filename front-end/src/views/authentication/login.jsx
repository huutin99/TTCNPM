import { Form, Input, Button, Alert, message, Space } from 'antd';
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
        instance.post('/login', { ...values })
            .then((res) => {
                console.log(res);
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
                        label="Tài khoản"
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
                        label="Password"
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