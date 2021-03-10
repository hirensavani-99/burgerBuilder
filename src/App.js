import React, { Component } from 'react'
import Layout from './components/Layout/Layout';
import Burgerbuilder from './containers/Burgerbuilder/Burgerbuilder';
import Checkout from './containers/Burgerbuilder/Checkout/Checkout'
import { Route, Switch } from 'react-router-dom'
import Orders from './containers/Burgerbuilder/Orders/Orders'
import Auth from './containers/Auth/Auth'

class App extends  Component {
  render() {
    return ( 
      <Layout>
        <Switch>
        <Route path='/orders'  component={Orders} /> 
        <Route path='/auth'  component={Auth} /> 
        <Route path='/' exact component={Burgerbuilder} /> 
        <Route path='/checkout'  component={Checkout}/>
        </Switch> 

      </Layout>

    )
  }
}


export default App;
