import React from 'react'
import {Route} from 'react-router-dom'
import {mainPage} from "./Components/mainPage";
import MusicApp from "./Components/music"
import Navbar  from "./Components/navigation/navbar"
import './Css/App.css';

function App() {
  return (
    <div className="App">
        <Route path='/' component={Navbar}/>
        <Route exact path='/' component={mainPage}/>
        <safePathway exact path="/app" component={MusicApp}/>
    </div>
  );
}

export default App;