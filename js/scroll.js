a$(document).ready(function(){

	// Iniciar ScrollMagic
	var controller = new ScrollMagic.Controller();

	// Crear escena
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#inicia',
		duration: 500,
		//offset:50,
		//triggerHook: 0 //
	})
	.setClassToggle('#project01', 'fade-in')
	.addIndicators({
		// name: 'fade scene',
		// colorTrigger: 'black',
		// indent: 200,
		// colorStart: '#75C695',
		// colorEnd: 'pink'
	})
	.addTo(controller);

});


















