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
window.addEventListener('scroll',function(){
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 300 ) {
        var profits = document.querySelector('.profits');
        profits.style.marginTop = '90px';
        profits.style.opacity = '1';
    }
})
window.addEventListener('scroll',function(){
	var currentScrollPos = window.pageYOffset;
	if(currentScrollPos > 570){
		document.querySelector(".navbar").style.boxShadow = '.3rem .3rem .3rem rgba(8,8,8,.1 )'
	}else{
		document.querySelector(".navbar").style.boxShadow = 'none'
	}
})

window.addEventListener('scroll',function(){
	var currentScrollPos = window.pageYOffset;
	if(currentScrollPos > 1000){
		document.querySelector(".adv img").style.marginRight = '0px'
	}
})


window.addEventListener('scroll',function(){
	var currentScrollPos = window.pageYOffset;
	if(currentScrollPos > 1600){
		document.querySelector(".lastimg").style.marginLeft = '0px'
	}
})



$('.owl-carousel').owlCarousel({
    items: 1,
	autoplay : true,
    loop : true,
    dots : true,
    dotsEach : 1,	
	responsive:{
        0:{
            dots:false
        },
        480:{
            dots:true
        },
        1200:{
            dots:true
        }
    }    
})
;
