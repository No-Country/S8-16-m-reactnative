import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCzKpVqpWgAQVjHoUw9POM0XmcVqFn-8OE',
  authDomain: 'bookchangern-c2d6d.firebaseapp.com',
  projectId: 'bookchangern-c2d6d',
  storageBucket: 'bookchangern-c2d6d.appspot.com',
  messagingSenderId: '22533862227',
  appId: '1:22533862227:web:04aeafe341ec3aa903a7a6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
