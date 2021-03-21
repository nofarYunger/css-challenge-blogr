import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader.jsx'
import Home from './pages/Home.jsx';
function App() {
  return (
    <Router>
      <AppHeader />
      <main className="App">
        <Switch>
          {/* <Route component={Leads} path="/lead" /> */}
          <Route component={Home} path="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
