import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PagePdf from './pages/PagePdf';

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/cv" exact component={ PagePdf } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
  );
};

export default App;
