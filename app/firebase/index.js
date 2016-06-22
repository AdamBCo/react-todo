import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDk6Ex-3rHef9RWEMc697DhWPHPzF8cLE8",
    authDomain: "cooper-todo-app.firebaseapp.com",
    databaseURL: "https://cooper-todo-app.firebaseio.com",
    storageBucket: "cooper-todo-app.appspot.com",
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
