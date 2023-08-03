import { initializeApp } from 'firebase/app';
import {  getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKuD-VGgHH1XGMxRi5amufeJKBNOSsGHA",
    authDomain: "genai-bc6ba.firebaseapp.com",
    projectId: "genai-bc6ba",
    storageBucket: "genai-bc6ba.appspot.com",
    messagingSenderId: "504064881467",
    appId: "1:504064881467:web:a58ff7d37670068eaebd1e"
  };

 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);