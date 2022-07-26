import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyCxcc4x093XtNhk9FxWviycycklE-JEPPc',
  authDomain: 'journalapp-7d85b.firebaseapp.com',
  projectId: 'journalapp-7d85b',
  storageBucket: 'journalapp-7d85b.appspot.com',
  messagingSenderId: '149770510609',
  appId: '1:149770510609:web:73a1c0c563b4f37f4e6cb0',
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
