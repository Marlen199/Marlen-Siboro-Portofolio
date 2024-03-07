// toggle class active
const navbarNav = document.querySelector
('.navbar-nav');
//ketika profile menu di klik
document.querySelector('#profile-menu').
onclick=() => {
    navbarNav.classList.toggle('active');
};

//klik di side luar untuk menghilangkan nav
const profile=document.querySelector 
('#profile-menu');
document.addEventListener ('click',function(e){
    if(!profile.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});