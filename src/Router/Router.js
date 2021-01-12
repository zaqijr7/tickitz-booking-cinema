import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from '../Component/Navbar/Navbar';
import ForgotPass from '../Pages/Authentication/Forgot-Pass/ForgotPass';
import Signin from '../Pages/Authentication/Signin/Signin';
import Signup from '../Pages/Authentication/Signup/Signup';
import Home from '../Pages/Home/Home';
import MovieDetail from '../Pages/MovieDetail/MovieDetail';
import Order from '../Pages/Order/Order';
import Payment from '../Pages/Payment/Payment';
import Ticket from '../Pages/Ticket/Ticket';


class Router extends Component{

    render() {
        return (
            <Switch>
                    <Route exact path='/'>
                        <NavigationBar> 
                            <Home/>
                        </NavigationBar> 
                    </Route>
                    <Route exact path='/signin'>  
                        <Signin/> 
                    </Route>
                    <Route exact path='/signup'>  
                        <Signup/> 
                    </Route>
                    <Route exact path='/forgotpass'>  
                        <ForgotPass/>
                    </Route>
                    <Route exact path='/moviedetail'>  
                        <NavigationBar> 
                            <MovieDetail/>
                        </NavigationBar>
                    </Route>
                    <Route exact path='/order'>  
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
            </Switch>
        )
    }
}

export default Router;