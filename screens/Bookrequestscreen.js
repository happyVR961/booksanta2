import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import db from '../config';


export default class BookRequest extends React.Component{
    constructor(){
        super();
        this.state = {
            BookName : "",
            ReasonToRequest : "",
            UserId : firebase.auth().currentUser.email
        }
    }
    createUniqueId=()=>{
      return(
  Math.random().toString(20).substring(10)
      );
    }
    addRequest = (BookName, ReasonToRequest)=>{
  var UserId = this.state.UserId;
  var randomRequestId = this.createUniqueId();
  db.collection('requested_books').add({
    User_Id : UserId,
    book_name : BookName,
    Reason_to_request : ReasonToRequest,
    Request_id : randomRequestId
  })
  this.setState({
    BookName : "",
    ReasonToRequest : ""
  })
    }
    render(){
  return (
    <View>
<TextInput
style = {styles.loginBox}
placeholder = "Book Name"
onChangeText = {(text)=>{
    this.setState({
BookName:text
    })
}}></TextInput>

<TextInput
style = {styles.loginBox}
placeholder = "Reason to request"
onChangeText = {(text)=>{
    this.setState({
        ReasonToRequest : text
    })

}}></TextInput>

<TouchableOpacity
onPress = {()=>{
  this.addRequest(this.state.BookName, this.state.ReasonToRequest)
}}
style = {styles.button}>
    <Text style = {styles.buttonText}>Submit</Text>
</TouchableOpacity>
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
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  KeyboardAvoidingView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalTitle :{
    justifyContent:'center',
    alignSelf:'center',
    fontSize:30,
    color:'#ff5722',
    margin:50
  },
  modalContainer:{
    flex:1,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ffff",
    marginRight:30,
    marginLeft : 30,
    marginTop:80,
    marginBottom:80,
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },
  registerButton:{
    width:200,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderRadius:10,
    marginTop:30
  },
  registerButtonText:{
    color:'#ff5722',
    fontSize:15,
    fontWeight:'bold'
  },
  cancelButton:{
    width:200,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    marginTop:5,
  },
 
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  }
});
