import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBwXqwIMwNvBXcERIHORlpnWWvAqMhXCQ",
  authDomain: "disneyappmobile.firebaseapp.com",
  projectId: "disneyappmobile",
  storageBucket: "disneyappmobile.appspot.com",
  messagingSenderId: "463628818325",
  appId: "1:463628818325:web:842fb18e39e8443bf4c89c",
  measurementId: "G-FBLDGNKX2J",
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export default { auth, db, app };
