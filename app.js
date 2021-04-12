//console.log('this thing on?')
/*Love-Life: At game start a user will push the "start button".  An input field will be available for users to insert the name of their love.  A timer will begin at the start of the game counting down from 5 minutes.  During the first two minutes, the user will see an image of "young love", during the third and fourth minute, the user will see an image of, "grown love", and the last minute will feature an image of, "old love".

The game has metrics.  To keep their love alive, the user must press buttons. The buttons will add two points to the metrics of, "romance", "space", and "laughs".  The metrics will start at a 5, in a scale between 1-10.  Each of the metrics will decrease one point each second of the game.  If the user keeps all three metrics above 0 throughout the five minutes, they will receive an image of "strong love", and if they are unable to keep the metrics up...their love will die.  */

    const loveLife = {
    name: null,
    age: "young love",
    romance: 5,
    space: 5,
    laughs: 5,
    progressBarsTimer: null,
    //progressBarsTime: 5,  
    
    clickStart() {
        
        
        $("#start-button").remove();
        $("#romance-btn").on("click", loveLife.romanceHealth);
        $("#space-btn").on("click", loveLife.spaceHealth);
        $("#laughs-btn").on("click", loveLife.laughsHealth);
        $("#countdown").on("click", loveLife.countdownEl);
    },
        
}  
        
        
        const startingTimer = 3;
        let time = startingTimer * 60;

        const countdownEl = document.getElementById('countdown');
        
        setInterval(updateCountdown, 1000);

        function updateCountdown()  {
            const minutes = Math.floor(time/60);
            let seconds = time % 60;

            seconds = seconds < 10 ? '0' + seconds : seconds;

            countdownEl.innerHTML = `${minutes}: ${seconds}`;
            time--;
        }
    
         
    /*romanceHealth() {
        console.log("this workin?")
        loveLife.romance++;
        
    },
    spaceHealth() {
        return loveLife.space++;
    },
    laughsHealth() {
        return loveLife.laughs++;
    },
    /*reduceTime(){
        loveLife.time--;
        if(loveLife.time <= 0){
            loveLife.age++;
            loveLife.time = 180;
            $("p").text(`Age of Love: ${loveLife.age}`);
        }
    },*/
 //
/*
$("#start-button").on("click", loveLife.start); */



//Objects to create

 //const timer = {

 //},

 //const img ={

 //},


 //Methods = timer counting down, metrics decreasing with seconds 1:1, age progression (1-2-3mins), //image change (1-2,3mins), game end(win/loss)


   





















