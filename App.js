import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Store from './redux/Store'
import {Provider} from 'react-redux'
import Main from './components/Main';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={Store}>
      <Main/>
      </Provider>
    );
  }
}
