import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBU_aLlclyUxexOsIbEa2oswq2rWbzX3Kw",
    authDomain: "open-source-project-5630d.firebaseapp.com",
    projectId: "open-source-project-5630d",
    storageBucket: "open-source-project-5630d.appspot.com",
    messagingSenderId: "700913831851",
    appId: "1:700913831851:web:b47e768d4457db18004cee"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();