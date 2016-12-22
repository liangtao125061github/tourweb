$(document).ready(function(){
	var top = $('#top');
	var aboutUs = $('#aboutUs');
	var services = $('#services');
	var events = $('#events');
	var gallery = $('#gallery');
	var Volunteer = $('#Volunteer');
	var contact = $('#contact');

	top.click(function() {		
		$('html,body').animate({scrollTop:0}, 1000);
	});
	$('.aboutUs-a').click(function() {
		$('html,body').animate({scrollTop:$('.aboutUs').offset().top}, 1000);
		
	});
	$('.services-a').click(function() {
		$('html,body').animate({scrollTop:$('.services').offset().top}, 1000);
		
	});
	$('.events-a').click(function() {
		$('html,body').animate({scrollTop:$('.events').offset().top}, 1000);
		
	});
	$('.gallery-a').click(function() {
		$('html,body').animate({scrollTop:$('.gallery').offset().top}, 1000);
		
	});
	$('.Volunteer-a').click(function() {
		$('html,body').animate({scrollTop:$('.Volunteer').offset().top}, 1000);
		
	});
	$('.contact-a').click(function() {
		$('html,body').animate({scrollTop:$('.contact').offset().top}, 1000);	
	});	
});

