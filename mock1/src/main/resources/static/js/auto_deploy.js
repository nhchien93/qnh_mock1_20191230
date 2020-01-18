var rows = 10;
var cols = 10;
var N = 60;
var array = [1, 1, 1];

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

