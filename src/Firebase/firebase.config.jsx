import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBwnJiIi2V3pLi9oKHgVscn2MwtonTYevg",
  authDomain: "authentications-b14e1.firebaseapp.com",
  projectId: "authentications-b14e1",
  storageBucket: "authentications-b14e1.appspot.com",
  messagingSenderId: "5363362252",
  appId: "1:5363362252:web:71f1d346e061f025dc9569",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
