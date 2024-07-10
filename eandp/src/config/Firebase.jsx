
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCrpemXuyRLKYGRTj6x-aL1QayH643dIb4",
  authDomain: "email-14199.firebaseapp.com",
  projectId: "email-14199",
  storageBucket: "email-14199.appspot.com",
  messagingSenderId: "861049517784",
  appId: "1:861049517784:web:0059e61717b41cbea849ad"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);