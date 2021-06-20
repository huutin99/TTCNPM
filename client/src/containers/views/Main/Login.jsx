import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Form, message } from 'antd';
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


const cookies = new Cookies();

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

const paper = {
  marginTop: "5rem",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
const avatar = {
  width: '100%', // Fix IE 11 issue.
  marginTop: "0.5rem",
};
const form = {
  width: '100%', // Fix IE 11 issue.
  marginTop: "0.5rem",
};
const submit = {
  margin: "1rem 0rem 0.5rem",
};


class Login extends React.Component {
  state = {
  };

  componentDidMount = () => {

  };


  onFinish = (values) => {
      // console.log(values);
      instance.post('/login', { ...values })
          .then((res) => {
              console.log(res.data.user);
              cookies.set('token', res.data.token, { path: '/', maxAge: 6 * 60 * 60, httpOnly: false, secure: false, sameSite: false });
              this.props.onAddUser(res.data.user);
              window.location.reload();
          })
          .catch(err => console.log(err.response.data.message));
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
          Đăng nhập
        </Typography>
        <Form className="login-form"
        name="basic"
        initialValues={{
            remember: false,
        }}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}>
          <Form.Item
              name="username"
              rules={[
                  {
                      required: true,
                      message: 'Hãy nhập tài khoản!',
                  },
              ]}
          >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Tài khoản"
                autoFocus
              />
          </Form.Item>
          <Form.Item
              name="password"
              rules={[
                  {
                      required: true,
                      message: 'Hãy nhập mật khẩu!',
                  },
              ]}
          >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Mật khẩu"
                type="password"
              />
          </Form.Item>
          <Form.Item style={{ textAlign: 'center' }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ 
              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
              boxShadow: '0 2 0 2', }}
          >
            Đăng nhập
          </Button>
          </Form.Item>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Bạn không có tài khoản? Đăng ký tại đây"}
              </Link>
            </Grid>
          </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);