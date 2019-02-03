import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FIREBASE_CONFIG } from './config';
import { User } from './userS'

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

            } else {
                User.uid = null;
              console.log('Not logged in')
            }
          });
    }
    static getUser() {
        
    }
}