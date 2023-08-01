import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDKuD-VGgHH1XGMxRi5amufeJKBNOSsGHA",
    authDomain: "genai-bc6ba.firebaseapp.com",
    projectId: "genai-bc6ba",
    storageBucket: "genai-bc6ba.appspot.com",
    messagingSenderId: "504064881467",
    appId: "1:504064881467:web:a58ff7d37670068eaebd1e"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;