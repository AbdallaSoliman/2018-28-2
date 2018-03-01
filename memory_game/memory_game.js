var numb=0;
var first_card;
var second_card;
var match=0;
var cards=[];
var count=0;
var minutes=1;
var seconds=60;
var winFlag=true;
var counterFlag=true;
var oldCard=100;
var end =document.getElementsByClassName('game-over')[0]
cards[0]="batot.png";
cards[1]="princess.png";
cards[2]="Pinocchio.png";
cards[3]="cinderella.png";
cards[4]="Dumbo_baloon.png";
cards[5]="batot.png";
cards[6]="micky.png";
cards[7]="Pinocchio.png";
cards[8]="Dumbo_baloon.png";
cards[9]="princess.png";
cards[10]="micky.png";
cards[11]="cinderella.png";

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

 shuffle(cards);
 countdown();
function choose(card)
{
	if (numb==0)
	{
		first=card;
        document.images[card].src=cards[card];
		oldCard=card;
        numb=1;	
		counterFlag=false;		
	}
	else if (numb==1&&oldCard!=card)
	{
		second=card;
        document.images[card].src=cards[card];
		numb=2;
        timer= setInterval(check,500);
		counterFlag=true;
	}
	else
	{		
		counterFlag=false;

		oldCard=100;
	}	
}
function check()
{
	numb=0;
	clearInterval(timer);
	if (cards[first]==cards[second]&&counterFlag)
	{
		match++;
        count++;		
		if (match==6)
		{
		end.style.display = 'flex';
        end.querySelector('h1').innerText = 'you win';	
        end.querySelector('.final-score').innerText = 'score: ' + count;
		winFlag=false;
		}
		
		document.getElementById("counter").innerHTML=count;
		
	}
	else
	{
	  document.images[first].src="Disney_princess.png";
	  document.images[second].src="Disney_princess.png";
	  return;
	}
	
	
}
function ResetGame()
{
	location.reload();
}
function countdown()
{if(winFlag){
	current_min=minutes-1;
	seconds--;
	var time =document.getElementById("timer");
	if (seconds !=-1)
	{
	time.innerHTML=current_min.toString()+":"+(seconds<10?"0":"")+seconds.toString();
	}
	if (seconds>=0)
	{
		setTimeout(countdown,1000);
	}
	else
	{
		 if(current_min >= 1){
                minutes--;
				seconds=60;
				countdown();
            }	
	}
	if (current_min==0&& seconds==0)
	{
		end.style.display = 'flex';
        end.querySelector('h1').innerText = 'you lose';	
        end.querySelector('.final-score').innerText = 'score: ' + count;	
	}
}
}
