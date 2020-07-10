// function EasyPeasyParallax() {
// 	scrollPos = $(this).scrollTop();
// 	$('.p1').css({
// 		'background-position' : '50% ' + (-scrollPos/4)+"px"
// 	});
//   $('.p2').css({
// 		'background-position' : '50% ' + (-scrollPos/8)+"px"
// 	});
//   $('.p3').css({
// 		'background-position' : '70% ' + (-scrollPos/16)+"px"
// 	});
// 	$('.parallax-text').css({
// 		'margin-top': (scrollPos/2)+"px",
// 		'opacity': 1-(scrollPos/230)
// 	});
// }
// $(document).ready(function(){
// 	$(window).scroll(function() {
// 		EasyPeasyParallax();
// 	});
// });

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// Get the header
// var header = document.getElementById("navbar");

// Get the offset position of the navbar
// var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }