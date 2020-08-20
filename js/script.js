let chatItem = document.getElementsByClassName('chat-example');
const menuButton = document.getElementsByClassName('menu-button')[0];
const sideMenuWrapper = document.querySelector('.mobile-menu-wrp');
const sideMenu = document.querySelector('.mobile-menu');

window.addEventListener('click', () => {
    let target = event.target;
    if (target.className === 'menu-button') {

        sideMenuWrapper.style.display = 'block';
        sideMenuWrapper.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        setTimeout(function () {
            sideMenu.style.transform = 'translateX(410px)';
        }, 10);
    } else if (target.className === 'mobile-menu-wrp') {
        sideMenu.style.transform = 'translateX(0px)';
        sideMenuWrapper.style.backgroundColor = "rgba(0, 0, 0, 0)";
        setTimeout(function () {
            sideMenuWrapper.style.display = 'none';
        }, 500);
    }
});


const ddBtn = document.getElementById('dropdown-profiles-btn');
const listPrf = document.querySelector('.profiles-list');
console.log(listPrf);

ddBtn.addEventListener('click', () => {
    if (ddBtn.className.includes('open-profile')) {
        ddBtn.classList.remove('open-profile');
        listPrf.classList.remove('visible' );  
    } else {
        ddBtn.classList.add('open-profile');
        listPrf.classList.add('visible' );
        
    }
});