// Import libraries for making a Component
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  compnentWillMount() {
    firebase.intializeApp(
      {
        apiKey: "AIzaSyAiAuqmOKUx6EopX9J3vSoOLYcsFGGubk8",
        authDomain: "auth-edc3f.firebaseapp.com",
        databaseURL: "https://auth-edc3f.firebaseio.com",
        projectId: "auth-edc3f",
        storageBucket: "auth-edc3f.appspot.com",
        messagingSenderId: "120569626058"
      }
    );
}

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
