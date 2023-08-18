var bgcolor=["FFCCCC","FFCC66","CCFFCC","CCFF66","99FFCC","CCCC66"]
var a=0;
var duration=800;

function bgSlide(){
	document.getElementById('bg').style.backgroundColor=bgcolor[a];
	a++;
	setTimeout("bgSlide()",duration);
	if(a==bgcolor.length){
		a=0;
	}
}

bgSlide();
var numSquares = 6;
var colors = [];
var pickedColor;




var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display")
var messageDisplay = document.querySelector("#message");
var bg = document.querySelector("#bg");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");

start();
function start(){
	colorDisplay.textContent=pickedColor;
	startGame();
	startMode();
	resett();
}
resetButton.addEventListener("click", function() {
	resett();
});

function startGame(){
	for(let i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].addEventListener("click", function(){
			var clickedColor=this.style.backgroundColor;
			if(clickedColor===pickedColor){
				messageDisplay.textContent="You Win!!!";
				resetButton.textContent="Play Again";
				changeColor(pickedColor);
				
			}
			else{
				this.style.backgroundColor="transparent";
				messageDisplay.textContent="Try Again";
			}
		});
	}
}

function startMode(){
	for(let i=0; i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click", function(){
			if(this.textContent==="Easy"){
				numSquares=3;
			}
			else{
				numSquares=6;
			}
			resett();
		});
	}
}

function resett(){
	colors=ranColors(numSquares);
	pickedColor=chooseColor();
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New Colors";
	messageDisplay.textContent="";
	for(let i=0;i<squares.length;i++){
		//if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		//}
		//else{
		//	squares[i].style.display="none";
		//}
	}
}
function changeColor(color){
	for(let i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
		bg.style.backgroundColor=color;
	}
}
function chooseColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function ranColors(num) {
	var arr = [];
	for (let i = 0; i < num; i++) {
		arr.push(myColor());
	}
	return arr;	
}
//colorDisplay.textContent=myColor();
//for(let i=0;i<6;i++){
//squares[i].style.backgroundColor =myColor();
//}
function myColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
	
}

