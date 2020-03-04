import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import Store from '../Redux/Store'
 class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    console.log('main :', Store.getState());
  }
  increment=()=>{
    // this.props.dispatch({type:'INC_COUNTER'})
    // console.log( this.props );
    console.log(this.props.dispatch({type:'INC_COUNTER'}))
    console.log('main :', Store.getState());
  }
  render() {
    

    return (
      <View>
        <Button
        title='increament'
        onPress={this.increment}
        />
      </View>
    );
  }
}
export default connect()(Todos)