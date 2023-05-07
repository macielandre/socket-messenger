import { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity, Button } from 'react-native'
import styles from './styles'


const onLogin = (email, password) => {
    if(email === '') {
      console.warn('Email is empty')
    } else if(password === '') {
      console.warn('Password is empty')
    }
     else {
      console.warn(email, password)
    }
}

const Login = ({navigation}) => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')




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
                setEmail(text)
              }}
              style={styles.textInputs}
            />
            <TextInput 
              placeholder='PASSWORD'
              placeholderTextColor={'gray'}
              onChangeText={(text) => { 
                setPassword(text)
              }}
              style={styles.textInputs}
            />
          </View>
          
          <TouchableOpacity style={styles.loginButton} onPress={() => { onLogin(email, password) }}>
            <Text style={styles.submitText}>LOGIN</Text>
          </TouchableOpacity>          
          <Button title="Register if doens't have an account" onPress={() => navigation.navigate('Register')} />

        </View>
        )
}

export { Login }