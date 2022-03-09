import React from 'react';
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import Login from './companents/login';
import Home from './companents/home';
import './app.scss';
import Img from './Octocat.png';


const App = () => {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Login}/>
              <Route exact path='/login' component={Home}/>
          </Switch>git 
        </BrowserRouter>
        <img className='app__img' src={Img} alt='github-img'/>
      </div>
    )
}

export default App;