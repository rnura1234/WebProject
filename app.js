/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*/////////////////////challange1//////////////////////

if prevdice value and current dice value is 6,
then score will be zero next player turn 




///////////////////////////challange no 2///////////////////////
set winning score as you want ,default winning score is 0;

//////////////////////////////////////////
Challenge no 3 

set  an another dice and if one of dice value is 1 then round score will be 0 and next player turn   


*/
//////////////////////////////////////////




var scores,roundscore,activePlayer,gamePlaying,finalscore,prev;

var predice;


init();///////intial function 


/////////////roll-btn  anonymous function///////////////
document.querySelector(".btn-roll").addEventListener("click",function(){

if(gamePlaying){

    ////////////////addd random number to dice value
      dice1=Math.floor(Math.random()*6)+1;
      dice2=Math.floor(Math.random()*6)+1;

      



     
      ////////////// display Dice Image with random dice value
      
      var diceDom1=document.getElementById("dice-1");
      
      diceDom1.style.display="block";
      diceDom1.src="dice-"+dice1+".png";

      var diceDom2=document.getElementById("dice-2");
      
      diceDom2.style.display="block";
      diceDom2.src="dice-"+dice2+".png";

     ///////////challenge no 2 
    
        // if(dice1==6 && predice==6){
        //     scores[activePlayer]=0;
        //     document.getElementById("score-"+activePlayer).textContent=0;
        //     nextPlayer();

        // }
   
      //////////Update roundscore if dice dice not equal to 1
           if(dice1==1 || dice2==1){
                nextPlayer();
                 /////Add roundscore 
                
             }
             else
             {
                roundscore+=(dice1+dice2);
                document.getElementById("current-"+activePlayer).textContent=roundscore;
                
               
             }

}
   
});

document.querySelector(".btn-hold").addEventListener("click",function(){
    if(gamePlaying){
    scores[activePlayer]+=roundscore;
    document.getElementById("score-"+activePlayer).textContent=scores[activePlayer];

     var input=document.querySelector('.final-score').value;
     var winning;
     
    if(input){
         winning=input;
    }
    else{
        winning=100;
    }

    if(scores[activePlayer]>=winning){

        document.getElementById("name-"+activePlayer).textContent="Winner";

        document.querySelector(".player-"+activePlayer+"-panel").classList.remove('active');
        document.querySelector("#name-"+activePlayer).classList.add("winner");
        
       document.querySelector(".dice").style.display="none";
       gamePlaying=false;
       
    
    }
    else{

        nextPlayer();
    }
}
});
function nextPlayer(){
    activePlayer==0?activePlayer=1:activePlayer=0;
   roundscore=0;

    document.getElementById("current-0").textContent='0';
    document.getElementById("current-1").textContent='0';
////////////////update class for active player
    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');

}


document.querySelector(".btn-new").addEventListener("click",init);



/////initial function at beginning of code

function init(){
scores=[0,0];
roundscore=0;
activePlayer=0;
gamePlaying=true;



//////////////////////////// initiallly dice not apear

document.getElementById("dice-1").style.display="none";
document.getElementById("dice-2").style.display="none";


/////////////////////////////////Intially all value to be zero 
document.getElementById("score-0").textContent="0";
document.getElementById("score-1").textContent="0";
document.getElementById("current-0").textContent="0";
document.getElementById("current-1").textContent="0";


document.querySelector('#name-0').textContent="Player 1";
document.querySelector('#name-1').textContent="Player 2";


document.querySelector(".player-0-panel").classList.add('active');
document.querySelector(".player-1-panel").classList.remove('active');
document.querySelector("#name-0").classList.remove("winner");
document.querySelector("#name-1").classList.remove("winner");




}