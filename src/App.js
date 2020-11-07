import React, {useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Chat from './Chat.js';
import Login from './login';
import './App.css';
import {useStateValue} from './StateProvider';


function App() {
  const [{user},dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (<Login/>) : (
        <>
            <Header/>
            <div className='app_body'>
              <Sidebar/>
              <Switch>
                <Route path='/rooms/:roomId'>
                  <Chat/>
                </Route>
                <Route path='/'>
                  <Chat/>
                </Route>
              </Switch>
            </div>
            </>
          )
        }
      </Router>
    </div>
  );
}

export default App;
