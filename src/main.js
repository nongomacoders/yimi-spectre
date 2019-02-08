//import { FirebaseService } from './services/fbS';
import { hideAllPages } from './services/pagesS';
import { renderWelcomePage } from './views/welcome-page'


function init() {
    hideAllPages();
    renderWelcomePage();
   // FirebaseService.init();

}

init();



