import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// Components
import Home from './components/Home';
import Pets from './components/Pets';
import Upload from './components/Upload';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="navbar">
          <Link to="/contact" className="link">Contacto</Link>
          <Link to="/upload" className="link">Subir</Link>
          <Link to="/pets" className="link">Mascotas</Link>
          <Link to="/" className="link">Inicio</Link>
        </div>

        <Switch>
          <Route path="/upload" component={Upload} />
          <Route path="/contact" component={Contact} />
          <Route path="/pets" component={Pets} />
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
