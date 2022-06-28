const menu = document.querySelector('.mobile-navlinks');
const menuTrigger = document.querySelector('.mobile-menu');
const nLinks = document.querySelectorAll('.nlink');
const nav = document.querySelector('.nav');

let counter = 0;

//Mobile Menu
menuTrigger.onclick = () => {
      
    if (counter == 0) {
        counter++;
        menu.style.top = '65px';
    } else if (counter == 1) {
        counter--;
        menu.style.top = '-200px';
    }

}

//Links Navigation
nLinks.forEach(e => {
    e.onclick = () => {
        for(i=0; i<nLinks.length; i++) {
            nLinks[i].style.color = '#111';
        }
        e.style.color = 'rgb(0, 89, 255)';
    }
});

/*Border Navbar*/
document.onscroll = () => {
    if (scrollY<600) {
        nav.style.borderBottom = 'none';
    } else if (scrollY>600) {
        nav.style.borderBottom = '1px solid rgb(175, 175, 175)';
    }
    
}

