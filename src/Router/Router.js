/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from '../Component/Navbar/Navbar';
import Admin from '../Pages/Admin/Admin';
import ForgotPass from '../Pages/Authentication/Forgot-Pass/ForgotPass';
import Signin from '../Pages/Authentication/Signin/Signin';
import Signup from '../Pages/Authentication/Signup/Signup';
import Home from '../Pages/Home/Home';
import MovieDetail from '../Pages/MovieDetail/MovieDetail';
import ResetPass from '../Pages/ResetPassword/ResetPass';
import Order from '../Pages/Order/Order';
import OrderHistory from '../Pages/OrderHistory/OrderHistory';
import Payment from '../Pages/Payment/Payment';
import Profile from '../Pages/Profile/Profile';
import Ticket from '../Pages/Ticket/Ticket';
import ViewAll from '../Pages/ViewAll';
import PrivateRoute from './PrivateRoute';

class Router extends Component {
  render () {
    return (
         <Switch>
            <Route exact path='/'>
               <NavigationBar>
                  <Home />
               </NavigationBar>
            </Route>
            <Route exact path='/home/viewall'>
               <NavigationBar>
                  <ViewAll/>
               </NavigationBar>
            </Route>
            <Route exact path='/signin'>
               <Signin />
            </Route>
            <Route exact path='/signup'>
               <Signup />
            </Route>
            <Route exact path='/forgotpass'>
               <ForgotPass />
            </Route>
            <Route exact path='/reset'>
               <ResetPass />
            </Route>
            <PrivateRoute exact path='/moviedetail/:id' privateComponent={MovieDetail} />
            <PrivateRoute exact path='/moviedetail/:id/order/' privateComponent={Order} />
            <PrivateRoute exact path='/payment' privateComponent={Payment} />
            <PrivateRoute exact path='/ticket' privateComponent={Ticket} />
            <PrivateRoute exact path='/profile' privateComponent={Profile} />
            <PrivateRoute exact path='/profile/order-history' privateComponent={OrderHistory} />
            <PrivateRoute path='/admin' privateComponent={Admin} />
            <Route exact path='*'>
               <NavigationBar>
                  <Home />
               </NavigationBar>
            </Route>
         </Switch>
    )
  }
}

export default Router;
