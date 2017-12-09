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
			  		$( this ).addClass( "xcell" );
			  		$(this).off("click");
			  		console.log($('#1'));
			}
			else{
				  	$( this ).addClass( "ocell" );
				  	//console.log(this);
				  	$(this).off("click");
				  	
			}
			//Winning Logic for X
			if(($('#1').hasClass('xcell')) && ($('#2').hasClass('xcell')) && ($('#3').hasClass('xcell'))) {
				alert("X Wins!");  }
			if(($('#4').hasClass('xcell')) && ($('#5').hasClass('xcell')) && ($('#6').hasClass('xcell'))) {
				alert("X Wins!");  }
			if(($('#7').hasClass('xcell')) && ($('#8').hasClass('xcell')) && ($('#9').hasClass('xcell'))) {
				alert("X Wins!");  }
			if(($('#1').hasClass('xcell')) && ($('#5').hasClass('xcell')) && ($('#9').hasClass('xcell'))) {
				alert("X Wins!");  }	
			if(($('#3').hasClass('xcell')) && ($('#5').hasClass('xcell')) && ($('#7').hasClass('xcell'))) {
				alert("X Wins!");  }
			if(($('#1').hasClass('xcell')) && ($('#4').hasClass('xcell')) && ($('#7').hasClass('xcell'))) {
				alert("X Wins!");  }
			if(($('#2').hasClass('xcell')) && ($('#5').hasClass('xcell')) && ($('#8').hasClass('xcell'))) {
				alert("X Wins!");  }
			if(($('#3').hasClass('xcell')) && ($('6').hasClass('xcell')) && ($('#9').hasClass('xcell'))) {
				alert("X Wins!");  }
			//Winning Logic for O
			if(($('#1').hasClass('ocell')) && ($('#2').hasClass('ocell')) && ($('#3').hasClass('ocell'))) {
				alert("O Wins!");  }
			if(($('#4').hasClass('ocell')) && ($('#5').hasClass('ocell')) && ($('#6').hasClass('ocell'))) {
				alert("O Wins!");  }
			if(($('#7').hasClass('ocell')) && ($('#8').hasClass('ocell')) && ($('#9').hasClass('ocell'))) {
				alert("O Wins!");  }
			if(($('#1').hasClass('ocell')) && ($('#5').hasClass('ocell')) && ($('#9').hasClass('ocell'))) {
				alert("O Wins!");  }	
			if(($('#3').hasClass('ocell')) && ($('#5').hasClass('ocell')) && ($('#7').hasClass('ocell'))) {
				alert("O Wins!");  }
			if(($('#1').hasClass('ocell')) && ($('#4').hasClass('ocell')) && ($('#7').hasClass('ocell'))) {
				alert("O Wins!");  }
			if(($('#2').hasClass('ocell')) && ($('#5').hasClass('ocell')) && ($('#8').hasClass('ocell'))) {
				alert("O Wins!");  }
			if(($('#3').hasClass('ocell')) && ($('6').hasClass('ocell')) && ($('#9').hasClass('ocell'))) {
				alert("O Wins!");  }
			
	});	


	//Restart
	$("#restart").click(function(){
		window.location.reload();	
		});
});