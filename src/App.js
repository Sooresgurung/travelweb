import React from 'react'
import NavBar from './NavBar';
import {Switch,Route} from 'react-router-dom'
import './index.css'
import Home from './Home'
import Service from './Service'
import About from './About'
import Contact from './Contact'
const App=()=>
{
    return(
        <>
        <NavBar></NavBar>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/services" component={Service}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>
        </Switch>
        
        </>
    )
}
export default App;