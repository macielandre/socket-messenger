import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    registerText: {
        color: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 23,
        marginBottom: 10,
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
    registerButton: {
        marginTop: 20,
        marginBottom: 20,
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