import React from 'react';
import { Text, View, FlatList , StyleSheet , TextInput , TouchableOpacity } from 'react-native';
import db from '../config'
import {ScrollView} from 'react-native-gesture-handler';

export default class Searchscreen extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        allTransactions: [],
      lastVisibleTranscation: null,
      search: ''      
    }
    }

    fetchMoreTransactions = async ()=>{
      var text = this.state.search.toUpperCase()
      var enteredText = text.split("")

      if (enteredtext [0].toUpperCase() === 'B' ){
        const query = await db.collection("transactions").where('bookId','==','text').startAfter(this.state.lastVisibleTransaction).limit(10).get()
        query.docs.map((doc)=>{
          this.setState({
            alltransactions:[...this.state.allTransactions,doc.data()],
            lastVisibleTransaction: doc
          })
        })
      }

      else if(enteredText[0].toUpperCase() === 'S'){
        const query = await  db.collection("transactions").where('bookId','==','text').startAfter(this.state.lastVisibleTranscation).limit(10).get()
        query.docs.mao((doc) =>{
          this.setState({
            allTransactions: [...this.setState.allTransactions, doc.data()],
            lastVisibleTransaction: doc
          })
        })
      }
    }

    searchTransactions = async(text) =>{
      var enteredtext = text.spilt("")
      if (enteredText[0])
    }
      
    }
