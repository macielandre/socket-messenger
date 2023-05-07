import { View, Text, TouchableOpacity, Button } from 'react-native'
import styles from './styles'

const Menu = ({navigation}) => {
    return (
      <View style={styles.container}> 
        <TouchableOpacity style={styles.registerButton} onPress={() => { navigation.navigate('Register') }}>
          <Text style={styles.submitText}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={() => { navigation.navigate('Login') }}>
          <Text style={styles.submitText}>LOGIN</Text>
        </TouchableOpacity>
        <Button title="Contact us" onPress={() => console.warn('Redirecting to our website')} />
      </View>
    )
}

export { Menu }