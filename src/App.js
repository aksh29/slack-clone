import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Chat from './Chat.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        {/* Header */}
        <div className='app_body'>
          <Sidebar/>
          {/* SideBar */}
          <Switch>
            <Route path='/rooms/:roomId'>
              <Chat/>
            </Route>
            <Route path='/'>
              <Chat/>
            </Route>
          </Switch>
          {/* ChatScreen --> Chat Screen*/}
        </div>
      </Router>
    </div>
  );
}

export default App;
