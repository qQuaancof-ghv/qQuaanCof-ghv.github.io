// Banner 
window.onscroll = function() {myfunction()};

let banner = document.querySelector('.banner');
let sticky = banner.offsetTop;

function myfunction() {
    if (window.pageYOffset > sticky) {
        banner.classList.add('sticky');
    } else {
        banner.classList.remove('sticky')
    }
}
// Đóng mở menu
const cloneMenu = document.getElementById('clone-menu');
const cloneMenuBox = document.querySelector('.clone-menu-box');
const textLink = document.querySelectorAll('.mobile-items ul li a[href="#"]');

function menuToggle() {
    cloneMenu.classList.add('active');
    cloneMenuBox.style.display = 'block';
}

cloneMenuBox.onclick = function() {
    cloneMenu.classList.remove('active');
    cloneMenuBox.style.display = 'none';
}

for (let i = 0; i <textLink.length; i++) {
    const menuItem = textLink[i];

    menuItem.onclick = function() {
        cloneMenu.classList.toggle('active');
        cloneMenuBox.style.display = 'none';
    }
}
// End banner