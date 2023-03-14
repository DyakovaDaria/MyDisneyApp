
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiyW9HYIqh401llWMXZgBXoqcGidl5qi4",
    authDomain: "disneymobileapp.firebaseapp.com",
    projectId: "disneymobileapp",
    storageBucket: "disneymobileapp.appspot.com",
    messagingSenderId: "1049192771744",
    appId: "1:1049192771744:web:f93fbdd00523ef2ef1d9c5"
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export default {auth, db, app}
