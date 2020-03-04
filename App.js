import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Todos from './TodoList/Todos';
import Store from './Redux/Store'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    console.log('main :', Store.getState());
    
  }

  render() {
    return (
      <Provider store={Store}>
        <Todos />
      </Provider>
    );
  }
}
