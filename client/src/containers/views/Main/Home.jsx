import React from 'react';
import './home.css';
import { instance } from '../../../axios.instance';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import { message, Input } from 'antd';

const { Search } = Input;

const useStyles = theme => ({
  root: {
    maxWidth: 250,
    flexGrow: 1,
    float: 'left',
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(5),
  },
  paper: {
    background: '#cfe8fc'
  }
});

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      allPost: [],
      allTopic: [],
    }
  }
  getTopic = () => {
    instance.get('/article/topic', {})
      .then(res => {
        if (res.data.length > 0)
          this.setState({ allTopic: res.data });
      })
      .catch(err => console.log(err.response.data.message))
  }
  renderTopic = () =>
    this.state.allTopic.map(item => (
      <MenuItem>{item.label}</MenuItem>
    ));

  getPost = () => {
    instance.get('/article/allArticle', {})
      .then(res => {
        if (res.data.length > 0)
          this.setState({ allPost: res.data });
      })
      .catch(err => console.log(err.response.data.message))
  }

  onSearch = value => {
    instance.get('/article/searchedArticle?text=' + value, {})
      .then(res => {
        if (res.data.length > 0)
          this.setState({ allPost: res.data });
      })
      .catch(err => console.log(err.response.data.message))
  };

  componentDidMount() {
    this.getPost();
    this.getTopic();
  }
  renderPost = () =>
    this.state.allPost.map(item => (
      <CardActionArea component="a" href={'/article/view/' + item.id}>
        <Card style={{ display: 'flex', marginBottom: '2rem' }}>
          <Hidden xsDown>
            <CardMedia style={{ width: 160 }} image={item.image} title={'test'} />
          </Hidden>
          <div style={{ flex: 1 }}>
            <CardContent className="title">
              <Typography component="h2" variant="h5">
                {item.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {item.createDate}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {item.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Đọc tiếp
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    ));
  renderTitleLink = () =>
    this.state.allPost.map(item => (
      <ListItem button>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText
          primary={item.title}
        />
      </ListItem>
    ));

  render() {
    const { classes } = this.props;
    console.log(this.state.allPost);
    return (
      <>
        <div style={{ width: '100%', textAlign: 'left', marginTop: '20px' }}>
        <Search placeholder="input search text" onSearch={this.onSearch} style={{ width: 200 }} />
        </div>
        <h1>Bài viết mới nhất</h1>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            {this.renderPost()}
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h2">
                Chủ đề
              </Typography>
              <MenuList>
                {this.renderTopic()}
              </MenuList>
            </Paper>
            <div className={classes.demo}>
              <List>
                {this.renderTitleLink()}
              </List>
            </div>
          </Grid>
        </Grid>
      </>
    )
  }
}
export default withStyles(useStyles, { withTheme: true })(Home);