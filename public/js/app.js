/* global firebase */
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAmCXknqhWt8Itglas8NCfKuONEBp3KsK0",
    authDomain: "fir-51770.firebaseapp.com",
    databaseURL: "https://fir-51770.firebaseio.com",
    projectId: "fir-51770",
    storageBucket: "fir-51770.appspot.com",
    messagingSenderId: "870703410903"
  };
  firebase.initializeApp(config);
  
  const inputEmail = document.getElementById("inputEmail");
  const inputPassword = document.getElementById("inputPassword");
  const buttonSignIn = document.getElementById("buttonSignIn");
  const buttonSignUp = document.getElementById("buttonSignUp");
  const buttonSignOut = document.getElementById("buttonSignOut");
  
  var signin = function () {
      const email    = inputEmail.value;
      const password = inputPassword.value;
      const auth = firebase.auth();
      
      const promise = auth.signInWithEmailAndPassword(email, password);
      
      promise.catch(e => {
        console.error(e.message);
        return false;
      });
  };
  
  var signup = function () {
      const email    = inputEmail.value;
      const password = inputPassword.value;
      const auth = firebase.auth();
      
      const promise = auth.createUserWithEmailAndPassword(email, password);
      
      promise.catch(e => console.error(e.message));
  }
  
  var signout = function () {
    firebase.auth().signOut();
  }
  
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      buttonSignOut.classList.remove("d-none");
    } else {
      console.log('not logged in');
      buttonSignOut.classList.add("d-none");
    }
  });