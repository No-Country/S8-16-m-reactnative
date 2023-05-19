import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe34B9oFt2fFBaKeKTtCrJ5MMU6uaTDE4",
  authDomain: "reactnative-d4f14.firebaseapp.com",
  projectId: "reactnative-d4f14",
  storageBucket: "reactnative-d4f14.appspot.com",
  messagingSenderId: "808681307253",
  appId: "1:808681307253:web:7f3de1d321d3f9793fcc3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

