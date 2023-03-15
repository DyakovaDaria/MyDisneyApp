import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebase from "./db/firebase";
import firestore from "firebase/firestore";

export default class API {
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
}
