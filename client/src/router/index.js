import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from '../containers/layouts/Main'
import MainAdmin from '../containers/layouts/MainAdmin'

// views
import About from '../containers/views/Main/About'
import Home from '../containers/views/Main/Home'
import Login from '../containers/views/Main/Login'
import Signup from '../containers/views/Main/Signup'
import ViewArticle from '../containers/views/Main/viewArticle'
import Topic from '../containers/views/Main/topic'
// admin Views

import Dashboard from '../containers/views/Admin/Dashboard'
import Setting from '../containers/views/Admin/Setting'
import ManageArticle from '../containers/views/Admin/ManageArticle'
import ManageTopic from '../containers/views/Admin/ManageTopic'
import ManageUser from '../containers/views/Admin/ManageUser'
import EditArticle from '../containers/views/Admin/editArticle'
import EditUser from '../containers/views/Admin/editUser'
import AddArticle from '../containers/views/Admin/AddArticle'
import AddTopic from '../containers/views/Admin/AddTopic'



export default () => {

  return (
    <Router>
      <Switch>
        <Route path='/admin/:path?/' exact>
          <MainAdmin>
            <Switch>
              <Route path='/admin' exact component={Dashboard} />
              <Route path='/admin/setting' component={Setting} />
              <Route path='/admin/bai-viet' component={ManageArticle}>
                
              </Route>
              <Route path='/admin/topic' component={ManageTopic} />
              <Route path='/admin/nguoi-dung' component={ManageUser} />
              <Route component={() => (<div>404 Main Admin</div>)} exact path='/admin/*' />
            </Switch>
          </MainAdmin>
        </Route>
        <Route path='/admin/bai-viet/edit/:path?/' exact>
          <MainAdmin>
            <Route path='/admin/bai-viet/edit/:id' component={EditArticle}/>
          </MainAdmin>
        </Route>
        <Route path='/admin/user/edit/:path?/' exact>
          <MainAdmin>
            <Route path='/admin/user/edit/:id' component={EditUser}/>
          </MainAdmin>
        </Route>
        <Route path='/admin/bai-viet/add/:path?/' exact>
          <MainAdmin>
            <Route path='/admin/bai-viet/add/' component={AddArticle}/>
          </MainAdmin>
        </Route>
        <Route path='/admin/topic/add/:path?/' exact>
          <MainAdmin>
            <Route path='/admin/topic/add/' component={AddTopic}/>
          </MainAdmin>
        </Route>
        <Route>
          <Main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/article/view/:id' component={ViewArticle} />
              <Route path='/topic/:id' component={Topic} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Route component={() => (<div>404 Main</div>)} exact path="/*" />
            </Switch>
          </Main>
        </Route>


      </Switch>
    </Router>
  )

}

