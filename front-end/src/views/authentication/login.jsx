import { Form, Input, Button, Alert, message, Space } from 'antd';
import React from 'react';
import { instance } from '../../axios.instance';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 10, span: 14 },
};

export default class LoginPage extends React.Component {
    state = {
    }

    componentDidMount = () => {

    }

    onFinish = (values) => {
        console.log(values);
        instance.post('/login', { ...values })
            .then((res) => {
                message.success(res.data.mes);
                cookies.set('token', res.data.token, { path: '/', maxAge: 6 * 60 * 60, httpOnly: false, secure: false, sameSite: false });
            })
            .catch((error) => message.error(error.response.data.message))
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
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}