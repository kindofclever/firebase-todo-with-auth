import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBocnvPnTkFSoXnBEtHggge9qOY5YSf4uI",
  authDomain: "next-todo-2d974.firebaseapp.com",
  projectId: "next-todo-2d974",
  storageBucket: "next-todo-2d974.appspot.com",
  messagingSenderId: "659214325719",
  appId: "1:659214325719:web:18eac3c68cc02cd991dd92",
  measurementId: "G-55001XVQZL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
