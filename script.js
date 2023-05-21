const menuBar = document.getElementById('menuBar')
let btn__Menu = document.getElementById('btn__menu');
const menu = document.getElementById('menu');

let menuIsOpen = false;
btn__Menu.onclick = ()=>{
    if(!menuIsOpen){
        openMenu();
        menuIsOpen = true;
        slideImages();
    } else {
        closeMenu();
        menuIsOpen = false;
    }
}

const openMenu = () => {
    btn__Menu.classList.replace('btn_menu_closed', 'btn_menu_open');
    btn__Menu.value = 'Ligas';
    menu.classList.replace('showMenu', 'expandirMenu');
}
const closeMenu = () =>{
    btn__Menu.classList.replace('btn_menu_open', 'btn_menu_closed');
    btn__Menu.value = '≡';
    menu.classList.replace('expandirMenu', 'showMenu');
}

document.addEventListener('click', (e)=>{
    if(e.target !== menu && e.target !== btn__Menu){
        closeMenu();
        menuIsOpen = false;
    }
})

const photo1 = document.getElementById('photo1');
const link_menu = document.getElementsByClassName('link_menu');
const h1 = document.querySelector('h1');
const mainText = document.getElementById('mainText');

const slideImages = () => {

    for(let link of link_menu){
        link.addEventListener('mouseover', ()=>{
        let nome = link.innerText;
        switch(nome){
            case 'Premier League':
                photo1.style = `margin-left: ${-100}%; transition: all 1s ease`                
                break;
            case 'Série A':
                photo1.style = `margin-left: ${-200}%; transition: all 1s ease`                
                break;
                case 'La Liga':
                photo1.style = `margin-left: ${-300}%; transition: all 1s ease`;
                break;
            case ' ':
                photo1.style = `margin-left: ${-400}%; transition: all .6s ease`;
                break;
        }
        h1.style.opacity = '0';
        mainText.classList.add('mainTextDown');
        menuBar.classList.replace('menuBarClosed', 'menuBarOpen')
        

        })
    
        link.addEventListener('mouseout', ()=>{
            menuBar.classList.replace('menuBarOpen', 'menuBarClosed')
            photo1.style = `margin-left: ${0}%; transition: all 1s ease`;        
            h1.style.opacity = '1';
            mainText.classList.remove('mainTextDown');
            
        })
    
    }
}

// window.addEventListener('resize', function () {
//     var largura = window.innerWidth;

//     if (largura < 1024) {
//         btn__Menu.style.width = '10%';
//         btn__Menu.style.backgroundColor = 'red';
        
//     } else {
//         btn__Menu.style.width = '5%';
//         btn__Menu.style.backgroundColor = 'aqua';

//     }
// });
