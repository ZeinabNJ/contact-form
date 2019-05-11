  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB7WCa6Q4uiiPxWFzF-HbyHuh2Nen5Dqnw",
    authDomain: "fir-93852.firebaseapp.com",
    databaseURL: "https://fir-93852.firebaseio.com",
    projectId: "fir-93852",
    storageBucket: "fir-93852.appspot.com",
    messagingSenderId: "1009241559629",
    appId: "1:1009241559629:web:c772cf6a64c326c1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var users = firebase.database().ref();

document.getElementById("validate").addEventListener("click", submitForm);

function submitForm (event) {
    event.preventDefault();
    var name = document.getElementById("nom").value;
    var mail = document.getElementById("mail").value;
    var sujet = document.getElementById("sujet").value;
    var message = document.getElementById("message").value;
    console.log(name, mail, sujet, message);
    saveUser(name, mail, sujet, message);

}

function saveUser(name, mail, sujet, message) {
    var newUser = users.push();
    newUser.set(
        {
            NomPrenom: name,
            Email: mail,
            Sujet: sujet,
            Message: message
        }
    ) 
}

