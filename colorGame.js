var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");

var pickedColor=pickColor();
var colorDisplay=document.getElementById("display");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetDisplay=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent==="Easy"?numSquares=3:numSquares=6;
		reset();		
	});	
}

function reset(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	this.textContent="new colors"

	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		}else{
			squares[i].style.display="none";
		}
	}

	h1.style.backgroundColor="rgb(60, 110, 170)";
}

// easy.addEventListener("click",function(){
// 	easy.classList.add("selected");
// 	hard.classList.remove("selected");

// 	numSquares=3;
// 	colors=generateRandomColors(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;

// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i])
// 			squares[i].style.backgroundColor=colors[i];
// 		else
// 			squares[i].style.display="none";
// 	}
// });

// hard.addEventListener("click",function(){
// 	hard.classList.add("selected");
// 	easy.classList.remove("selected");

// 	numSquares=6;
// 	colors=generateRandomColors(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;

// 	for(var i=0;i<squares.length;i++){
// 			squares[i].style.backgroundColor=colors[i];
// 			squares[i].style.display="block";
// 	}
// });

resetDisplay.addEventListener("click",function(){
	reset();
});

colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++){
	//add initial colors
	squares[i].style.backgroundColor=colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab the color of the clicked square 
		var clickedColor=this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetDisplay.textContent="Play Again?";
		}else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}

function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[]
	//repeat num times
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}