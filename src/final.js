import React, { Component } from 'react';
import './App.css';
import Checkbox from './checkbox';
class App extends Component {
    
    state={
        val:""
    }
    getval = (tick)=>{
        console.log(tick);
      }


  render() {
    return (
      <div >
        <h1>Checkbox</h1>
        <div className="intend">
            <h5>Disabled</h5>
            <Checkbox disabled={"true"} handlecheckbox={this.getval}/>
            <h5>Intially checked</h5>
            <Checkbox checked={"true"} handlecheckbox={this.getval}/>
            <h5>Initially unchecked</h5>
            <Checkbox checked={"false"} handlecheckbox={this.getval}/>
        </div>
      </div>
    );
  }
}

export default App;
