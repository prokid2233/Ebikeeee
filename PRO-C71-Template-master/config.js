import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDrhQxQE8XJbfmM_FvIYqc5_4nBLwNFu8M",
    authDomain: "ebike-c5e01.firebaseapp.com",
    projectId: "ebike-c5e01",
    storageBucket: "ebike-c5e01.appspot.com",
    messagingSenderId: "981756008459",
    appId: "1:981756008459:web:6ec29b75129140c96a4f0e"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
