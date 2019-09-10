window.onload = function(){

document.getElementById("start").onclick =function(){

        let currentAnimation = document.getElementById("animation").value;
        let str = ANIMATIONS[currentAnimation].split("=====\n");
    
        var timer;
        var currentFrame=0;
        var lastFrame;
            for(i = 0;i<str.length;i++){
              setInterval(startAnimation, 500, str[currentFrame]);
                console.log(str[i]);
             }
         }

        function startAnimation(frame){
            if(currentFrame<str.length){
                 document.getElementById("text-area").value=frame;
                 currentFrame++;
            }else{
                currentFrame=0;
            }
        }
     



    }

