
const loveLife = {
  name: null,
  age: "young love",
  romance: 5,
  space: 5,
  laughs: 5,
  progressBarsTimer: null,
  time: 180,
  lost: false,
  //progressBarsTime: 5,  
  //$(document).ready(function()
  clickStart() {
      $("#romance-btn").on("click", loveLife.romanceHealth);
      $("#space-btn").on("click", loveLife.spaceHealth);
      $("#laughs-btn").on("click", loveLife.laughsHealth);
      //$("#start-button").on("click", loveLife.updateCountdown);  
      loveLife.increaseAge();
      $("#start-button").remove();
      //loveLife.updateCountdown(); // this will log "this is inside the hello method"
      setInterval(loveLife.updateCountdown, 1000);

      let timerID = setInterval(function() {
        loveLife.romance > 0 && loveLife.romance--;
        $("#romance-progress-span").width(`${loveLife.romance}0%`);
        //console.log(`Romance Counter: ${loveLife.romance}`);
        loveLife.laughs > 0 && loveLife.laughs--;
        $("#space-progress-span").width(`${loveLife.space}0%`);
        //console.log(`Laugh Counter: ${loveLife.laughs}`);
        loveLife.space > 0 && loveLife.space--;
        $("#laughs-progress-span").width(`${loveLife.laughs}0%`);
        //console.log(`Space Counter: ${loveLife.space}`);
        if(loveLife.romance == 0 && loveLife.laughs == 0 && loveLife.space == 0) {
          loveLife.lost = true;
          $("#li1").hide();
          $("#li2").hide();
          $("#li3").hide();
          $("#li4").hide();
          $("#li5").show();
          $("#loveAgeDisplay").text("Dead Love");
          setTimeout(function() {
            clearInterval(timerID);
          },60000);
        }
      }, 1000);

      setTimeout(function() {
        $("#li1").hide();
        $("#li2").show();
        $("#loveAgeDisplay").text("Grown Up Love");
      }, 60000);
      setTimeout(function() {
        $("#li2").hide();
        $("#li3").show();
        $("#loveAgeDisplay").text("Old Love");
      }, 60000);
      setTimeout(function() {
        if(!loveLife.lost) {
          $("#li3").hide();
          $("#li4").show();
          $("#loveAgeDisplay").text("GAME OVER: You have a strong love");
          clearInterval(timerID);
        }
      }, 60000);
      
    
    
  },
  

      updateCountdown() {
      console.log("inside update");
      const minutes = Math.floor(loveLife.time/60);
      let seconds = loveLife.time % 60;
      //console.log(seconds, "first log")
      //console.log(typeof seconds, "second log")
      
      const $countdownEl = $("#countdownEl");
          
      
      seconds = seconds < 10 ? 0 + seconds : seconds;
      $countdownEl.text = `${minutes}: ${seconds}`;
      if (loveLife.time >= 0){
          //console.log(loveLife.time, "hi, bud");
          $("#countdownEl").text(`${minutes}: ${seconds}`);
           loveLife.time--;
       }
  },
         //need to declare a variable 
         increaseAge() {
            if(loveLife.time > 2){ 
                console.log(loveLife.age)
                return $(loveLife.age)
            }
         },
         
     //},
     /// Event Listeners/button clicks
        romanceHealth() {
        loveLife.romance < 10 && loveLife.romance++;
        //console.log(loveLife.romance);
        $("#romance-progress-span").width(`${loveLife.romance}0%`);
        },
        spaceHealth() {
        loveLife.space < 10 && loveLife.space++;
        //console.log(loveLife.space);
        $("#space-progress-span").width(`${loveLife.space}0%`);
        },
        laughsHealth() {
        loveLife.laughs < 10 && loveLife.laughs++;
        //console.log(loveLife.laughs);
        $("#laughs-progress-span").width(`${loveLife.laughs}0%`);
      }
    };
    $("#li2").hide();
    $("#li3").hide();
    $("#li4").hide();
    $("#li5").hide();
    $("#start-button").on("click", loveLife.clickStart);
    //$("#countdownEl").on("click", loveLife.clickStart);
    // this will log "this is inside the hello method"
    // this will log "this is inside the hello method" 
    //setInterval(loveLife.updateCountdown(), 1000)
  
    
  
  
  
  
  /*  changeImg = function () {
      if (loveLife.countdownEl > 120 && < 180) {loveLife.picture
      }else{
          if (loveLife.countdownEl > 60 && < 120) {loveLife.picture}else{
              if (loveLife.countdownEl > 0 && < 60) {loveLife.picture}else{  if (loveLife.countdownEl < 0)  {loveLife.picture};
          }
      }
          */
  /*
  reduceTime(){
      loveLife.time--;
      if(loveLife.time > 0){
          loveLife.age++;
          loveLife.time = 3;
          $("p").text(`Age of Love: ${loveLife.age}`);
      }
  }
*/




//Methods = timer counting down, metrics decreasing with seconds 1:1, age progression (1-2-3mins), //image change (1-2,3mins), game end(win/loss)