import React, { Component } from 'react';
import './App.css';
import Checkbox from './checkbox';
import Final from './final';
import { Router } from '@reach/router';
class App extends Component {


  handlecheckbox = (tick)=>{
    console.log("parent:",tick);
    
  }

  render() {
    return (
      <div className="App">
        <Router>
          {/* final page route */}
          <Final path="/"/>
          <Checkbox path='/check' disabled={"false"} handlecheckbox={this.handlecheckbox}/>
        </Router>
      </div>
    );
  }
}

export default App;
