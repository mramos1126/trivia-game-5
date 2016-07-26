
//score count
var wincount = 0;
var losscount = 0;


// timer
var number = 50;
    
    function run(){
      counter = setInterval(increment, 1000);
    }
    function increment(){
      number--
      document.getElementById('show-number').innerHTML = ('<h2>' + number + '</h2>')
      if (number === 0){
        stop();
        alert("Time's Up!")
        window.location.href='index.html'
      
      }
    }
    function stop(){
      clearInterval(counter);
    }
  run();



//multiple choices conditions


  $("#buttonSubmit").on("click", function(){
        Msumbit();
    });

function Msumbit()
{
var correctAnswer1 = document.getElementById("b1" )
	//var wrongAnswer1 = document.getElementByID()
	if (correctAnswer1.checked === true){
		wincount++;
		//alert("right" + wincount) 
		console.log("Correct" + wincount)
		
	$("#win").html(wincount);
	}
 
	else {
	losscount++;
	//alert("incorrect" + losscount)  //losscount++;
	$("#loss").html(losscount);
	}

var correctAnswer2 = document.getElementById("d2")
	
	if (correctAnswer2.checked === true){
		wincount++;
		//alert("right" + wincount) 
	$("#win").html(wincount);
	}

	else {
	losscount++;
	//alert("incorrect" + losscount)
	$("#loss").html(losscount);
	}	

var correctAnswer3 = document.getElementById("a3")
	
	if (correctAnswer3.checked === true){
		wincount++;
		//alert("right" + wincount) 
	$("#win").html(wincount);
	}

	else {
	losscount++;
	//alert("incorrect" + losscount)
	$("#loss").html(losscount);
	}

var correctAnswer4 = document.getElementById("c4")
	
	if (correctAnswer4.checked === true){
		wincount++;
		//alert("right" + wincount) 
	$("#win").html(wincount);
	}

	else {
	losscount++;
	//alert("incorrect" + losscount)
	$("#loss").html(losscount);
	}

var correctAnswer5 = document.getElementById("b5")
	
	if (correctAnswer5.checked === true){
	wincount++;
	//alert("right" + wincount) 
	$("#win").html(wincount);
	}

	else {
	losscount++;
	//alert("incorrect" + losscount)
	$("#loss").html(losscount);
	}

var correctAnswer6 = document.getElementById("a6")
	
	if (correctAnswer6.checked === true){
	wincount++;
	//alert("right" + wincount) 
	$("#win").html(wincount);
	}

	else {
	losscount++;
	//alert("incorrect" + losscount)
	$("#loss").html(losscount);
	}

var correctAnswer7 = document.getElementById("d7")
	
	if (correctAnswer7.checked === true){
		wincount++;
		//alert("right" + wincount) 
	$("#win").html(wincount);
	}

	else {
	losscount++;
	//alert("incorrect" + losscount)
	$("#loss").html(losscount);
	}

var correctAnswer8 = document.getElementById("b8")
	
	if (correctAnswer8.checked === true){
	wincount++;
	//alert("right" + wincount) 
	$("#win").html(wincount);
	}

	else {
	losscount++;
	//alert("incorrect" + losscount)
	$("#loss").html(losscount);
	}

var correctAnswer9 = document.getElementById("a9")
	
	if (correctAnswer9.checked === true){
		wincount++;
		//alert("right" + wincount) 
	$("#win").html(wincount);
	}

else {
	losscount++;
	//alert("incorrect" + losscount)
	$("#loss").html(losscount);
}

var correctAnswer10 = document.getElementById("b10")
	
	if (correctAnswer10.checked === true){
		wincount++;
		//alert("right" + wincount) 
	$("#win").html(wincount);
	}

	else {
	losscount++;
	//alert("incorrect" + losscount)
 	$("#loss").html(losscount);
	}
	alert("Check your results!")
	$("#results").text("Results!")
	clearInterval(counter);
 
  
	}
  

