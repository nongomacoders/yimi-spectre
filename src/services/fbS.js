import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FIREBASE_CONFIG } from '../config';
import { User,resetUser } from './userS'

export class FirebaseService{
    
    constructor() { }
    static init() {
        this.fb = firebase.initializeApp(FIREBASE_CONFIG); 
        this.db = firebase.firestore().enablePersistence();
    }
    static checkAuth() { 
        firebase.auth().onAuthStateChanged((data) => {
            if (data) {
                User.uid = data.uid;
                getUser().then((doc) => {
                    if(doc.exists){}else{saveUser()}
                })
            } else {
                User.uid = null;
              console.log('Not logged in')
            }
          });
    }
    static getUser() {
        const query = this.db.doc('users/' + User.uid);
        return query.ref.get();
      }
     static  saveUser() {
        const userDoc = this.db.doc('users/' + User.uid);
        return userDoc.set(User);
      }
}