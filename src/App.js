import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import logo from './logo.svg';
import './App.css';
import { onIncrement } from './actions';        //import action then watch line 42

function App(props) {
  const handleClick = () => {
    const { onIncrement } = props;          //now our action is in props, get it  
    onIncrement({ mail: 'mail@gmail.com' });  //and call with params(if needed)
    document.getElementById('text').innerHTML = 'next step: visit console';
  }  

  return (
    <div className="App">
      <header className="App-header">
      {props.data ?
        <img src={props.data.message} className="App-logo-true" alt="logo" />
        : <img src={logo} className="App-logo" alt="logo" />
      }
        <p id='text'></p>
        <div
          className="App-link"
          onClick={handleClick}       //call our function with action, then line 11
        >
          click me
        </div>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.dataFromServer.data
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  onIncrement         //added our action to bindActionCreators, then line 26
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
