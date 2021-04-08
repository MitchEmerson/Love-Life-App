//console.log('this thing on?')
/*Love-Life: At game start a user will push the "start button".  An input field will be available for users to insert the name of their love.  A timer will begin at the start of the game counting down from 5 minutes.  During the first two minutes, the user will see an image of "young love", during the third and fourth minute, the user will see an image of, "grown love", and the last minute will feature an image of, "old love".

The game has metrics.  To keep their love alive, the user must press buttons. The buttons will add two points to the metrics of, "romance", "space", and "laughs".  The metrics will start at a 5, in a scale between 1-10.  Each of the metrics will decrease one point each second of the game.  If the user keeps all three metrics above 0 throughout the five minutes, they will receive an image of "strong love", and if they are unable to keep the metrics up...their love will die.  */

const loveLife = {
    romance: 5,
    space: 5,
    laughs: 5,
    start(event) {
        console.log('Time for Love!');
        $("#start-button").remove();
        $("#romance-btn").on("click", loveLife.increaseRomance);
        $("#space-btn").on("click", loveLife.method );
        $("#laughs-btn").on("click", loveLife.method );
    },
    increaseRomance() {
        return loveLife.romance+=2;
    },
    spaceHealth() {
        loveLife.space+=2;
    },

    laughsHealth() {
        loveLife.laughs+=2;
    }
};




$("#start-button").on("click", loveLife.start); 


 
/*const loveLife = {
    age: "young love",
    romance: 5,
    space: 5,
    laughs: 5,
 },

   

    romanceHealth() {
        loveLife.romance++;
    },

    spaceHealth() {
        loveLife.space++;
    },

    laughsHealth() {
        loveLife.laughs++;
    }
      */  



















