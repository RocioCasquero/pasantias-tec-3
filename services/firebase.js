// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDVu_gXSqq8ywVySXTCqJwusPk8ZK3nAAY',
	authDomain: 'pasantias-tec-3.firebaseapp.com',
	projectId: 'pasantias-tec-3',
	storageBucket: 'pasantias-tec-3.appspot.com',
	messagingSenderId: '258851382731',
	appId: '1:258851382731:web:6be4a35023cb73905a424e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);