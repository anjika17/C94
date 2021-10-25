const firebaseConfig = {
    apiKey: "AIzaSyBFQHkQ4aycc5L7XJ7gRY0uhLt50cXPKD8",
    authDomain: "kwitter-ef3d8.firebaseapp.com",
    databaseURL: "https://kwitter-ef3d8-default-rtdb.firebaseio.com",
    projectId: "kwitter-ef3d8",
    storageBucket: "kwitter-ef3d8.appspot.com",
    messagingSenderId: "235717380298",
    appId: "1:235717380298:web:edfaf84306385535af4c33",
    measurementId: "G-NT8DCF0QJX"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name = document.getElementById("username").value ;
    firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"  
    });
}