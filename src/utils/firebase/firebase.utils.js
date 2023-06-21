import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCL-7GcAVGT8FnD76LwqDF-E8eLwjSMUu0",
  authDomain: "crown-store-c18af.firebaseapp.com",
  projectId: "crown-store-c18af",
  storageBucket: "crown-store-c18af.appspot.com",
  messagingSenderId: "245662012372",
  appId: "1:245662012372:web:805111764180c5fba0fc41",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
