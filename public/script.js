
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(navItem => {
    const homeMenu = navItem.nextElementSibling; 
    console.log(homeMenu)

    navItem.addEventListener('mouseover', () => {
        homeMenu.classList.toggle('hidden');
    });

    navItem.addEventListener('mouseout', () => {
        homeMenu.classList.toggle('hidden');
    });

    homeMenu.addEventListener('mouseover', () => {
        homeMenu.classList.toggle('hidden');
    });
    
    
    homeMenu.addEventListener('mouseout', () => {
        homeMenu.classList.toggle('hidden');
    });

})



