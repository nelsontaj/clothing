import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAsU3qJI7NSINrxtu4AQzav-5xTeZGH924",
    authDomain: "clothingsite-5a885.firebaseapp.com",
    databaseURL: "https://clothingsite-5a885.firebaseio.com",
    projectId: "clothingsite-5a885",
    storageBucket: "clothingsite-5a885.appspot.com",
    messagingSenderId: "167562618892",
    appId: "1:167562618892:web:fa9a399c40a4ea39dae629",
    measurementId: "G-7LXCER252M"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
   return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
