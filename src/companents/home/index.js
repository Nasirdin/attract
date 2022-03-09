import React from 'react';
import { Route, Switch } from 'react-router'
import Header from '../header';
import Repo from '../repo';
import './style.scss';

const Home = () => {
    return (
        <div className='home'>
            <Header/>
            <Switch>
              <Route exact path='/home/repositories' component={Repo}/>
              {/* <Route exact path='/repositories' component={Repo}/>
              <Route exact path='/repositories' component={Repo}/> */}
            </Switch>
            <div className='container'>
            </div>
        </div>
    )
}

export default Home;