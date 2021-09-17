import React from 'react';
import './App.css';
import Sidebar from './Component/Sidebar/Sidebar';
import Chat from './Component/Chat/Chat';
import ChatInitial from './Component/ChatInitial/ChatInitial';
import Login from './Component/Login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">

      {
        !user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Router>

              {/* Sidebar component */}
              <Sidebar />

              <Switch>
                <Route path="/rooms/:roomId">
                  {/* Chat component */}
                  <Chat />
                </Route>

                <Route path="/">
                  <ChatInitial />
                </Route>
              </Switch>

            </Router>
          </div>
        )
      }

    </div>
  );
}

export default App;
