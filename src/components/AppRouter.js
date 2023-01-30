import React from 'react';
import { BrowserRouter, Route ,Switch } from 'react-router-dom';

const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <Header />
        
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route  component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
  );


  export default AppRouter ;