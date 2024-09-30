document.addEventListener('DOMContentLoaded', () => {
    const cookiePopup = document.getElementById('cookie-consent-popup');
    const acceptBtn = document.getElementById('accept-cookies-btn');

    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookiePopup.classList.add('show');
        }, 1000); 
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookiePopup.classList.remove('show');
    });
});
