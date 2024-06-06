// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getReactNativePersistence,initializeAuth} from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjNpjpO7zTqecHieL7serpAkv7wd47WgQ",
  authDomain: "raexapp.firebaseapp.com",
  projectId: "raexapp",
  storageBucket: "raexapp.appspot.com",
  messagingSenderId: "838561985713",
  appId: "1:838561985713:web:134e9f3f4282c5337b1e90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth=initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db=getFirestore(app);
export const usersRef= collection(db,'users');
export const roomRef= collection(db,'rooms');