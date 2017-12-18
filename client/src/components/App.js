import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './Navbar';

const Dashboard = () => <h2>Dashboard</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Route exact path='/' component={Landing}></Route>
                    <Route exact path='/dashboard' component={Dashboard}></Route>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;