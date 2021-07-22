import React from 'react';

// Components
import Home from './components/Home';
import Pets from './components/Pets';
import Upload from './components/Upload';
import Contact from './components/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='navbar'>
        <div>
          <Link to="/">Inicio</Link>
          <Link to="/pets">Mascotas</Link>
          <Link to="/upload">Subir</Link>
          <Link to="/contact">Contacto</Link>
        </div>

        <Switch>
          <Route path="/upload">
            <Upload />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/pets">
            <Pets />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
