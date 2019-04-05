import React, { Component } from 'react';
import tick from './checked.png';

class Checkbox extends Component {
    state={
        checked:"false",
        disabled:"false"
    }
    componentDidMount(){
        if(this.props.checked){
            this.setState({
                checked:this.props.checked
            })
        }
        if(this.props.disabled){
            this.setState({
                disabled:this.props.disabled
            })
        }

    }
    handleCheck = ()=>{  
        if(this.state.checked==="false")
            this.setState({checked:"true"});
        else
            this.setState({checked:"false"});
    }

    resetingtick = ()=>{
        this.props.handlecheckbox(this.state.checked);
    }

    handledisabled = ()=>{
        console.log("disabled");
    }
    render() {
        
        this.resetingtick();
        if(this.state.disabled==="true")
            return(
                <div onClick={this.handledisabled} className="checkbox2">
                    
                </div>
            )
        else{

            if(this.state.checked==="true"){
                return(
                    <div onClick={this.handleCheck} className="checkbox">
                        <img src={tick} className="App-logo" alt="logo" />
                </div>
            )
        }
        else{
            return(
                <div onClick={this.handleCheck} className="checkbox">
                    
                </div>
            )
        }
    }
    }
  }
  
  export default Checkbox;
  