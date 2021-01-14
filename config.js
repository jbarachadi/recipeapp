import Firebase from "firebase";

const config = {
    apiKey: "AIzaSyAtxpYpIeX77wL03rhmI6qaxZngqCGOoYg",
    authDomain: "myrecipe-4b963.firebaseapp.com",
    databaseURL: "https://myrecipe-4b963-default-rtdb.firebaseio.com",
    projectId: "myrecipe-4b963",
    //storageBucket: "myrecipe-4b963.appspot.com",
    //messagingSenderId: "886531547538",
    //appId: "1:886531547538:web:006974e9f596bcdd00614b"
  };

  const app = Firebase.initializeApp(config);
  export const db = app.database();