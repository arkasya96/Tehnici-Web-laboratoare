
    var movePixels = 10; // number of pixels
    var delayMs = 50; // number of miliseconds
    var dogTimer = null;
    var animate,animate2;
    var speed;
    var dogSpeed = 0;
    var initialMovePixels = 10;
    document.getElementById("start-button").addEventListener('click', dogWalk);
    // Move the image on screen with 10px
    function dogWalk() {
      document.getElementById("start-button").disabled = true;
      var img = document.getElementsByTagName('img')[0];
      var currentLeft = parseInt(img.style.left);
      img.style.left = (currentLeft + movePixels) + 'px';
      // reset image position to start
      if (currentLeft > (window.innerWidth-img.width)) {
        img.style.left = '0px';
      }
      animate = setTimeout(function(){dogWalk();},delayMs);
      speed =(currentLeft + movePixels)/animate; 
      console.log(speed);
      document.getElementById("info").innerHTML = movePixels *(1000/delayMs) + 'px/s';
    }
  
    // Call dogWalk function every 50 ms
    function startDogWalk() {
      dogTimer = window.setInterval(dogWalk, delayMs);
      setTimeout(dogWalk(),dogTimer);
      }
   
    function faster() {
        var img = document.getElementsByTagName('img')[0];
        var currentLeft = parseInt(img.style.left);
        dogSpeed = 2*movePixels *(1000 / delayMs) + " px / s";
        document.getElementById("info").innerHTML = dogSpeed;
        img.style.left = (currentLeft + 100) + 'px';
        // reset image position to start
        if (currentLeft > (window.innerWidth-img.width)) {
          img.style.left = '0px';
        }
        animate = setTimeout(function(){dogWalk();},delayMs);
        //speed =(currentLeft + 2*movePixels)/animate2;
        
        
        console.log(speed); 
    }
    
    function moveFaster(){
      movePixels += 1;
      document.getElementById("info").innerHTML = movePixels *(1000/delayMs) + 'px/s';
    }

    document.getElementById("speed-button").addEventListener('click', moveFaster);


    function stopDog() {
      var img = document.getElementsByTagName('img')[0];
      var currentLeft = parseInt(img.style.left);
      img.style.left = (currentLeft + 100) + 'px';
      // reset image position to start
      if (currentLeft > (window.innerWidth-img.width)) {
        img.style.left = '0px';
      }
      animate = setTimeout(function(){dogWalk();},delayMs);
      speed =(currentLeft + 2*movePixels)/animate2;
      console.log(speed); 
      document.getElementById("start-button").disabled = false;
  }
  
    function stop(){
      clearTimeout(animate);
      window.clearInterval(dogTimer);
      clearTimeout(animate2);
      document.getElementById("start-button").disabled = false;
   }
  

   var btn = document.createElement("button");
   btn.id = "reset-button";
   btn.innerHTML = "Reset";
   document.getElementById("buttons").appendChild(btn);
   document.getElementById("reset-button").addEventListener('click', resetDog);

  function resetDog(){
    movePixels = initialMovePixels;
    document.getElementById("info").innerHTML = movePixels *(1000/delayMs) + 'px/s';

  }
   
  