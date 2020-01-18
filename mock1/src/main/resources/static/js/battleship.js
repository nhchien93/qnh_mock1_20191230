var rows = 10;
var cols = 10;
var N = 60;

var gameBoardContainer1 = document.getElementById("gameboard1");
for (var i = 0; i < cols; i++) {
	for (var j = 0; j < rows; j++){
		var square = document.createElement("div");
		square.id = 'A' + j + i;
		gameBoardContainer1.appendChild(square);		
		var topPosition = j*N;
		var leftPosition = i*N;
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';
	}
}

var gameBoardContainer2 = document.getElementById("gameboard2");
for (var i = 0; i < cols; i++) {
	for (var j = 0; j < rows; j++){
		var square = document.createElement("div");
		square.id = 'B' + j + i;
		gameBoardContainer2.appendChild(square);		
		var topPosition = j*N;
		var leftPosition = i*N;
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';
	}
}

var shipdownedCount1=0;
var hitCarrier1=0;
var hitBattleship1=0;
var hitCruiser1=0;
var hitSub1 =0;
var hitDestroyer1=0;

var shipdownedCount2=0;
var hitCarrier2=0;
var hitBattleship2=0;
var hitCruiser2=0;
var hitSub2 =0;
var hitDestroyer2=0;

var gameBoard1 = gameBoard_test;
var z = Math.floor(Math.random()*random_board.length);
var gameBoard2 = random_board[z];

var logboard = document.getElementById("logboardtext");
//carrier = 5, battleship = 4, cruiser 3, submarine 2, destroyer 1.
//no ship = 0, hit = 9, miss = 8
//length = 5, 4, 3, 3, 2.

function fire1(row,col){
	var targetID = "B" + row + col;
	logboard.innerHTML += "Player1:" + targetID;
	var target = document.getElementById(targetID);
	if (gameBoard2[row][col] == 0) {
			target.style.background = '#bbb';
			gameBoard2[row][col] = 8;
			logboard.innerHTML += " miss! <br\>" ;
		} else if (gameBoard2[row][col] == 1) {
			$.playSound('/audio/sound.mp3');
			target.style.background = 'red';
			gameBoard2[row][col] = 9;
			hitDestroyer2++;
			logboard.innerHTML += " hit! <br\>"
			if (hitDestroyer2==2){
				
				shipdownedCount2++;
				logboard.innerHTML += " Player2's Destroyer sank! <br\>";
			}
		} else if (gameBoard2[row][col] == 2) {
			$.playSound('/audio/sound.mp3');
			target.style.background = 'red';
			gameBoard2[row][col] = 9;
			hitSub2++;
			logboard.innerHTML += " hit! <br\>"
			if (hitSub2==3){
				shipdownedCount2++;
				logboard.innerHTML += " Player2's Submarine sank! <br\>";
			}			
		} else if (gameBoard2[row][col] == 3) {
			$.playSound('/audio/sound.mp3');
			target.style.background = 'red';
			gameBoard2[row][col] = 9;
			hitCruiser2++;
			logboard.innerHTML += " hit! <br\>"
			if (hitCruiser2==3){
				shipdownedCount2++;
				logboard.innerHTML += " Player2's Cruiser sank! \n";
				}			
		} else if (gameBoard2[row][col] == 4) {
			$.playSound('/audio/sound.mp3');
			target.style.background = 'red';
			gameBoard2[row][col] = 9;
			hitBattleship2++;
			logboard.innerHTML += " hit! <br\>"
			if (hitBattleship2==4){
				shipdownedCount2++;
				logboard.innerHTML += " Player2's Battleship sank! <br\>";
			}			
		} else if (gameBoard2[row][col] == 5) {
			$.playSound('/audio/sound.mp3');
			target.style.background = 'red';
			gameBoard2[row][col] = 9;
			hitCarrier2++;
			logboard.innerHTML += " hit! <br\>"
			if (hitCarrier2==5){
				shipdownedCount2++;
				logboard.innerHTML += " Player2's Carrier sank! <br\>";
			}					
		} 
		else if (gameBoard2[row][col] > 5) {
			var row = Math.floor(Math.random()*10);
			var col = Math.floor(Math.random()*10);
			fire1(row,col);
//			logboard.innerHTML += " Wasted! <br\>";
		}		
}

