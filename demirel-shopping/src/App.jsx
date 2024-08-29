import './App.css'
import "./index.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import Contact from './components/Contact.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Team from './components/Team.jsx';
import AboutUs from './components/AboutUs.jsx';
import Signup from './components/Signup.jsx';

function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/product/:id" component={ProductDetail} />
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
