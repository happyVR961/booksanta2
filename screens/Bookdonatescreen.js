import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import {ListItem} from 'react-native-elements'

export default class BookDonate extends React.Component{
  constructor(){
    super();
    this.state = {
      requestedBookList : []
    }
    this.requestedRef = null
  }
  getRequestedBookList = ()=>{
    this.requestedRef = db.collection("requested_books")
    .onSnapshot((snapshot)=>{
var requestedBookList = snapshot.docs.map(doc=>doc.data())
this.setState({
  requestedBookList : requestedBookList
})
    })

  }
  keyExtractor = (item, index)=>index.toString()

  renderItem=(item, i)=>{
    return (
<ListItem key={i}
title = {item.book_name}
subTitle = {item.Reason_to_request}
titleStyle = {{color:"black", fontWeight:"bold"}}
rightElement = {<TouchableOpacity>
  <Text>View</Text>
</TouchableOpacity>}
bottomDivider ></ListItem>
    );
  }
    render(){
  return (
    <View>
<Text>Book donate Screen</Text>
<View>
  {this.state.requestedBookList.length === 0
  ?(<View><Text style = {{fontSize : 20}}>List of all requested books</Text></View>)
  :(<Flatlist keyExtractor = {this.keyExtractor}
  renderItem = {this.renderItem}
  data = {this.state.requestedBookList}></Flatlist>)}
</View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
