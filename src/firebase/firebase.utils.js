import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyBp6R02oATisP7bFXEFFWGSuhOuD9Q0i2w',
    authDomain: 'ecommerce-app-5fe67.firebaseapp.com',
    databaseURL: 'https://ecommerce-app-5fe67.firebaseio.com',
    projectId: 'ecommerce-app-5fe67',
    storageBucket: 'ecommerce-app-5fe67.appspot.com',
    messagingSenderId: '1081085662741',
    appId: '1:1081085662741:web:e0f2d2fab545ababb7601c',
    measurementId: 'G-TYJJXFXRRN',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
