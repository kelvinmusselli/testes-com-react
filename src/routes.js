import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListCost from './pages/ListCost';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={ListCost}></Route>
    </Switch>
  );
};
export default Routes;
