const prices  = document.querySelectorAll('.price');
const changeBtn = document.querySelector('.change-currency'); 
console.log(prices);
console.log(changeBtn);
changeBtn.addEventListener('click', changeCur);

function changeCur(e){
	const currencyName = document.querySelector('.currency-name').innerText;
    console.log(currencyName);
    changeCurrName('UAN');
	if(e.target.innerText === 'USD' &&  currencyName === 'UAN'){
		prices.forEach(price => {
		 price.innerHTML =  (+price.innerText / 26).toFixed(2);
		});
		changeCurrName('USD');
	   } else if(e.target.innerText === 'UAN' &&  currencyName === 'USD'){
		prices.forEach(price => {
		 price.innerHTML = Math.floor((+price.innerText * 26).toFixed(2));
		});
	
	   } else{ 
		return;
	   }
	  }
   function changeCurrName(currency){
	const currnames = document.querySelectorAll('.currency-name');
	currnames.forEach(name => {
	 name.innerHTML =  currency;
	});
   }


   
   $(document).ready(function() { 
    var overlay = $('#overlay'); 
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div'); 

     open_modal.click( function(event){ 
         event.preventDefault();
         var div = $(this).attr('href');
         overlay.fadeIn(400, //показуємо оверлей
             function(){ 
                 $(div) // берем лінію з  селектором і робимо із неї джквері об"єкт
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%'}, 200); // 
         });
     });

     close.click( function(){ // клік по хрестику
            modal // всі ці модятьні вікна
             .animate({opacity: 0, top: '45%'}, 200, 
                 function(){ // 
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); // 
                 }
             );
     });
});

// Product snterier// 


var content = document.getElementById("content-i");
var button = document.getElementById("show-more");

button.onclick = function(){
	if(content.className == "open"){
		content.className ="";
		button.innerHTML = "Show More";
	}else{
		content.className = "open";
		button.innerHTML = "Show Less";
	}
};

var conten = document.getElementById("content-iw");
var buttonn = document.getElementById("show-more2");

buttonn.onclick = function(){
	if(conten.className == "lola"){
		conten.className ="";
		buttonn.innerHTML = "Show More";
	}else{
		conten.className = "lola";
		buttonn.innerHTML = "Show Less";
	}
};


window.onload = function() {
	
	//Create canvas and initialize it's context
	var canvas = document.getElementById("flying-bubbles");
	var ctx = canvas.getContext("2d");
	
	//Set the dimensions of canvas equal to the window's dimensions
	var W = window.innerWidth, H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	
	//Create an array of circles
	var circles = []; 
	for(var i = 0; i < 20; i++ ){
		circles.push(new create_circle());
	}
	
	//Function to create circles with different positions and velocities
	function create_circle() {
		//Random Position
		this.x = Math.random()*W;
		this.y = Math.random()*H;
		
		//Random Velocities
		this.vx = 0.1+Math.random()*1;
		this.vy = -this.vx;
		
		//Random Radius
		this.r = 10 + Math.random()*50;
	}
	
	//Function to draw the background
	function draw() {
		//Create the gradient
		var grad = ctx.createLinearGradient(0, 0, W, H);
		grad.addColorStop(0, 'rgb(19, 105, 168)');
		grad.addColorStop(1, 'rgb(0, 0, 0)');
		
		//Fill the canvas with the gradient
		ctx.globalCompositeOperation = "source-over";
		ctx.fillStyle = grad;
		ctx.fillRect(0,0,W,H);

		//Fill the canvas with the circles
		for(var j = 0; j < circles.length; j++) {
			var c = circles[j];
			
			//Draw the circle and it with the blur grad
			ctx.beginPath();
			ctx.globalCompositeOperation = "lighter";		
			ctx.fillStyle = grad;
			ctx.arc(c.x, c.y, c.r, Math.PI*2, false);
			ctx.fill();
			
			//Lets use the velocity now
			c.x += c.vx;
			c.y += c.vy;
			
			//To prevent the circles from moving out of the canvas
			if(c.x < -50) c.x = W+50;
			if(c.y < -50) c.y = H+50;
			if(c.x > W+50) c.x = -50;
			if(c.y > H+50) c.y = -50;
		}
	}
	
	setInterval(draw, 25);

} 

const form =document.querySelector('.currency');
const output = document.querySelector('.output');
console.log(form)
form.addEventListener('submit',convert);

function convert(e){
e.preventDefault();
const formArr = this.elements
console.log(formArr[0].value)
const input=formArr[0].value;
const currency = formArr[1].value;
let constVel;
if(currency=== 'USD'){
	constVel = input * 20.50;
}else if (currency=== 'EUR'){
	constVel = input* 30.50;
		
}else{
	constVel = input* 40.50;
}
output.innerText = constVel;
}
