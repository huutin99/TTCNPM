import React from 'react';
import { instance } from '../../axios.instance';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DescriptionIcon from '@material-ui/icons/Description';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { message } from 'antd';

const handleLogout = () => {
  // console.log('here')
  instance.post('/logout', {})
      .then(res => message.success(res.data))
      .catch(err => message.error(err.response.data.message));
  localStorage.removeItem('user');
}

export const mainListItems = (
  <div>
    <ListItem button>
        <ListItemIcon>
          <Link 
        style={{ color: "gray", flexGrow: 1, textDecoration: 'none', fontSize: "20px" }}
        to="/admin"><DashboardIcon /></Link>
        </ListItemIcon>
        <Link 
        style={{ color: "black", flexGrow: 1, textDecoration: 'none', fontSize: "20px" }}
        to="/admin"><ListItemText primary="Tổng quan" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <Link 
        style={{ color: "gray", flexGrow: 1, textDecoration: 'none', fontSize: "20px" }}
        to="/admin/bai-viet"><DescriptionIcon /></Link>
      </ListItemIcon>
      <Link 
        style={{ color: "black", flexGrow: 1, textDecoration: 'none', fontSize: "20px" }}
        to="/admin/bai-viet"><ListItemText primary="Bài viết" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Link 
        style={{ color: "gray", flexGrow: 1, textDecoration: 'none', fontSize: "20px" }}
        to="/admin/topic"><CreateNewFolderIcon /></Link>
      </ListItemIcon>
      <Link 
        style={{ color: "black", flexGrow: 1, textDecoration: 'none', fontSize: "20px" }}
        to="/admin/topic"><ListItemText primary="Topic" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Link 
        style={{ color: "gray", flexGrow: 1, textDecoration: 'none', fontSize: "20px" }}
        to="/admin/bai-viet"><GroupIcon /></Link>
      </ListItemIcon>
      <Link 
        style={{ color: "black", flexGrow: 1, textDecoration: 'none', fontSize: "20px" }}
        to="/admin/nguoi-dung"><ListItemText primary="Người dùng" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Link 
        style={{ color: "gray", flexGrow: 1, textDecoration: 'none', fontSize: "20px" }}
        to="/"><HomeIcon /></Link>
      </ListItemIcon>
      <Link 
        style={{ color: "black", flexGrow: 1, textDecoration: 'none', fontSize: "20px" }}
        to="/"><ListItemText primary="Trang chủ" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <Button type="link" size='large' href='/login' onClick={handleLogout} color="inherit">Đăng xuất</Button>
    </ListItem>
  </div>
);