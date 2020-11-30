import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView} from 'react-native';
import * as firebase from 'firebase'


export default class App extends React.Component {

constructor(){
    super();
    this.state={emailId:'',password:''}
}

login=async(email,password)=>{
    if (email && password) {
        try{
            const response = await firebase.auth().signInWithEmailAndPassword(email,password)
           if(responce){
               this.props.navigation.navigate('Transaction')
           } 
        }

        catch(error){
            switch(error.code){
                case 'auth/user-not-found':
                    Alert.alert("user doesnt exists")
                    console.log("doesnt exist")
                    break
                case 'auth/invalid-email':
                Alert.alert('incorrect email or password')
                console.log('invaild')
                break
            }
        }
    }
    else{
        Alert.alert('enter email and password');
    }
}

    render(){
    return (
       <KeyboardAvoidingView style = {{alignItems :'center' , marginTop:20}}>
         <View>
           <Image
             source={require("../assets/booklogo.jpg")} 
             style = {{width:200 , height : 200}}/>
           <Text style = {{textAllign : 'center,fontsize : 30'}}>Willy</Text>
         </View>
         <View>
           <TextInput
           Style= {StyleSheet.loginBox}
           placeholder="abc@example.com"
           keyboardType= 'email-address'
           onChangeText={(Text)=>{
             this.setState({
               emailId:text
             })
           }}
           />
  
           <TextInput
           style={StyleSheet.loginbox}
           secureTextEntry = {true}
           placeholder = "enter Password "
           onChangeText ={(text)=>{
             this.setState({
               password:text
             })
           }}
           />
         </View>
         <View>
           <TouchableOpacity style ={{height : 30 , width:90 , borderwidth:1,marginTop:20,paddingTop:5, borderRadius:7}}
           onPress = {()=>{this.login(this.state.emailId , this.state.password)}}>
             <Text style={{textAlign:'center'}}>Login</Text>
           </TouchableOpacity>
         </View>
       </KeyboardAvoidingView>
    )
  }
  }
