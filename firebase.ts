import { getApp, getApps, initializeApp} from 'firebase/app'
import{ getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB9Rj03qGqrmspzjp8HMgbLIXvymKD7lts",
    authDomain: "dropbox-clone-ffdc3.firebaseapp.com",
    projectId: "dropbox-clone-ffdc3",
    storageBucket: "dropbox-clone-ffdc3.appspot.com",
    messagingSenderId: "697150474093",
    appId: "1:697150474093:web:b70b5e37194aa10ea03c64"
  };


  // coz we messin with nextjs, so nextjs can sometimes initialize two things sort of in one go, if we render in server it might pre initialize the database object or app //

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const storage = getStorage(app)

  export { app, db, storage }