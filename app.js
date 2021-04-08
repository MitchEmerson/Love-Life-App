console.log('this thing on?')
/*Love-Life: At game start a prompt will be used to ask the user the name of their love.  The answer will be inserted into the second h2 element.  A timer will begin at the start of the game counting down from 5 minutes.  During the first two minutes, the user will see an image of "young love", during the third and fourth minute, the user will see an image of, "grown love", and the last minute will feature an image of, "old love".

The game has metrics.  To keep their love alive, the user must press buttons. The buttons will add two points to the metrics of, "romance", "space", and "laughs".  The metrics will start at a 5, in a scale between 1-10.  Each of the metrics will decrease one point each second of the game.  If the user keeps all three metrics above 0 throughout the five minutes, they will receive an image of "strong love", and if they are unable to keep the metrics up...their love will die.  */



const loveLife = {
        
        age: "young love",
        romance: 5,
        space: 5,
        laughs: 5,

        start(event) {
        const nameOfLove = prompt('What is the name of your love?', 'Kris') 
            if(nameOfLove != null) {
                document.getElementById(nameOfLove).innerHTML =
                `${nameOfLove}`;
              
            };
        }  
},
