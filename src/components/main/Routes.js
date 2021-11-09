import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from '../auth/Login';
import Register from '../auth/Register';
import HomePage from './HomePage';
import Footer from '../navigation/Footer';
import FindWork from '../jobs/FindWork';

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    {/* <PrivateRoute path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/settings" component={Settings} />
                    <PrivateRoute path="/company-applicants" component={Users} />
                    <PrivateRoute path="/edit-job" component={EditJob} />
                    <PrivateRoute path="/add-job" component={AddJob} /> */}
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register}/>
                    <Route path="/work" component={FindWork}/>
                </Switch>
            </Router>
        {/* <Footer/> */}
        </>
    );
};

export default Routes;