function fire2(row,col){
	var targetID = "A" + row + col;
	logboard.innerHTML += "Player2:" + targetID;
	var target = document.getElementById(targetID);
	if (gameBoard1[row][col] == 0) {
			target.style.background = '#bbb';
			gameBoard1[row][col] = 8;
			logboard.innerHTML += " miss! <br\>" ;
		} else if (gameBoard1[row][col] == 1) {
			target.style.background = 'red';
			gameBoard1[row][col] = 9;
			hitDestroyer1++;
			logboard.innerHTML += " hit! <br\>"
			if (hitDestroyer1==2){
				shipdownedCount1++;
				logboard.innerHTML += " Player1's Destroyer sank! <br\>";
			}
		} else if (gameBoard1[row][col] == 2) {
			target.style.background = 'red';
			gameBoard1[row][col] = 9;
			hitSub1++;
			logboard.innerHTML += " hit! <br\>"
			if (hitSub1==3){
				shipdownedCount1++;
				logboard.innerHTML += " Player1's Submarine sank! <br\>";
			}
		} else if (gameBoard1[row][col] == 3) {
			target.style.background = 'red';
			gameBoard1[row][col] = 9;
			hitCruiser1++;
			logboard.innerHTML += " hit! <br\>"
			if (hitCruiser1==3){
				shipdownedCount1++;
				logboard.innerHTML += " Player1's Cruiser sank! <br\>";
			}			
		} else if (gameBoard1[row][col] == 4) {
			target.style.background = 'red';
			gameBoard1[row][col] = 9;
			hitBattleship1++;
			logboard.innerHTML += " hit! <br\>"
			if (hitBattleship1==4){
				shipdownedCount1++;
				logboard.innerHTML += " Player1's Battleship sank! <br\>";
			}
		} else if (gameBoard1[row][col] == 5) {
			target.style.background = 'red';
			gameBoard1[row][col] = 9;
			hitCarrier1++;
			logboard.innerHTML += " hit! <br\>"
			if (hitCarrier1==5){
				shipdownedCount1++;
				logboard.innerHTML += " Player1's Carrier sank! <br\>";
			}					
		} 
		else if (gameBoard1[row][col] > 5) {
			var row = Math.floor(Math.random()*10);
			var col = Math.floor(Math.random()*10);
			fire2(row,col);
//			logboard.innerHTML += " Wasted! <br\>";
		}		
}

function autofire(){
	setTimeout(function(){
		fire();
		if (shipdownedCount1 != 5 && shipdownedCount2 != 5){
			autofire();
		} 
		else if (shipdownedCount1 == 5) {
			$.playSound('/audio/win.mp3');
			alert("All Player1's battleships have been defeated! Player2 win!");
		}
		else if (shipdownedCount2 == 5) {
			$.playSound('/audio/win.mp3');
			alert("All Player2's battleships have been defeated! Player1 win!");
		}		
	},250);
	
}


function fire(){
		var x1 = Math.floor(Math.random()*10);
		var y1 = Math.floor(Math.random()*10);
		var x2 = Math.floor(Math.random()*10);
		var y2 = Math.floor(Math.random()*10);
		fire1(x1,y1);
		fire2(x2,y2);
}

var Start = document.getElementById("Start");
Start.addEventListener("click", autofire, false);

//gameBoardContainer1.addEventListener("click", fireTorpedo1, false);
//function fireTorpedo1(p1) {
//  // if item clicked (e.target) is not the parent element on which the event listener was set (e.currentTarget)
//	if (p1.target !== p1.currentTarget) {
//      // extract row and column # from the HTML element's id
//		var row = p1.target.id.substring(1,2);
//		var col = p1.target.id.substring(2,3);
//      //alert("Clicked on row " + row + ", col " + col);
//				
//		// if player clicks a square with no ship, change the color and change square's value
//		if (gameBoard1[row][col] == 0) {
//			p1.target.style.background = '#bbb';
//			// set this square's value to 3 to indicate that they fired and missed
//			gameBoard1[row][col] = 8;
//			
//		// if player clicks a square with a ship, change the color and change square's value
//		} else if (gameBoard1[row][col] == 1) {
//			p1.target.style.background = 'red';
//			// set this square's value to 2 to indicate the ship has been hit
//			gameBoard1[row][col] = 9;
//			
//			// increment hitCount each time a ship is hit
//			hitDestroyer1++;
//			if (hitDestroyer1==2){
//				shipdownedCount1++;
//				alert("Player1's Destroyer sank!")
//			}
//			// this definitely shouldn't be hard-coded, but here it is anyway. lazy, simple solution:
//			if (shipdownedCount1 == 5) {
//				alert("All Player1's battleships have been defeated! Player1 win!");
//			}
//		} else if (gameBoard1[row][col] == 2) {
//			p1.target.style.background = 'red';
//			gameBoard1[row][col] = 9;
//			hitSub1++;
//			if (hitSub1==3){
//				shipdownedCount1++;
//				alert("Player1's Submarine sank!")
//			}			
//			if (shipdownedCount1 == 5) {
//				alert("All Player1's battleships have been defeated! Player1 win!");
//			}
//		} else if (gameBoard1[row][col] == 3) {
//			p1.target.style.background = 'red';
//			gameBoard1[row][col] = 9;
//			hitCruiser1++;
//			if (hitCruiser1==3){
//				shipdownedCount1++;
//				alert("Player1's Cruiser sank!")
//			}			
//			if (shipdownedCount1 == 5) {
//				alert("All Player1's battleships have been defeated! Player1 win!");
//			}	
//		} else if (gameBoard1[row][col] == 4) {
//			p1.target.style.background = 'red';
//			gameBoard1[row][col] = 9;
//			hitBattleship1++;
//			if (hitBattleship1==4){
//				shipdownedCount1++;
//				alert("Player1's Battleship sank!")
//			}			
//			if (shipdownedCount1 == 5) {
//				alert("All Player1's battleships have been defeated! Player1 win!");
//			}	
//		} else if (gameBoard1[row][col] == 5) {
//			p1.target.style.background = 'red';
//			gameBoard1[row][col] = 9;
//			hitCarrier1++;
//			if (hitCarrier1==5){
//				shipdownedCount1++;
//				alert("Player1's Carrier sank!")
//			}			
//			if (shipdownedCount1 == 5) {
//				alert("All Player1's battleships have been defeated! Player2 win!");
//			}				
//		} else if (gameBoard1[row][col] > 5) {
//			alert("Stop wasting your torpedos! You already fired at this location.");
//		}		
//  }
//  p1.stopPropagation();
//}

