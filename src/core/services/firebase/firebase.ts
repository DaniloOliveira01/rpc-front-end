import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSJzxX2OuBTKc3UE8Py5UmewkKQ5N9HLA",
  authDomain: "rpc-project-fef7a.firebaseapp.com",
  projectId: "rpc-project-fef7a",
  storageBucket: "rpc-project-fef7a.appspot.com",
  messagingSenderId: "416147370394",
  appId: "1:416147370394:web:df52cff858343d6e204a23",
  measurementId: "G-GNMP9KLQ65"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// TODO: firebase deploy --only hosting:rpc-grade-teste