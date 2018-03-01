var count = 0;
var m;
var s;

function add(id){

	var n = document.getElementById(id);
	document.getElementById(id).style.color = '#2E0E0E';
	
	if(count == 0){

		n.value = "0";
		count++;

	}else if(count == 1){

		n.value = "1";
		count++;
	}else{

		n.value = "";
		count = 0;
	}
}

function check(id){

	count = 0;

	var n = document.getElementById(id);

	var radixPos = id.indexOf('.');

	var value = id.slice(radixPos+1);

	var item = document.getElementById(id).value;

	if( value != item){

		
		n.style.color = 'red';
		
	}else{

		n.disabled = 'true';
	}

	checkAll();
}

function checkAll(){

	var list = document.querySelectorAll("input[type=button]");

	var x = document.getElementById("bodyy");

	var count = 0;

	for(var i = 0; i<list.length; i++){

		if(list[i].disabled == false){

			if(m == 0 && s == 0){
		
			x.innerHTML = "<h6>Game Over</h6><br><br><form><button>Play Again</button>";
			}
			break;	

		}else{

			count++;

		}
	}

	if(count == list.length){

		x.innerHTML = "<h6>Congratulations</h6><br><br><form><button>Play Again</button>";
	}

}



window.onload = function(){

	document.getElementById('timer').innerHTML =  05 + ":" + 00;
 
	startTimer();

};



function startTimer() {

  	var presentTime = document.getElementById('timer').innerHTML;
  	var timeArray = presentTime.split(/[:]+/);
  	m = timeArray[0];
  	s = checkSecond((timeArray[1] - 1));

  	if(s==59){

  		m = m-1;
  	}

  	document.getElementById('timer').innerHTML = m + ":" + s;

  	if(m == 0 && s == 0){
  
  		checkAll();
  	
  
  }else{

  	
  	setTimeout(startTimer, 1000);
  }
   	 
  	
  }




function checkSecond(sec) {
  
  	if (sec < 10 && sec >= 0){
  		
  		sec = "0" + sec;
  		
  	}

  	if (sec < 0){
  		
  		sec = "59";


  	}

  	return sec;
}