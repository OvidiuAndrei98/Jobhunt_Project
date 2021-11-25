import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from '../auth/Login';
import Register from '../auth/Register';
import HomePage from './HomePage';
import Footer from '../navigation/Footer';
import FindWork from '../jobs/FindWork';
import ContactInfo from '../profile/ContactInfo';
import MyProfile from '../profile/myProfile/MyProfile';
import ProfileSettings from '../profile/ProfileSettings';
import JobDetailsPage from '../jobs/JobDetailsPage';
import Apply from '../jobs/Apply';
import CreateCompanyAccount from '../company/CreateCompanyAccount';
import { CompanyProfile } from '../company/profile/CompanyProfile';
import PrivateRoute from '../../util/PrivateRoute';
import UserError from '../../util/UserError';
import { MyJobs } from '../company/jobs/MyJobs';

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
                    <PrivateRoute path="/user/profile-settings" component={ProfileSettings} />
                    <PrivateRoute path="/user/my-profile" component={MyProfile} />
                    <PrivateRoute path="/user/contact" component={ContactInfo} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register}/>
                    <PrivateRoute path="/work" component={FindWork}/>
                    <PrivateRoute path="/job/:id" component={JobDetailsPage}/>
                    <PrivateRoute path="/application" component={Apply}/>

                    <PrivateRoute path="/company/create-company-account" component={CreateCompanyAccount}/>
                    <PrivateRoute path="/company/profile" component={CompanyProfile}/>
                    <PrivateRoute path="/user-error" component={UserError}/>
                    <PrivateRoute path="/jobs" component={MyJobs}/>
                    
                </Switch>
            </Router>
        {/* <Footer/> */}
        </>
    );
};

export default Routes;