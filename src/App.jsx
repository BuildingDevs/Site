import './App.scss';

import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import HeroJumper from './HeroJumper';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch className='Page'>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/products' component={Products} />
        <Route path='/herojumper' component={HeroJumper} />
      </Switch>
    </div>
  );
}

export default App;
