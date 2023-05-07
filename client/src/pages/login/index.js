import { useState } from 'react'
import { View, StyleSheet, TextInput, Text, Button, TouchableOpacity } from 'react-native'
import styles from './styles'


const onLogin = (email, password) => {
    console.warn(email, password)
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
          <TouchableOpacity style={styles.registerButton} onPress={() => { navigation.navigate('Register') }}>
            <Text style={styles.submitText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        )
}

export { Login }