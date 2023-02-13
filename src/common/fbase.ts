import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGIN_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  const app = firebase.initializeApp(firebaseConfig);
  // getAnalytics(app);
}

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
