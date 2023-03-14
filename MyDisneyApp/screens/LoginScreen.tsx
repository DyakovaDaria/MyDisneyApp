import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity, Dimensions, Alert,
} from "react-native";
import API from "../API";
import COLORS from "../constants/COLORS";
import SHADOW from "../constants/SHADOW";
import {useNavigation} from "@react-navigation/native";
import firebase from '../db/firebase'

export default function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation()
    const handleServerError = (errorCode) => {
        let errmsg = '';
        if (errorCode === 'auth/invalid-email')
            errmsg = 'Invalid email'
        else if (errorCode === 'auth/invalid-email')
            errmsg = 'Invalid email'
        else if (errorCode === 'auth/user-not-found')
            errmsg = 'You need to sign in first'
        else if (errorCode === 'auth/wrong-password')
            errmsg = 'Wrong password'
        return errmsg
    }
    const signIn = () => {
        API.signIn(firebase.auth, email, password)
            .then((userCredential) => {
                console.log('[i] logged in', userCredential)
                // @ts-ignore
                navigation.navigate("Main");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                let errmsg = handleServerError(errorCode);

                console.log('[i] sign up failed errorCode', errorCode)
                console.log('[i] sign up failed errorMessage', errorMessage)
                Alert.alert('Oh...', `Sorry, sign in failed... ${errmsg}`)
            });
    }
    const createUser = () => {
        API.createUser(firebase.auth, email, password)
            .then((userCredential) => {
                console.log('[i] create user in', userCredential)
                // @ts-ignore
                navigation.navigate("Main");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                let errmsg = handleServerError(errorCode);

                console.log('[i] sign up failed errorCode', errorCode)
                console.log('[i] sign up failed errorMessage', errorMessage)
                Alert.alert('Oh...', `Sorry, sign up failed... ${errmsg}`)
            });
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/mickey_logo.png")}/>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter email"
                    onChangeText={(newEmail) => setEmail(newEmail)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter password"
                    secureTextEntry={true}
                    onChangeText={(newPassword) => setPassword(newPassword)}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={signIn}>
                <Text style={styles.loginText}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpBtn} onPress={createUser}>
                <Text style={styles.loginText}>No account yet? Then sign up here</Text>
            </TouchableOpacity>
        </View>
    );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
        width: windowWidth / 4,
        height: windowWidth / 4,
    },
    inputView: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.lightgray,
        // ...SHADOW,
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        minWidth: 200,
        flex: 1,
        marginLeft: 20,
        textAlign:'center'
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: COLORS.white,
        ...SHADOW
    },
    loginText: {},
    signUpBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    signUpText: {}

});
