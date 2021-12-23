const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click',function(){
    this.classList.toggle('is-active');
    const menu = document.querySelector('body > nav > div > ul');
    menu.classList.toggle('active');
})
console.log(hamburger);
window.onresize = () =>{
if (window.innerWidth >= 768){
    hamburger.classList.remove('is-active');
    const menu = document.querySelector('body > nav > div > ul');
    menu.classList.remove('active');
}}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "#4C5C68";
    
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    
  }
}