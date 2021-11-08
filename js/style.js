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
  
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementsByTagName('header').style.position = "fixed";
    document.getElementsByTagName('header').style.background = "#e6e6e6f0";
    document.getElementsByTagName('header').style.clipPath ="polygon(0 0, 100% 0, 100% 100%, 70% 100%, 50% 70%, 30% 100%, 0 100%)";
  }
  else {
    document.getElementsByTagName('header').style.position = "relative";
    document.getElementsByTagName('header').style.background = "transparent";
    document.getElementsByTagName('header').style.clipPath ="none";
    
  }
}
