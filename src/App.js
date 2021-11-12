import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PagePdf from './pages/PagePdf';

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/cv" exact component={ PagePdf } />
          <Route path="/404" component={ NotFound } />
          <Redirect to='/404' />
        </Switch>
      </BrowserRouter>
  );
};

export default App;
