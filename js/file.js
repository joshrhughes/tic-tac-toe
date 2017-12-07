// console.log("js works");




//Need to have logic that allows 9 clicks.  Game needs to be restarted after that. 
//Need to alternate between x and 0
//Need to set logic for if wins.  possible loop for rows and then special for diagnial 

$().ready(function(){
	console.log("ready!");



	//selet cell divs 
	//probably need a for loop to alternate between x and o and can limit that to 9 clicks.
	//For loop is not the answer
	//when x clicks could toggel new class that has differnt colors
	
	// for (var i = 0; i < 9; i++) {
		// turns[i];
	var turnNum = 0;
	console.log(turnNum);
	$( ".cell" ).click(function() {

		//try jquery event listern off *************

		turnNum += 1;
		console.log(turnNum);

			// if ((turnNum % 2 === 0) && (turnNum < 9)) {
			if (turnNum > 9){
				return;
			}
			if(turnNum % 2 ===0){
				
			  		// $( this ).removeClass( "cell" ).addClass("newCell");
			  		$( this ).toggleClass( "xcell" );
			  		// // $(this).html( "<h2>X</h2>");	
			  		// $( this ).attr( "class", "newCell" );
			  		// $( this ).removeClass( "cell" );
			  		// $( this ).removeClass( "cell" ).addClass("newCell");
			  		console.log(this);
			  		$(this).off("click");


			}
			else{
				
				  	// $( this ).removeClass( "cell" ).addClass("newCell");
				  	$( this ).toggleClass( "ocell" );
				  	// $(this).html( "<h2>O</h2>");
				  	// $( this ).addClass( "newCell" );
				  	// $( this ).removeClass( "cell" ).addClass("newCell");
				  	console.log(this);
				  	$(this).off("click");
			}	

	});	
	// console.log('we have left the building');


	//Restart
	$("#restart").click(function(){
		window.location.reload();	
		});
});