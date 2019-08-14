import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import logo from './logo.svg';
import './App.css';
import { onIncrement } from './actions';        //import action then watch line 40

function App(props) {
  const handleClick = () => {
    const { onIncrement } = props;          //now our action is in props, get it 
    onIncrement({mail: 'mail@gmail.com'});  //and call with params(if needed)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div
          className="App-link"
          onClick={handleClick}
        >
          Learn React
        </div>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  onIncrement         //added our action to bindActionCreators, then line 11
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
