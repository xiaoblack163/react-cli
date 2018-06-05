import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { store } from '../redux/store';


//views
import Layout  from '../view/Layout'
import TestView2 from '../view/TestView2'
import LoginView from '../view/loginView'


const Root = () => {
    return (
        <Provider store={store} >
            <Router history={browserHistory} >
                <Route path="/" component={Layout} >
                    <IndexRoute component={LoginView}/>
                    <Route path="login" component={LoginView}/>
                    <Route path="test2" component={TestView2}/>
                </Route>
            </Router>
        </Provider>
    )
}

export default Root
