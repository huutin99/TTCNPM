import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Form, message, Radio, notification  } from 'antd';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { instance } from '../../../axios.instance';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import { Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';

const cookies = new Cookies();

const layout = {
};
const tailLayout = {
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
      ttcnpm 202 1811193-react
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
const key = 'updatable';
const openNotification = ( value ) => {
  notification.open({
    key,
    message: value,
    description: 'Chuyển đến trang đăng nhập để đăng nhập nhé!',
  });
  setTimeout(() => {
    notification.open({
      key,
      message: value,
      description: 'Chuyển đến trang đăng nhập để đăng nhập nhé!',
    });
  }, 1000);
};



class Signup extends React.Component {
  state = {
  };

  componentDidMount = () => {

  };


  onFinish = (values) => {
      // console.log('Success:', values);
      if (values.email !== '') {
          var re = /\S+@\S+\.\S+/;
          if (!re.test(values.email)) {
              message.error('Email không hợp lệ');
              return;
          };
      };
      if (values.password !== values.repassword) {
          alert("Passwords don't match");
      }
      instance.post('/signup', { ...values })
          .then((response) => {
              console.log(response);
              openNotification("Thành công");
          }, (error) => {
              console.log(error);
          });
      
  };
  onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
  };
  render(){
    if (localStorage.getItem('user') !== null) {
      if(JSON.parse(localStorage.getItem('user')).role == "admin") return <Redirect to="/admin" />;
      else return <Redirect to="/" />
    }
    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{ marginTop:"2rem" }} className={'paper'}>
        <Typography component="h1" variant="h5">
          Đăng ký
        </Typography>
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
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="firstName"
                          label="Họ và tên"
                          autoFocus
                        />
                    </Form.Item>
                    <Form.Item
                        name="sex"
                        rules={[
                            {
                                required: true,
                                message: 'Please check this option!',
                            },
                        ]}
                    >
                      <Radio.Group size="small" style={{ marginTop: 16 }}>
                        <Radio.Button value="male">Nam</Radio.Button>
                        <Radio.Button value="Female">Nữ</Radio.Button>
                        <Radio.Button value="orther">Khác</Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          label="Mật khẩu"
                          type="password"
                          id="password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="repassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please type your password again!',
                            },
                        ]}
                    >
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          label="Nhập lại Mật khẩu"
                          type="password"
                          id="password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: false,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Email"
                          name="email"
                          autoComplete="email"
                        />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button 
                        style={{ 
                          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                          boxShadow: '0 2 0 2', }}
                        type="primary" htmlType="submit">
                            Gửi
                        </Button>
                        <Grid container justify="flex-end">
                          <Grid item>
                            <Link href="/login" variant="body2">
                              Bạn đã có tài khoản? Đăng nhập
                            </Link>
                          </Grid>
                        </Grid>
                    </Form.Item>
                </Form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);