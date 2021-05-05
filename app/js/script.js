const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.has-fade');
const burgerLinks = document.querySelectorAll('.header__burger-link');
const subLists = document.querySelectorAll('.header__burger-sublist');

btnHamburger.addEventListener('click', function () {
    if(header.classList.contains('open')){
        header.classList.remove('open');
        burgerMenu.classList.remove('fade-in');
        burgerMenu.classList.add('fade-out');
    }
    else {
        header.classList.add('open');
        burgerMenu.classList.remove('fade-out');
        burgerMenu.classList.add('fade-in');
    }
});

console.log(subLists);

// for (let i = 0; i < burgerLinks.length; i++){
//     burgerLinks[i].addEventListener('click', function(){
//         if (subLists[i].style.display === 'none'){
//             subLists[i].style.display = 'block';
//         }
//         else {
//             subLists[i].style.display = 'none';
//         }
//     })
// }

for (let i = 0; i < burgerLinks.length; i++){
    burgerLinks[i].addEventListener('click', function(){
        if(subLists[i].classList.contains('visible')){
            subLists[i].classList.toggle('invisible');
        } else {
            subLists[i].classList.toggle('visible');
        }
    })
}

// for (let i = 0; i < burgerLinks.length; i++){
//     burgerLinks[i].addEventListener('click', function(){
//         subLists[i].classList.toggle('invisible');
//     })
// }