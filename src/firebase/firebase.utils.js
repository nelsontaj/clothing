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
    firebase.initializeApp(config);

    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({prompt: 'select_account' });
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;