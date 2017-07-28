$(document).ready(function(){
	//iniciar ScrollMagic	
	var controller = new ScrollMagic.Controller();

	var escena = new ScrollMagic.Scene({
		triggerElement: '#main',
		triggerHook: .5,
		offset: -50
	})
	.setClassToggle('#project01', 'fade-in')
	.addIndicators({
		name: 'HOLA ',
		colorTrigger: 'black',
		indent: 200,
		colorStart: '#75C695',
		colorEnd: 'pink'
	})
	.addTo(controller);


});


















