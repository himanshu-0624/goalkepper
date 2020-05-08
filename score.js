var p1b = document.querySelector("#p1");
var p2b = document.getElementById("p2");
var d1 = document.querySelector("#d1");
var d2 = document.querySelector("#d2");
var resetb = document.getElementById("reset");
var num = document.querySelector("input");
var wind = document.getElementById("change");
var p1score = 0;
var p2score = 0;
var winningScore = 5;
var gameover = false;
p1b.addEventListener("click",function(){
	if(!gameover){
		p1score++;
		if(winningScore==p1score){
		 gameover = true;
		 d1.classList.add("win");
		}
	d1.textContent = p1score;

	}
	
})
	
p2b.addEventListener("click",function(){
	if(!gameover){
	p2score++;
	if(winningScore==p2score){gameover=true;
		d2.classList.add("win");}
	d2.textContent = p2score;}
})
resetb.addEventListener("click",function(){reset();})
function reset(){
	p1score = 0;
    p2score = 0;
    d1.textContent = p1score;
    d2.textContent = p2score;
     d1.classList.remove("win");
      d2.classList.remove("win");
      gameover = false;

};
num.addEventListener("change",function(){reset();
  wind.textContent = num.value;
  winningScore = num.value;
  
})