import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA18aoXOkcDGNAtbY_UaDfpNGLQN_GNeiM",
    authDomain: "chatty-yuri.firebaseapp.com",
    projectId: "chatty-yuri",
    storageBucket: "chatty-yuri.appspot.com",
    messagingSenderId: "978411472460",
    appId: "1:978411472460:web:5b19a3077132465dc056e9"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const messagesRef = database.ref('messages');

  export const pushMessage = ({name, text}) => {
      messagesRef.push({name, text});
  };

