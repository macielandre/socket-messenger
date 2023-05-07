import { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity, Button } from 'react-native'
import styles from './styles'


const onRegister = ({ name, email, password }) => {
    console.warn({ name, email, password })
}

const Register = ({navigation}) => {

    const [ email, setEmail ] = useState('')
    const [ name, setName ] = useState('')
    const [ password, setPassword ] = useState('')

    return (
        <View style={styles.container}> 
          <Text style={styles.registerText}>
            REGISTER YOUR
          </Text>
          <Text style={styles.registerText}>
            PERSONAL DATA HERE
          </Text>
          <View>
            <TextInput 
              placeholder='NAME'
              placeholderTextColor={'gray'}
              placeholderTextOpacity={0.5}
              onChangeText={(text) => { 
                setName(text)
              }}
              style={styles.textInputs}
            />
            <TextInput 
              placeholder='EMAIL'
              placeholderTextColor={'gray'}
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
            <TextInput 
              placeholder='CONFIRM YOUR PASSWORD'
              placeholderTextColor={'gray'}
              style={styles.textInputs}
            />
          </View>
          
          <TouchableOpacity style={styles.registerButton} onPress={() => { onRegister({ name, email, password }) }}>
            <Text style={styles.submitText}>REGISTER</Text>
          </TouchableOpacity>
          <Button title="Login if you already have an account" onPress={() => navigation.navigate('Login')} />
        </View>
        )
}

export { Register }