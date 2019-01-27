import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FIREBASE_CONFIG } from './config';
const fb = firebase.initializeApp(FIREBASE_CONFIG);