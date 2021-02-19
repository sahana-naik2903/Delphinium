import React from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
  return(
    <Router>
     <Header />
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/home" component={Home}/>
     </Switch>
     <Footer />
    </Router>
  )
}
export default App;