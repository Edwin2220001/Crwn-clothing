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

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore';


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


export const auth= getAuth(firebaseApp);
export const onAuthStateChangedListener= (user) => onAuthStateChanged(auth, user);

export const signInWithGooglePopup= () => signInWithPopup(auth, googleProvider);

export const db= getFirestore();

export const addCollectionAndDocuments= async (collectionKey, objectsToAdd) => {
    const collectionRef= collection(db, collectionKey);
    const batch= writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef= doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log("Done");
};

export const getCategoriesAndDocuments= async() => {
    const collectionRef= collection(db, "categories");
    const q = query(collectionRef);

    const querySnapshot= await getDocs(q);

    const categoryMap= querySnapshot.docs.reduce((acc, docSnapshot) => {     //querySnapshot.docs= array data
        const { title, items }= docSnapshot.data();
        acc[title.toLowerCase()]= items;
        return acc;
    }, {});

    return categoryMap;
}

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