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
			  		$( this ).toggleClass( "xcell" );
			  		//console.log(this);
			  		$(this).off("click");
			}
			else{
				  	$( this ).toggleClass( "ocell" );
				  	//console.log(this);
				  	$(this).off("click");
				  	
			}	
	});	
	//Restart
	$("#restart").click(function(){
		window.location.reload();	
		});
});