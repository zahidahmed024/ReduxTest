import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Store from '../redux/Store';
import { fetchPosts } from '../redux/actions/posts';


 class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading:false
    };
    
    // console.log('main :', Store.getState());
  }
 async componentDidMount (){
    this.setState({isloading:true})
    await this.props.fPosts();
    this.setState({isloading:false})

  }

  render() {
    return (
      <View>
         <Text>{this.state.isloading?'loading....':null}</Text> 
        <Text> {JSON.stringify( this.props.counter)}</Text>
         {this.props.posts.map((item)=>
  <Text key={item.id}>--{ item.title}</Text>
            )}
        
      </View>
    );
  }
}

const mapStateToProps=(state)=>{
  console.log(state)
  return {
      posts:state.postReducer.posts,
      counter:state.postReducer.counter,
  }
}
const mapDispatchToProps=(dispatch)=>{
//   console.log(state)
  return {
    fPosts:() => dispatch(fetchPosts())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)