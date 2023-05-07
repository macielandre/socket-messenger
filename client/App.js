import React from 'react'
import { View, StyleSheet, TextInput, Text, Button, TouchableOpacity } from 'react-native'
import Login from './src/components/login'

export default class App extends React.Component{
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  submit() {
    console.warn(this.state)
  }

  render() {
    return (
      <View style={styles.container}> 
        <Text style={styles.loginText}>
          YOUR ACCOUNT HERE
        </Text>
        <View>
          <TextInput 
            placeholder='EMAIL'
            placeholderTextColor={'gray'}
            placeholderTextOpacity={0.5}
            onChangeText={(text) => { 
              this.setState({email: text})
            }}
            style={styles.textInputs}
          />
          <TextInput 
            placeholder='PASSWORD'
            placeholderTextColor={'gray'}
            onChangeText={(text) => { 
              this.setState({password: text})
            }}
            style={styles.textInputs}
          />
        </View>
        
        <TouchableOpacity style={styles.loginButton} onPress={() => {this.submit()}}>
          <Text style={styles.submitText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  loginText: {
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 23,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  submitText: {
    color: '#7B86EC',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textInputs: {
    backgroundColor: '#D9D9D9',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#CB9D25',
    borderWidth: 3,
    width: 330,
    height: 55,
    margin: 15,
    paddingLeft: 16
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: '#5237F5',
    fontWeight: 'bold',
    borderColor: '#1A0790',
    borderWidth: 3,
    height: 50,
    width: 150,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#EEAC2C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  }
})