//REL: Testing
console.log('Machine is running...');
console.log('This website has the TulyaCSS (Codename Tulya) power!');
console.log('Want to create websites like this? Go to https://arduinot.github.io/tulyacss and learn how to coding!');

//REL: Navbar Opening
function navMenuOpener(){
    navtitle = document.querySelector('.navbar .title');
    navmenu = document.querySelector('.navbar .menu');
    navmenu.classList.toggle('active');
    navtitle.classList.toggle('active');
}