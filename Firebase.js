
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyADyapQwzH_KOQ3GB2jOILfexjBUjwe-sc",
  authDomain: "air-ticketing-c9aaf.firebaseapp.com",
  projectId: "air-ticketing-c9aaf",
  storageBucket: "air-ticketing-c9aaf.appspot.com",
  messagingSenderId: "821782897251",
  appId: "1:821782897251:web:8295b87464053e31fece56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider= new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then ((result) =>{
        console.log(result);

    })
    .catch((error) =>{
        console.log(error);
    });
};
