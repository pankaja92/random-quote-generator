import React, { Component } from 'react';
import './App.css';

import Generate from './components/generate';
import Quote from './components/quote'

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
        buttonClick : false
      }
  }

  receievedClick(value){
    if(value === true){
      this.setState({ buttonClick : value });
    }
  }

  render() {
    return (
      <div className="App">
        <p className="App-header"> Random Quote Generator</p>
        <Generate isClicked={this.receievedClick.bind(this)}/>
        <Quote clickPass={this.state.buttonClick}/>
      </div>
    );
  }
}

export default App;
