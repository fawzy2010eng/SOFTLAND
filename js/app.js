// setting up the navbar
var list = document.querySelectorAll(".navbar a");
for(var i = 0; i < list.length; i++){
    list[i].style.color = "white"      
}
document.querySelector('.navbar i').style.color = 'white';

var btnexpand = document.querySelector('.navbar button');
var expand = btnexpand.getAttribute('aria-expanded');
var menu = document.querySelector('.navbar-nav');
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos == 0) {
      document.querySelector(".navbar").style.backgroundColor = "transparent";
      for(var i = 0; i < list.length; i++){
        list[i].style.color = "white"      
      }
    document.querySelector('.navbar i').style.color = 'white'    
    } else {
      document.querySelector(".navbar").style.backgroundColor = "white";
      for(var i = 0; i < list.length; i++){
        list[i].style.color = "black"      
      }
          document.querySelector('.navbar i').style.color = 'black'    

  }
}