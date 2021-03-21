import { useState } from 'react'
import './App.css';
import Header from './components/Header'
import CalcForm from './components/CalcForm'
import Breakdown from './Breakdown'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div className="container">
        <Header />
      </div>
      <Switch>
          <Route path='/' exact component={CalcForm} />
          <Route path='/breakdown' component={Breakdown}/>
        </Switch>
    </Router>
  );
}

export default App;
