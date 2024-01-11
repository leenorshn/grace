import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoCdWZySrvjIzA5OkPk91TJa0AzpYyuk0",
  authDomain: "graceapp-f8fa3.firebaseapp.com",
  projectId: "graceapp-f8fa3",
  storageBucket: "graceapp-f8fa3.appspot.com",
  messagingSenderId: "762336877695",
  appId: "1:762336877695:web:cab110ea204722bcf9b34a",
  measurementId: "G-72JD5J2YHG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
//const analytics = getAnalytics(app);
