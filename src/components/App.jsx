import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import TomagotchiStatus from './TomagotchiStatus';
import Header from './Header';
import '../scss/app.scss';

function App(){
  return (
    <div className='universal'>
      <Header/>
      <Switch>
        <Route component={TomagotchiStatus}/>
        <Route component={Error404}/>
      </Switch>
      <h1 style={{height: '50px'}}></h1>
    </div>
  );
}

export default App;
