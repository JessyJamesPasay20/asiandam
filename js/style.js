// logic for the hamburger menu in the nav. 
function openSlideMenu(){
    document.getElementsByTagName('header')[0].style.alignItems = 'unset';
    document.getElementsByTagName('header')[0].style.padding = '0';
    document.getElementsByTagName('nav')[0].style.width = '100%';
    document.getElementsByTagName('nav')[0].style.display = 'flex';
  }
  function closeSlideMenu(){
    document.getElementsByTagName('header')[0].style.alignItems = 'center';
    document.getElementsByTagName('header')[0].style.padding = '20px 5%';
    document.getElementsByTagName('nav')[0].style.width = '0';
    document.getElementsByTagName('nav')[0].style.display = 'none';
  }
// SCOLL REVEAL ANIMATION
window.addEventListener('scroll', reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal')

  for(var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else {
    }
  }
}