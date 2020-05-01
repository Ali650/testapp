import React from 'react';
import { Route,Switch } from 'react-router-dom'
import './App.css';
import IndexPage from './components/IndexPage/IndexPage'
import InnerPage from './components/InnerPage/InnerPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/jifcast" component={InnerPage} />
        <Route path="/" component={IndexPage} />
      </Switch>

    </div>
  );
}

export default App;
