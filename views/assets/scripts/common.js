function viewMenu() {

    let menu = ''; 
    let navButton = document.querySelector('.nav-button').innerHTML;
    let menuState = document.querySelector('.menu').style.display;
    
    navButton === 'menu' ? (navButton = 'close', menuState = 'flex') : (navButton = 'menu', menuState = 'none');

    document.querySelector('.nav-button').innerHTML = navButton;
    document.querySelector('.menu').style.display = menuState;
}

window.addEventListener('resize', () => {
    const width = window.innerWidth;

    if (width > 320 && width < 900) {
        document.querySelector('.menu').style.display = 'none';
        document.querySelector('.mobile-specific').style.display = 'flex';


    } else if (width >= 900) {
        document.querySelector('.menu').style.display = 'flex';
        document.querySelector('.mobile-specific').style.display = 'none';

    }

    document.querySelector('.nav-button').innerText = 'menu';

});

function redirectSocial(media) {
    let link = null;
    if (media === 'li') {
        link = 'https://www.linkedin.com/in/vijaykvgan';
    } else if (media === 'tw') {
        link = 'https://twitter.com/vijaykvgan';
    } else if (media === 'in') {
        link = 'https://www.instagram.com/vijaykvgan';
    } else if (media === 'di') {
        link = 'https://discord.gg/C4HSFYN';
    } else if (media === 'yt') {
        link = 'https://www.youtube.com/user/Tejaswi88';
    }

    window.open(link, '_blank', 'noopener');

}

