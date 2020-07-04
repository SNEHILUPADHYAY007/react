import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import UserOP from './User-Output';
import UserIP from './User-Input';

class App extends Component {
  state={
    name: 'snehil'
  }

  switchNameHandler=(event)=>{
    this.setState={
      name: event.target.value
    };
    //console.log(nameVar);
  }

  render() {
    return (
        <div>
          <UserIP changed={this.switchNameHandler} name1={this.state.name}/>
          <UserOP name={this.state.name} />
          <UserOP name={this.state.name}/>
          <UserOP name={this.state.name}/>
        </div>
    );
  }
}

export default App;
