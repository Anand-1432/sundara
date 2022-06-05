import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from  "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA8VC5dD8eRNQscAtJSmGPF7JYyTd7bpN8",
    authDomain: "sundara-12.firebaseapp.com",
    projectId: "sundara-12",
    storageBucket: "sundara-12.appspot.com",
    messagingSenderId: "875955931466",
    appId: "1:875955931466:web:356f4fbdf8a5b13fadd9b3",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);