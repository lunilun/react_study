import React from 'react';
import Navbar from './components/Navbar';
import routes from './route';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='container'>
          <Switch>
            {routes.map(route => {
                return (
                  <Route path={route.path} exact key={route.path}>
                    <route.conponent/>
                  </Route>
                )
            })}
        </Switch>
        </div>
      
      </div>
    </Router>
  );
}

export default App;
