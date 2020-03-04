import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import TestingStore from '../Redux/TestingStore'
import { connect } from 'react-redux';
class TestTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // console.log('main :', props);
  }

  render() {
    return (
      <View>
        <Text> TestingStore </Text>
      </View>
    );
  }
}
export default connect()(TestTodos)