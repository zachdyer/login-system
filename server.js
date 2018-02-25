var express    = require("express");
var firebase   = require("firebase");
var bodyParser = require("body-parser");


//Firebase
var config = {
    apiKey: "AIzaSyAmCXknqhWt8Itglas8NCfKuONEBp3KsK0",
    authDomain: "fir-51770.firebaseapp.com",
    databaseURL: "https://fir-51770.firebaseio.com",
    projectId: "fir-51770",
    storageBucket: "fir-51770.appspot.com",
    messagingSenderId: "870703410903"
  };
firebase.initializeApp(config);

var app = express();

app.listen(process.env.PORT);

//Configuring Express
app.use(express.static("public"));
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("views", __dirname + "/views/components");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// POST routes
app.post('/login', (req, res) => {
    const email    = req.body.inputEmail;
    const password = req.body.inputPassword;
    const auth = firebase.auth();
    
    const promise = auth.signInWithEmailAndPassword(email, password);
    
    promise.catch(e => {
        console.error(e.message); 
    });
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
          console.log("user succesfully logged in. redirecting to profile page.");
          res.redirect("/profile");
        } else {
          console.error('not logged in.  redirecting to login page.');
        }
    });
});
app.post('/profile/edit', (req, res) => {
    const photoURL    = req.body.photoURL
    const displayName = req.body.displayName;
    const email       = req.body.inputEmail;
    //"+14175015670"
    const phoneNumber = req.body.phoneNumber;
    const password    = req.body.inputPassword;
    const user        = firebase.auth().currentUser;
    console.log(phoneNumber);
    
    user.updateProfile({
      photoURL: photoURL,
      displayName: displayName,
      email: email,
      phoneNumber: "+14175015670",
      password: password
    }).then(e => {
      console.log("Profile succesfully updated");
      res.redirect("/profile/edit");
    }).catch(e => {
      console.error(e.message); 
    });
});

// GET Routes
app.get("/login", (req, res) => {
    const currentUser = firebase.auth().currentUser;
    if(currentUser) {
      res.render('login', 
        {displayName: currentUser.displayName, email: currentUser.email, 
        phone: currentUser.phoneNumber, photoURL: currentUser.photoURL});
    } else {
      console.log('user not logged in');
       res.redirect("/");
    }
    
});
app.get("/profile", (req, res) => {
    const currentUser = firebase.auth().currentUser;
    if(currentUser) {
      res.render('profile', 
        {displayName: currentUser.displayName, email: currentUser.email, 
        phone: currentUser.phone, photoURL: currentUser.photoURL});
    } else {
      console.log('user not logged in');
       res.redirect("/login");
    }
    
});
app.get("/profile/edit", (req, res) => {
    const currentUser = firebase.auth().currentUser;
    console.log(currentUser.phoneNumber);
    if(currentUser) {
      res.render('editProfile', {
        displayName: currentUser.displayName, email: currentUser.email, 
        phoneNumber: currentUser.phoneNumber, photoURL: currentUser.photoURL});
    } else {
      console.log('user not logged in');
      res.redirect("/login");
    }
    
});
app.get("/logout", (req, res) => {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        res.redirect("/login");
    }, function(error) {
        // An error happened.
        console.error(error.message);
    });
});