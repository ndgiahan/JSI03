 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword } from "http://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBhh2v69whULITMlwdlx-LWbuoSm4M8qio",
   authDomain: "login-example-5d023.firebaseapp.com",
   projectId: "login-example-5d023",
   storageBucket: "login-example-5d023.appspot.com",
   messagingSenderId: "392422138569",
   appId: "1:392422138569:web:08620c1cd2f81cfdfba318",
   measurementId: "G-CD47G6CFMP"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);



   
 
//  const userName = document.getElementById('userName').value;

 //submit
 const submit = document.getElementById('submit');
 submit.addEventListener('click', function(event) {
  event. preventDefault()

//input
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert ('Creating account ...')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
 })

