var numberofSquares =6;
var colors = generateRandomColors(numberofSquares);
var squares =  document.querySelectorAll(".square");
var pickedColor = randomColor();
var h1 = document.querySelector("#colorDisplay");
var header = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
h1.textContent = pickedColor;

init();

resetButton.addEventListener("click", function(){
	reset();
});



////////////---|| FUNCTIONS || ---//////////////////////

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i< modeButtons.length; i++){
		//mode buttons event listeners. 
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//si el boton es Easy, el numero sera 3 si no es easy sera 6. 
			this.textContent=== "Easy" ? numberofSquares = 3 : numberofSquares = 6;
			reset(); 
		});
	}
}

function setupSquares(){
	squares.forEach(function(square,index){
		//add colors to square.
		square.style.backgroundColor = colors[index];
		//Add click listener to every square
		square.addEventListener("click", function(){
			//grab color of clicked square and save it in a variable. 
			var clickedColor = this.style.backgroundColor;
			//Compare color of clicked square.
			if(clickedColor == pickedColor){ 
				messageDisplay.textContent="Correct!";
				resetButton.textContent = "PLAY AGAIN?"
				changeColors(pickedColor);
				header.style.background = clickedColor;
			}else{
				this.style.backgroundColor ="#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	});
}

function reset(){
	header.style.backgroundColor = "steelblue";
	//Se genera array de colores. 
	colors = generateRandomColors(numberofSquares);
	//Se selecciona un color del array. 
	pickedColor=randomColor();
	//Se muestra el color a adivinar de los 6 cuadros. 
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New Colors!?";
	messageDisplay.textContent="";
	for(var i=0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
}

function changeColors(color){
	//loop thorught all squares
	for( var i =0; i< squares.length;i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function randomColor(){
	var ranColor = Math.floor( Math.random() * colors.length );
	return colors[ranColor];
}

function generateRandomColors(num){
	//Make an Array
	var arr=[];
	//Add random colors to arr
	for(var i=0; i<num; i++){
		//get random color and push into array.
		arr.push(getRandomColor());
	}
	//return that array
	return arr;
}

function getRandomColor(){
	//pick a "red" from 0 -255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" fomr 0- 255
	var b =Math.floor(Math.random() * 256);
	var rgb = "rgb(" +r+ ", " +g+ ", " +b+ ")";
	return rgb;
}