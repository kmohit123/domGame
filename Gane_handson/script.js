let myScore=100
let highscore=null;
let randomnumber = getRandomNumber(100);
function ReTry(){
    document.getElementById('guessid').value="";
    document.querySelector('.myScore').textContent=100
    document.getElementById('Scan').textContent="Start guessing..."
    document.body.style.backgroundColor="#222";
    document.querySelector('.number').style.height="12rem"
    document.querySelector('.number').textContent="?";
    randomnumber = getRandomNumber(100);
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}
  
    
  
function checkIt(){
          
    let GivenNumber= document.getElementById('guessid').value

    if(myScore!==0){
       if(GivenNumber>randomnumber ){
       document.querySelector('.Mes').textContent="Your Guess Is High"
           myScore--
         document.querySelector('.myScore').textContent=myScore
       }

       else if(GivenNumber<randomnumber){
        document.querySelector('.Mes').textContent="Your Guess Is Low"
        myScore--
        document.querySelector('.myScore').textContent=myScore
       }

       else{

        document.querySelector('.Mes').textContent="🤩🤩 Hurray You Won 🤩🤩"

        document.body.style.backgroundColor="green";
        myScore--
        
        document.querySelector('.myScore').textContent=myScore
        document.querySelector('.UnKnown').textContent=randomnumber;
        document.querySelector('.UnKnown').style.height="10rem"
         highscore=myScore
          
        document.querySelector('.highscore').textContent=highscore
        document.querySelector('.check').style.visibility="hidden" 

       }
    } 
    else{
        document.querySelector('.message').textContent="Game Over 🙂 🙂 your Score is 0"  
    }
       
   }
