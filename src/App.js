import React from 'react';
import { Route,Switch } from 'react-router-dom'
import './App.css';
import IndexPage from './components/IndexPage/IndexPage'
import InnerPage from './components/InnerPage/InnerPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Index" component={IndexPage} />
        <Route path="/jifcast" component={InnerPage} />
      </Switch>

    </div>
  );
}

export default App;
