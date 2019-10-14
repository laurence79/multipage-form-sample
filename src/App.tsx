import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { RegisterFormRoute } from './routes/register/RegisterFormRoute';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <RegisterFormRoute />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
