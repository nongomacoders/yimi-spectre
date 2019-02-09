import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {
  hideAllPages
} from './pagesS';
import {
  renderHomePage
} from '../views/home-page';
import {
  renderProfilePage
} from '../views/profile-page'
import {
  FIREBASE_CONFIG
} from '../config';
import {
  User,
  resetUser
} from './userS'

export class FirebaseService {

  constructor() {}
  static isInitialised() {
    return this.isReady;
  }
  static init() {
    this.isReady = false;
    firebase.initializeApp(FIREBASE_CONFIG);
    this.db = firebase.firestore();
    this.db.enablePersistence();
    this.isReady = true;
  }
  static checkAuth() {
    var unsubscribe = firebase.auth().onAuthStateChanged((data) => {
      if (data) {
        resetUser();
        User.uid = data.uid;
        this.getUser().then((doc) => {
          if (doc.exists) {
            Object.assign(User, doc.data())
          }
        });
        unsubscribe();
      } else {
        resetUser();
        unsubscribe();
      }
    });
  }
  static getUser() {
    const query = this.db.collection('users').doc(User.uid);
    let p = query.get();
    console.log('p:', p);
    return p;
  }
  static saveUser() {
    const userDoc = this.db.doc('users/' + User.uid);
    return userDoc.set(User);
  }
  static signIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithRedirect(provider)
  }

  static afterRedirect() {
    console.log('afterREdirect');
    firebase.auth().getRedirectResult().then((result) => {
      console.log(`result = `);
      console.log(result);
      if (result.user) {
        resetUser();
        console.log('User.uid:', User.uid);
        User.uid = result.user.uid;
        console.log('User.uid:', User.uid);
        this.getUser().then((doc) => {
          console.log(doc);
          if (doc.exists) {
            console.log('User:', User);
            Object.assign(User, doc.data());

            if (User.hasProfile) {
              hideAllPages();
              renderHomePage()
            } else {
              hideAllPages();
              renderProfilePage()
            }
          } else {
            console.log(' hideAllPages()');
            hideAllPages();
            renderProfilePage()
          }
        });
      }

    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
}