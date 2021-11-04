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
  // scroll view 
function scrollview(){
  var scrollview = document.querySelector('.scrollview');
  var scrollviewposition = scrollview.getBoundingClientRect().top;
}