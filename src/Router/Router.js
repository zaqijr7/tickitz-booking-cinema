import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from '../Component/Navbar/Navbar';
import ForgotPass from '../Pages/Authentication/Forgot-Pass/ForgotPass';
import Signin from '../Pages/Authentication/Signin/Signin';
import Signup from '../Pages/Authentication/Signup/Signup';
import Home from '../Pages/Home/Home';
import MovieDetail from '../Pages/MovieDetail/MovieDetail';
import Order from '../Pages/Order/Order';


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
            </Switch>
        )
    }
}

export default Router;