import React, { Component } from 'react';
import Header from './Header';
import './App.css';
// import ComputerNum from './CompNum';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      guess: "Enter Guess Here",
      secret: Math.floor((Math.random()) * 100)
    }

  }

  updateGuess(e){
    this.setState({guess: e.target.value})
  }

  compareNumbers(state){
    return {
      guess: state.guess,
      secret: state.secret
    }
  }
  render() {
    return (
      <div>
        <div>
          <Header />
          {/* <ComputerNum /> */}
        </div>
        <input value={this.state.guess} onChange={this.updateGuess.bind(this)}></input>
      </div>
    );
  }
}

export default App