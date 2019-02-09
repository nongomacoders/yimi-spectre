import {
    FirebaseService
} from './services/fbS';
import {
    hideAllPages
} from './services/pagesS';
import {
    renderWelcomePage
} from './views/welcome-page';
import { renderHomePage } from './views/home-page';
import{renderProfilePage} from './views/profile-page'
import { User } from './services/userS';

window.onload = () => { if (FirebaseService.isInitialised()) { FirebaseService.afterRedirect(); } }
function init() {
    hideAllPages();
    renderWelcomePage();
    document.getElementById("googleButton").addEventListener('click', signIn);
  
    FirebaseService.init();
    FirebaseService.checkAuth();


}
function signIn() {
    console.log(User);
    if (User.uid) {
        if (User.hasProfile) { hideAllPages(); renderHomePage() } else { hideAllPages();renderProfilePage()}
    } else {
        FirebaseService.signIn()
    }
}


init();