import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUllByrOH3G8EuksphZNuYE267s3Y9ksk",
  authDomain: "tarefasplus-ecaa4.firebaseapp.com",
  projectId: "tarefasplus-ecaa4",
  storageBucket: "tarefasplus-ecaa4.firebasestorage.app",
  messagingSenderId: "1094839299238",
  appId: "1:1094839299238:web:948ab6b5d05b920cdf9867"
};

// Verifica se o app já foi inicializado
const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(firebaseApp);

export { db };
