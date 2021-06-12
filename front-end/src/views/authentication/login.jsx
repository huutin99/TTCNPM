import { Form, Input, Button, Alert, message, Space } from 'antd';
import React from 'react';
import { instance } from '../../axios.instance';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { Redirect } from 'react-router-dom';

const cookies = new Cookies();

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 0, span: 24 },
};

class LoginPage extends React.Component {
    state = {
    }

    componentDidMount = () => {

    }

    onFinish = (values) => {
        // console.log(values);
        instance.post('/login', { ...values })
            .then((res) => {
                // console.log(res.data.user);
                message.success(res.data.mes);
                cookies.set('token', res.data.token, { path: '/', maxAge: 6 * 60 * 60, httpOnly: false, secure: false, sameSite: false });
                this.props.onAddUser(res.data.user);
            })
            .catch((error) => message.error(error.response.data.message))
    };
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render() {
        if (localStorage.getItem('user') !== null) return <Redirect to="/" />
        return (
            <>
                <h1 style={{ marginTop: '20px', textAlign: 'center' }}>Đăng nhập</h1>
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
                    <Form.Item {...tailLayout} style={{ textAlign: 'center' }}>
                        <Button type="primary" htmlType="submit">
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddUser: user => {
            dispatch(actions.addUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);