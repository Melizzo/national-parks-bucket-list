import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Login from './Login'
import NotFound from '../components/NotFound'
import NPContainer from './NPContainer'
import Nav from '../components/Nav'

class App extends Component {
  render() {
    const { user, np } = this.props
    return (
      <section className="app-container">
        <h1>National Parks Bucket List</h1>

        {!user.username && <Redirect to="/login" />}
        {(np.length>0) && <Redirect to="/" />}

        <Switch>
          <Route exact path = '/login' component={Login}/>

          <Route exact path = '/'>
              <NPContainer/>
              <Nav/>
          </Route>

          <Route component={NotFound} />
        </Switch>

      </section>
    )
  } 
}

export const mapStateToProps = (state) => ({
  user: state.user,
  np: state.np
})

export default connect(mapStateToProps, null)(withRouter(App));
