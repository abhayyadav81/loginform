import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { Input } from 'react-native-elements';
import Header from '../components/Header'
import DetailScreen from './DetailScreen';

const LoginScreen = ({ navigation }) => {
    const [issecurePassword, setIsSecurePassword] = useState(true)
    const [email, setEmail] = useState('')
    const [emailValidate, setEmailValidate] = useState(true);
    const onChnageEmailValidate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
            setEmail(text)
            setEmailValidate(false)
            return false;
        }
        else {
            setEmail(text)
            setEmailValidate(true)
            console.log("Email is Correct");
        }
    }
    return (
        <View style={{ padding: 25 }}>
            <Header />
            <View style={styles.input}>
                <Input placeholder="email"  onChangeText={onChnageEmailValidate} />
                {!emailValidate ? <Text style={{ color: '#8B0000', fontSize: 12 }}>email is not valid</Text> : null}
            </View>
            <View style={styles.passwordinput}>
                <Input

                    placeholder="password"
                    secureTextEntry={issecurePassword}
                    rightIcon={
                        <TouchableOpacity
                            style={{ padding: 3 }}
                            onPress={() => {
                                setIsSecurePassword(prev => !prev)
                            }}>
                            <Text style={{ color: 'green' }}>show</Text>
                        </TouchableOpacity>
                    }
                   
                />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DetailScreen')} disabled={!emailValidate || email.length === 0 ? true : false}>
                    <Text style={{ color: "white", fontWeight: 'bold', fontSize: 15 }}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#E5E8E8',
        height: 50,
        borderRadius: 8,

        fontSize: 15,
        marginTop: 30,


    },
    passwordinput: {
        backgroundColor: '#E5E8E8',
        height: 50,
        borderRadius: 8,

        fontSize: 15,
        marginTop: 50,


    },
    button: {
        backgroundColor: '#229954', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25, marginTop: 50
    }
})
export default LoginScreen