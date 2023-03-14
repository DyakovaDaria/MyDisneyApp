import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import firebase from "firebase/compat";
import Auth = firebase.auth.Auth;
import UserCredential = firebase.auth.UserCredential;

export default class API {
    // private createUser: (auth, email, password) => void;
    // private signIn: (auth: Auth, email: string, password: string) => Promise<UserCredential>;

    static createUser = createUserWithEmailAndPassword
    static signIn = signInWithEmailAndPassword

    static async getAllCharacters() {
        const response = await fetch('https://api.disneyapi.dev/characters?page=1')
        const json = await response.json()
        console.log('[i] json', json)
        return json
    }

    static async getSearchCharacters(searchText) {
        const response = await fetch('https://api.disneyapi.dev/character?name=' + searchText.replaceAll(" ", "Hi%20"))
        const json = await response.json()
        console.log('[i] json', json)
        return json
    }
}