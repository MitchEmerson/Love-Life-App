function ageFunction() {
    if(pet.age<100){
        pet.age++;
        $("#age").text(pet.age);
    }


    
             
        
        //let time : startingTimer * 60,

        
        
        
        
        updateCountdown()  {
            const minutes = Math.floor(loveLife.time);
            let seconds = minutes * 60;
            //console.log(seconds, "first log")
            seconds = seconds < 10 ? 0 + seconds : seconds;
            //console.log(typeof seconds, "second log")
            
            $countdownEl = $("#countdown");
            $countdownEl.text = `${minutes}: ${seconds}`;
            if (loveLife.time > 0) {
                loveLife.time--;
                
            }

            

        },
        
        //We need to declare a new variable

       increaseAge() {
           if(loveLife.time > 2) {
               console.log(loveLife.age)
           }
           
       },
       
       romanceHealth() { 
           console.log(loveLife.romance);
           loveLife.romanceHealth++;
        },
        
        spaceHealth()  {
            console.log(loveLife.space);
            loveLife.spaceHealth++;
        },
        
        
        laughsHealth() {
            console.log(loveLife.laughs);
            loveLife.laughsHealth++;
            
        },
        
    };
    
    setInterval(loveLife.updateCountdown, 1000),
    
    
    $("#start-button").on("click", loveLife.clickStart);
    //$("countdownEl").on("click", loveLife.clickStart);
    
    
    
    
    
    
    
    /*  changeImg = function () {
        if (loveLife.countdownEl > 120 && < 180) {loveLife.picture
        }else{
            if (loveLife.countdownEl > 60 && < 120) {loveLife.picture}else{
                if (loveLife.countdownEl > 0 && < 60) {loveLife.picture}else{  if (loveLife.countdownEl < 0)  {loveLife.picture};
            }
        }
            */
       
    
    
    
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























/* increaseAge()  {
            if(loveLife.countdownEl > 120 && loveLife.countdownEl < 180){
                console.log("young love")
            }else{
                if(loveLife.countdownEl < 120 && loveLife.countdownEl> 60 ){
                    return "grown-up love"
                }else{
                    if(loveLife.countdownEl < 60 && loveLife.countdownEl > 0){
                        return "old-love"
                    }
                }
            }
        }
        */