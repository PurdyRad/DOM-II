// Your code goes here
//1
const mainNavigation = document.querySelector('.main-navigation');

mainNavigation.addEventListener('mouseover', function (event){
    event.target.style.backgroundColor = '#fcbd50';
});

//2
const logo = document.querySelector('.logo-heading');

logo.addEventListener('click', function (){
    alert ("All Aboard!");
});

//3

const navi = document.querySelectorAll('a');

navi[0].addEventListener('afterprint', function (event) {
    event.target.style.border = '2px #da3246'
});
navi[1].addEventListener('afterprint', function (event) {
    event.target.style.border = '2px #da3246'
});
navi[2].addEventListener('afterprint', function (event) {
    event.target.style.border = '2px #da3246'
});
navi[3].addEventListener('afterprint', function (event) {
    event.target.style.border = '2px #da3246'
});

//4
window.addEventListener('load', function(){
    alert('Try to find all my messages!');
});


//5
document.addEventListener('fullscreenchange', function(){
    if (document.fullscreenElement) {
        document.style.backgroundColor = '#00458b';
    }
    else { 
        document.style.backgroundColor = 'white';
    };
});

const titles = document.querySelector('.content-section');

titles.addEventListener('wheel', function(event) {
    event.target.textContent = 'WOW WHAT HAPPENED?';
});

//6
const imgFluid = document.querySelector('.img-fluid');

imgFluid.addEventListener('dblclick', function(){
    alert("Life's a boat!")
});

//7
const text = document.querySelector('.text-content');

text.addEventListener('mouseover', function(){
    text.style.cursor = 'crosshair';
});

//8
const contentPick = document.querySelector('.content-pick h4');

contentPick.addEventListener('copy', function(){
    contentPick[0].textContent = 'Some cool words huh?';
})

//9
const btn = document.querySelectorAll('.btn');

btn[0].addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = '#da3246';
});
btn[1].addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = '#da3246';
});
btn[2].addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = '#da3246';
});

//10

const footer = document.querySelector('footer p');

footer.addEventListener('beforeprint', function(){
    footer.style.fontSize = '25px';
});
