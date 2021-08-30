import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="body">
      <BrowserRouter>
        <Switch>
          <Route to="/" exact>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
