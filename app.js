//console.log('this thing on?')
/*Love-Life: At game start a user will push the "start button".  An input field will be available for users to insert the name of their love.  A timer will begin at the start of the game counting down from 5 minutes.  During the first two minutes, the user will see an image of "young love", during the third and fourth minute, the user will see an image of, "grown love", and the last minute will feature an image of, "old love".

The game has metrics.  To keep their love alive, the user must press buttons. The buttons will add two points to the metrics of, "romance", "space", and "laughs".  The metrics will start at a 5, in a scale between 1-10.  Each of the metrics will decrease one point each second of the game.  If the user keeps all three metrics above 0 throughout the five minutes, they will receive an image of "strong love", and if they are unable to keep the metrics up...their love will die.  */

const loveLife = {
    age: "young love",
    romance: 5,
    space: 5,
    laughs: 5,
    progressBarsTimer: null,
    //progressBarsTime: 5,
    time: 60,  
    timer: null,
    start(event) {
        console.log('Time for Love!');
        $("#start-button").remove();
        $("#romance-btn").on("click", loveLife.romance.romanceHealth);
        $("#space-btn").on("click", loveLife.space.spaceHealth);
        $("#laughs-btn").on("click", loveLife.laughs.laughsHealth);
    },
    startTimer(){
        loveLife.timer = setInterval(loveLife.reduceTime, 1000);
        loveLife.progressBarsTimer = setInterval(loveLife.progressBarsReduceTime, 5000); 
    },
    romanceHealth() {
        return loveLife.romance++;
    },
    spaceHealth() {
        return loveLife.space++;
    },
    laughsHealth() {
        return loveLife.laughs++;
    },
    reduceTime(){
        loveLife.time--;
        if(loveLife.time <= 0){
            loveLife.age++;
            loveLife.time = 180;
            $("p").text(`Age of Love: ${loveLife.age}`);
        }
    },

};

$("#start-button").on("click", loveLife.start); 




//Objects to create

 //const timer = {

 //},

 //const img ={

 //},


 //Methods = timer counting down, metrics decreasing with seconds 1:1, age progression (1-2-3mins), //image change (1-2,3mins), game end(win/loss)


   
 



















