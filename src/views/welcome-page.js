import {
    FirebaseService
} from '../services/fbS';
import {
    hideAllPages
} from '../services/pagesS';

import {
    renderHomePage
} from './home-page';
import {
    renderProfilePage
} from './profile-page'
import {
    User
} from '../services/userS';


const welcomePage = document.getElementById('welcome-page');

export function renderWelcomePage(){
    welcomePage.innerHTML=`
    <h1>Yimikusasa</h1>
    <button class="btn btn-error btn-block wbox box1">
        Struggling at School?&#x1f61f
    </button>
    <button class="btn btn-primary btn-block wbox box2">
        Join Yimikusasa
    </button>
    <button class="btn btn-primary btn-block wbox box3">
        Ask your friends to join.
    </button>
    <button class="btn btn-primary btn-block wbox box4">
        Discuss homework and exam papers online
    </button>
    <button class="btn btn-success btn-block wbox box5">
        Pass your exams with flying colours! &#x1f389 &#x1f388
    </button>
    <br>
    <a id="google-button"><img src="./assets/g.png" alt=""></a>
    `;
    
    welcomePage.style.display='block';
}

export function hideGoogleButton() {
    const googleButton = document.getElementById('google-button');
    if(googleButton)googleButton.style.display='none'
}
export function showGoogleButton() {
    const googleButton = document.getElementById('google-button');
    if(googleButton)googleButton.style.display='block'
}
