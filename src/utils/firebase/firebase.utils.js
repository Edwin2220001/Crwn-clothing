import { initializeApp } from "firebase/app";

import { 
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC0CCc4z-bko5QhZ66AILFklN1g1M6MWcQ",
    authDomain: "crwn-clothing-db-18eff.firebaseapp.com",
    projectId: "crwn-clothing-db-18eff",
    storageBucket: "crwn-clothing-db-18eff.firebasestorage.app",
    messagingSenderId: "717197388733",
    appId: "1:717197388733:web:ae354c256a68f07892c0d4"
};

const firebaseApp= initializeApp(firebaseConfig);

const googleProvider= new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});


const auth= getAuth();
onAuthStateChanged(auth, user => {console.log( `You are logged in as`, user); });

export const signInWithGooglePopup= () => signInWithPopup(auth, googleProvider);

export default auth;

export const db= getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo= {}) => {
    if(!userAuth) return;

    const userDocRef= doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    
    if (!userSnapshot.exists()) {
        const { displayName, email }= userAuth;
        const createdAt= new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        } catch (error) {
            console.log("Error creating the user", error.message);
        }
    }

    return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser= async () => await signOut(auth);