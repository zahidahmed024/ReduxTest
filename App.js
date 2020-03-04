import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Store from './Redux/Store'
import Todos from './TodoList/Todos';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import TestingStore from './Redux/TestingStore';
// import TestTodos from './TodoList/TestTodos';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // console.log('App container :', Store.getState());
    
  }

  render() {
    return (
      <Provider store={Store}>
        <Todos/>
      </Provider>
    );
  }
}
