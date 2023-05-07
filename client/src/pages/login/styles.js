import { StyleSheet } from 'react-native'

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
    registerButton: {
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

export default styles