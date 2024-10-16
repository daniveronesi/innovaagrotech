
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

//import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyB7ZkmKJIWPJA6kAM407_R0bZR9p1aq6nM",
  authDomain: "innovaagrotech-bb5c1.firebaseapp.com",
  projectId: "innovaagrotech-bb5c1",
  storageBucket: "innovaagrotech-bb5c1.appspot.com",
  messagingSenderId: "600440000154",
  appId: "1:600440000154:web:8c690df65682e3109b1923",
  measurementId: "G-80081221P4"
}

const app = initializeApp(firebaseConfig)
//const analytics = getAnalytics(app)

const db = getFirestore(firebaseapp)
const auth = getAuth(firebaseapp)

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('YOUR_RECAPTCHA_SITE_KEY'),
  isTokenAutoRefreshEnabled: true
});

export { auth, db }
