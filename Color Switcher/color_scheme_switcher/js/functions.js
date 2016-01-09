$(document).ready(function(){

	var firstName = prompt( 'What is your name?');
	var lastName = prompt('What is your last name?')
	var age = prompt( 'What is your age?');

	var fullName = firstName + ' ' + lastName

	firstName = age;  //what is first name?  It will be 28 as you are setting the first name as the age and vice versa


	console.log(fullName);  //fullname is an identified variable and not a string


	$('li#grayButton').click(function(){

		$('body').css('background-color', 'gray');
		$('body').css('color', 'white');
		$('h1').html( firstName );;

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