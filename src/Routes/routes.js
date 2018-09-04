import React from 'react'; 
import {BrowserRouter , Route, Switch} from 'react-router-dom'; 
import Header from './../Components/Header.js';
import ExpenseDashboardPage from './../Components/ExpenseDashboardPage.js';
import AddExpensePage from './../Components/AddExpensePage.js';
import EditExpensePage from './../Components/EditExpensePage.js';
import HelpPage from './../Components/HelpPage.js';
import NotFoundPage from './../Components/NotFoundPage.js';

const Routes  = () =>
(<BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path = '/' component={ExpenseDashboardPage} exact = {true}/>
            <Route path = '/create' component = {AddExpensePage} exact = {true}/>
            <Route path = '/edit' component = {EditExpensePage} exact = {true} />
            <Route path = '/help' component = {HelpPage} exact = {true}/>
            <Route component = {NotFoundPage} />    
        </Switch>
    </div>
    
</BrowserRouter>


);

export default Routes;