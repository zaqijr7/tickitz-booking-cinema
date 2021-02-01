import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from '../Component/Navbar/Navbar';
import Admin from '../Pages/Admin/Admin';
import ForgotPass from '../Pages/Authentication/Forgot-Pass/ForgotPass';
import Signin from '../Pages/Authentication/Signin/Signin';
import Signup from '../Pages/Authentication/Signup/Signup';
import Home from '../Pages/Home/Home';
import MovieDetail from '../Pages/MovieDetail/MovieDetail';
import Order from '../Pages/Order/Order';
import OrderHistory from '../Pages/OrderHistory/OrderHistory';
import Payment from '../Pages/Payment/Payment';
import Profile from '../Pages/Profile/Profile';
import Ticket from '../Pages/Ticket/Ticket';
import PrivateRoute from './PrivateRoute';


class Router extends Component {

   render() {
      return (
         <Switch>
            <Route exact path='/'>
               <NavigationBar>
                  <Home />
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
            <PrivateRoute path='/moviedetail/:id' privateComponent={MovieDetail} />
            {/* <Route exact path='/moviedetail/:id'>  
                        <NavigationBar> 
                            <MovieDetail/>
                        </NavigationBar>
                    </Route> */}
            <Route exact path='/order/:id/:time/:idcard'>
               <NavigationBar>
                  <Order />
               </NavigationBar>
            </Route>
            <Route exact path='/payment'>
               <NavigationBar>
                  <Payment />
               </NavigationBar>
            </Route>
            <Route exact path='/ticket'>
               <NavigationBar>
                  <Ticket />
               </NavigationBar>
            </Route>
            <Route exact path='/profile'>
               <NavigationBar>
                  <Profile />
               </NavigationBar>
            </Route>
            <Route exact path='/order-history'>
               <NavigationBar>
                  <OrderHistory />
               </NavigationBar>
            </Route>
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