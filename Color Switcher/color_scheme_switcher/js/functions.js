$(document).ready(function(){

	console.log('Hellow world.');

	$('li#grayButton').click(function(){

		$('body').css('background-color', 'gray');
		$('body').css('color', 'white');
	});

	$('li#whiteButton').click(function(){

		$('body').css('background-color', 'white');
		$('body').css('color', 'black');
	});

		$('li#yellowButton').click(function(){

		$('body').css('background-color', 'yellow');
		$('body').css('color', 'white');
	});

		$("li#doAnimation").click(function() {

			 $ ("h1").animate({
			    // opacity: 0.25,
			    left: "+=50",
			    // height: "toggle"
			  }, 1000, function() {
			    // Animation complete.
			  });

		});


});