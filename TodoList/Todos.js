import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Store from '../Redux/Store'
 class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:''
    };
    console.log('main :', Store.getState());
  }
  increment=()=>{
    this.props.dispatch({type:'INC_COUNTER',name:this.state.text})
    // console.log( this.props );
    // console.log(this.props.dispatch({type:'INC_COUNTER'}))
    // console.log('props :', this.props);/*  */
    console.log('added names :', Store.getState().first.name);
    // console.log('new name :',this.state.text) ;
  }
  render() {
    

    return (
      <View style={{flex:1}}>
        <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => this.setState({text:text})}
      value={this.state.text}
    />
        <Button
        title='increament'
        onPress={this.increment}
        />
      {/* {Store.getState().first.name.map((name,index)=><Text key={index}>{name}</Text>)} */}

        <Text>

        {/* {JSON.stringify( Store.getState())} */}
        </Text>
      </View>
    );
  }
}
export default connect()(Todos)