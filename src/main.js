import {
    FirebaseService
} from './services/fbS';
import {
    hideAllPages
} from './services/pagesS';
import {
    renderWelcomePage,
    hideGoogleButton,
    showGoogleButton
} from './views/welcome-page';
import {
    renderHomePage
} from './views/home-page';
import {
    renderProfilePage
} from './views/profile-page'
import {
    User
} from './services/userS';



window.onload = () => {
    if (FirebaseService.isInitialised()) {
        FirebaseService.afterRedirect();
    }
}


function init() {
    console.log('function init() :');
   
    hideAllPages();
    renderWelcomePage();
    document.getElementById("googleButton").addEventListener('click', signIn);
    hideGoogleButton();
    FirebaseService.initFB();
    if (!FirebaseService.isInitialised()) {       
        FirebaseService.checkAuth();
    }
}

function signIn() {
    console.log(User);
    if (User.uid) {
        if (User.hasProfile) {
            hideAllPages();
            renderHomePage()
        } else {
            hideAllPages();
            renderProfilePage()
        }
    } else {
        FirebaseService.signIn()
    }
}

init();