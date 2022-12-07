import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAcyWFOan0hPlXM0VOYLPXIJMhtAzrW738",
    authDomain: "projeto-web1-26727.firebaseapp.com",
    projectId: "projeto-web1-26727",
    storageBucket: "projeto-web1-26727.appspot.com",
    messagingSenderId: "996578137289",
    appId: "1:996578137289:web:6ffcad72153f5d57f32918"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);