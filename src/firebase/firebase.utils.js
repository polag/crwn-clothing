import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAy_WibW_LKFufmDq2S5Izx3i8EiAqqKPk",
    authDomain: "crwn-db-2424f.firebaseapp.com",
    databaseURL: "https://crwn-db-2424f.firebaseio.com",
    projectId: "crwn-db-2424f",
    storageBucket: "crwn-db-2424f.appspot.com",
    messagingSenderId: "775532132468",
    appId: "1:775532132468:web:3ac251c8c1db9c0fb7f921",
    measurementId: "G-NF4ERV7LP4"
  };

export const createUserProfileDocument = async (userAuth, additionalData)=> {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();


  //Create the user in the database:
  if (!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error){
        console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




