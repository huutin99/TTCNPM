import React from 'react';
import { instance } from '../../axios.instance';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { message } from 'antd';

const handleLogout = () => {
  // console.log('here')
  instance.post('/logout', {})
      .then(res => message.success(res.data))
      .catch(err => message.error(err.response.data.message));
  localStorage.removeItem('user');
}


export default class Header extends React.Component {
  constructor(props) {
    super(props);
        
        this.state = {
            allMenus: [],   
        }
     }
  getTopic = () => {
    instance.get('/article/topic', {})
        .then(res => {
            if (res.data.length > 0)
              this.setState({ allMenus: res.data });
        })
        .catch(err => console.log(err.response.data.message))
  }

  componentDidMount() {
    this.getTopic();
  }

  renderMenu = () => 
    this.state.allMenus.map(item => (
      <Link color="white" to="/"
      style={{ flexGrow: 1, color: 'white', textDecoration: 'none', fontSize: "20px" }}>
        {item.label}
      </Link>
    ));
  
  render() {
   
    return (
      <AppBar style={{ 
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 0 0 0', }} 
        className={"mainmenu"} 
        position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton edge="start" 
            style={{ 
              marginRight: '0.5rem', }} 
            className={'menuButton'} 
            color="inherit" 
            aria-label="menu">
              <Link className={'menu'}
              style={{ 
                flexGrow: 1,
                color: 'white',
                textDecoration: 'none',
                fontSize: "20px", }}  
              color="white" 
              to="/">
                <HomeIcon style={{ fontSize: 30 }}/>
              </Link>
            </IconButton>
            <Typography 
            style={{ 
              flexGrow: 1,
              color: 'white',
              textDecoration: 'none',
              fontSize: "20px", }} 
            className={'menu'} variant="h6" >
              {
                (localStorage.getItem('user'))?
                <>
                {JSON.parse(localStorage.getItem('user')).name}
                </>
                :
                <>
                ttcnpm 202 1811193-react
                </>
              }
              
            </Typography>
            {
              (localStorage.getItem('user'))?
              <>
              <Button type="link" size='large' href='/admin' color="inherit">Quản lý</Button>
              <Button type="link" size='large' href='/login' onClick={handleLogout} color="inherit">Đăng xuất</Button>
              </>
              
              :
              <>
              <Button type="link" size='large' href='/login' color="inherit">Đăng nhập</Button>
              <Button type="link" size='large' href='/signup' color="inherit">Đăng ký</Button>
              </>
            }
            
            
          </Toolbar>
        </Container>
      </AppBar>
    )
  }

}