
var num = 6;
var colors = generateRandomColors(num);
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById("RGBcolor");
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var mode = document.querySelectorAll(".mode");

easy.addEventListener("click",function(){
	easy.classList.add("clicked");
	hard.classList.remove("clicked");

	num = 3;
	colors = generateRandomColors(num);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;

	//add colors in the top three and hide the buttom three squares
	for(var i = 0; i < squares.length; i++){
		if(i < 3){
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});


hard.addEventListener("click",function(){
	hard.classList.add("clicked");
	easy.classList.remove("clicked");

	num = 6;
	colors = generateRandomColors(num);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;

	//add colors in the top three and hide the buttom three squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}	
});

reset.addEventListener("click",function(){
	//generate new colors
	colors = generateRandomColors(num);

	//pick a new random color from colors
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	
	//change squares colors
	changeSquareColors(colors);
	h1.style.background = "steelblue";
	message.textContent = " "
	this.textContent = "new color!";
});

colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i]

	//click
	squares[i].addEventListener("click", function(){

		//get the clicked color
		var colorClicked = this.style.background;

		//compare 
		console.log(pickedColor,colorClicked);
		if(pickedColor === colorClicked){
			changeColors(pickedColor);
			message.textContent = "Correct!";
			h1.style.background = pickedColor;
			reset.textContent = "Play Again!";
		}else{
			this.style.background = "#232323";
			message.textContent = "Try again!";
		}
	});
}

//change all the squares' color
function changeSquareColors(colors){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
}


//change all the squares to picked color
function changeColors(color){
	squares.forEach(function(square){
		square.style.background = color;
	});
}

function pickRandomColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(numbers){
	//make an array
	var arr = [];
	//add random color numbers in the array
	for(var i = 0; i < numbers; i++){
		arr[i] = randomColor();
	}
	//return the array
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var red = Math.floor(Math.random() * 256);
	//pick a green from 0 to 255
	var green = Math.floor(Math.random() * 256);
	//pick a blue from 0 to 255
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}




