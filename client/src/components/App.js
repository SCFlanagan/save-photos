import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Navbar from './Navbar';
import Landing from './Landing';
import Home from './Home';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    
    render() {
        return (
            <div>
                <Navbar />
                <BrowserRouter>
                    <div className='container'>
                        <Route exact path='/' component={Landing}></Route>
                        <Route exact path='/home' component={Home}></Route>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);