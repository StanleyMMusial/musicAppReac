import React from 'react'
import {Route} from 'react-router-dom'
import { LandingPage } from "./Components/mainPage";
import NavBar  from "./Components/NavBar/navigation"
import MusicApp from "./Components/music"
import {ProtectedRoute} from "./Components/Protected.route"
import './css/App.css';

function App() {
  return (
    <div className="App">
        <Route path='/' component={NavBar}/>
        <Route exact path='/' component={LandingPage}/>
        <ProtectedRoute exact path="/app" component={MusicApp}/>
    </div>
  );
}

export default App;