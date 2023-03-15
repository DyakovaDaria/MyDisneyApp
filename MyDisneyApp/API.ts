import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebase from './db/firebase'
import firestore from 'firebase/firestore';

export default class API {
  // private createUser: (auth, email, password) => void;
  // private signIn: (auth: Auth, email: string, password: string) => Promise<UserCredential>;

  static createUser = createUserWithEmailAndPassword;
  static signIn = signInWithEmailAndPassword;

  static async getAllCharacters() {
    const response = await fetch("https://api.disneyapi.dev/characters?page=1");
    const json = await response.json();
    console.log("[i] json", json);
    return json;
  }

  static async getSearchCharacters(searchText) {
    const response = await fetch(
      "https://api.disneyapi.dev/character?name=" +
        searchText.replaceAll(" ", "Hi%20")
    );
    const json = await response.json();
    console.log("[i] json", json);
    return json;
  }

  static async getListsCloudData() {
    try {
        const db = getFirestore();
        const docRefQuestions = doc(db, "users", firebase.auth.currentUser.email);
        const docSnap = await getDoc(docRefQuestions);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log("No such document!");
        }
    } catch (e) {
      console.log(e);
    }
  }

  static async storeListsCloudData(value) {
    try {
        const db = getFirestore();
        const docRef = await setDoc(doc(db, "listCharacters", firebase.auth.currentUser.email), {
            data: value
        });
    } catch (e) {
        console.log(e);
    }
  }

  static async getCommentsCloudData(characterId) {
    try {
        const db = getFirestore();
        const docRefQuestions = doc(db, "users", firebase.auth.currentUser.email, characterId);
        const docSnap = await getDoc(docRefQuestions);
        if (docSnap.exists()) {
            return docSnap.data().comment;
        } else {
            return "";
        }
    } catch (e) {
      console.log(e);
    }
  }

  static async storeCommentsCloudData(comment, characterId) {
    try {
        const db = getFirestore();
        const docRef = await setDoc(doc(db, "charactersComments", firebase.auth.currentUser.email, characterId), {
            comment: comment
        });
    } catch (e) {
        console.log(e);
    }
  }
}
