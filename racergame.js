

// var updatePlayerPosition = function(player1) {
// 	document.getElementById('p1pts1').innerHTML = "One Point"
// };



// var listen = document.getElementById("p1pts1");
// // listen.addEventListener("keyup", updatePlayerPosition);

// updatePlayerPosition(player1);


 // document.querySelector("#player1_strip td")

 player1KeyCode = 'A'.charCodeAt(0);
player2KeyCode = 'L'.charCodeAt(0);

var handleKeyPress = function(event){


	if (event.keyCode === player1KeyCode)
	{
		var player1update = document.querySelector("#player1_strip td:not(.active)");
		if (player1update) {
			player1update.classList.add("active");	
		} else {
			alert("Congratulations player 1, you've finished the game!")
		}	
	} else if (event.keyCode === player2KeyCode) {
		var player2update = document.querySelector("#player2_strip td:not(.active)");
		if (player2update) {
			player2update.classList.add("active");	
		} else {
			alert("Congratualtions Player 2, you've finished the game!");
		}
	}
	else {
		console.log("you've pressed the wrong key, hit 'A'");
	}
	


	console.log("button pressed");
	console.log("key pressed: " + event.keyCode)
};

document.addEventListener("keyup", handleKeyPress, false);


 


 
