import firebase from 'firebase/app';
import 'firebase/storage';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyADWDAE04GUUbN00gla7BU8mSt9UgHctVo",
    authDomain: "neighborhood-board.firebaseapp.com",
    databaseURL: "https://neighborhood-board.firebaseio.com",
    projectId: "neighborhood-board",
    storageBucket: "gs://neighborhood-board.appspot.com/",
    messagingSenderId: "190501405425",
    appId: "1:190501405425:web:a89e40fe57be5da6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var storage = firebase.storage();

  export {
      storage, firebase as default
  };
