const homePage = document.getElementById('home-page');
const profilePage = document.getElementById('profile-page');
const loginPage = document.getElementById('login-page');
const welcomePage = document.getElementById('welcome-page');

export function hideAllPages() {
    homePage.style.display = 'none';
    profilePage.style.display = 'none';
    loginPage.style.display = 'none';
    welcomePage.style.display = 'none';
}