/* gameBoardContainer2.addEventListener("contextmenu", fireTorpedo2, false);
function fireTorpedo2(p2) {
    // if item clicked (e.target) is not the parent element on which the event listener was set (e.currentTarget)
	if (p2.target !== p2.currentTarget) {
        // extract row and column # from the HTML element's id
		var row = p2.target.id.substring(1,2);
		var col = p2.target.id.substring(2,3);
        //alert("Clicked on row " + row + ", col " + col);
				
		// if player clicks a square with no ship, change the color and change square's value
		if (gameBoard2[row][col] == 0) {
			p2.target.style.background = '#bbb';
			// set this square's value to 3 to indicate that they fired and missed
			gameBoard2[row][col] = 8;
			
		// if player clicks a square with a ship, change the color and change square's value
		} else if (gameBoard2[row][col] == 1) {
			p2.target.style.background = 'red';
			// set this square's value to 2 to indicate the ship has been hit
			gameBoard2[row][col] = 9;
			
			// increment hitCount each time a ship is hit
			hitDestroyer2++;
			if (hitDestroyer2==2){
				shipdownedCount2++;
				alert("Player2's Destroyer sank!")
			}
			// this definitely shouldn't be hard-coded, but here it is anyway. lazy, simple solution:
			if (shipdownedCount2 == 5) {
				alert("All Player2's battleships have been defeated! Player1 win!");
			}
		} else if (gameBoard2[row][col] == 2) {
			p2.target.style.background = 'red';
			gameBoard2[row][col] = 9;
			hitSub2++;
			if (hitSub2==3){
				shipdownedCount2++;
				alert("Player2's Submarine sank!")
			}			
			if (shipdownedCount2 == 5) {
				alert("All Player2's battleships have been defeated! Player1 win!");
			}
		} else if (gameBoard2[row][col] == 3) {
			p2.target.style.background = 'red';
			gameBoard2[row][col] = 9;
			hitCruiser2++;
			if (hitCruiser2==3){
				shipdownedCount2++;
				alert("Player2's Cruiser sank!")
			}			
			if (shipdownedCount2 == 5) {
				alert("All Player2's battleships have been defeated! Player1 win!");
			}	
		} else if (gameBoard2[row][col] == 4) {
			p2.target.style.background = 'red';
			gameBoard2[row][col] = 9;
			hitBattleship2++;
			if (hitBatlleship2==4){
				shipdownedCount2++;
				alert("Player2's Battleship sank!")
			}			
			if (shipdownedCount2 == 5) {
				alert("All Player2's battleships have been defeated! Player1 win!");
			}	
		} else if (gameBoard2[row][col] == 5) {
			p2.target.style.background = 'red';
			gameBoard2[row][col] = 9;
			hitCarrier2++;
			if (hitCarrier2==5){
				shipdownedCount2++;
				alert("Player2's Carrier sank!")
			}			
			if (shipdownedCount2 == 5) {
				alert("All Player2's battleships have been defeated! Player1 win!");
			}				
		} else if (gameBoard2[row][col] > 5) {
			alert("Stop wasting your torpedos! You already fired at this location.");
		}		
    }
    p2.stopPropagation();
} */