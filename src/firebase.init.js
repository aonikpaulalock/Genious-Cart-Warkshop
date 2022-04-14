import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// const firebaseConfig = {
// apiKey:process.env.REACT_APP_apiKey,
// authDomain:process.env.REACT_APP_authDomain,
// projectId:process.env.REACT_APP_projectId,
// storageBucket:process.env.REACT_APP_storageBucket,
// messagingSenderId:process.env.REACT_APP_messagingSenderId,
// appId:process.env.REACT_APP_appId,
// };
// const firebaseConfig = {
// apiKey:process.env.REACT_APP_apiKey,
// authDomain:process.env.REACT_APP_authDomain,
// projectId:process.env.REACT_APP_projectId,
// storageBucket:process.env.REACT_APP_storageBucket,
// messagingSenderId:process.env.REACT_APP_messagingSenderId,
// appId:process.env.REACT_APP_appId,
// };
const firebaseConfig = {
apiKey:process.env.REACT_APP_apiKey,
authDomain:process.env.REACT_APP_authDomain,
projectId:process.env.REACT_APP_projectId,
storageBucket:process.env.REACT_APP_storageBucket,
messagingSenderId:process.env.REACT_APP_messagingSenderId,
appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;


// REACT_APP_apiKey:AIzaSyBlE9LRCKkHaed1sLylJEWROe94Phc9Urs
// REACT_APP_authDomain:useen-genoius-car.firebaseapp.com
// REACT_APP_projectId:useen-genoius-car
// REACT_APP_storageBucket:useen-genoius-car.appspot.com
// REACT_APP_messagingSenderId:1003559016684
// REACT_APP_appId:1:1003559016684:web:bcc59aa1ee64d06efbadc9