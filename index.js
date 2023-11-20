let mySound = document.getElementById('mysound');
let icon = document.getElementById('icon');

icon.onclick = function(){
    if (mySound.paused){
        mySound.play();
        icon.src='./media/pause.png';
    } else{
        mySound.pause();
        icon.src='./media/play.png'
    }
}