const player = document.querySelectorAll("player")
switch (player){
    case 'pause':
        console.log("pause");
        console.log("press to continue")
        break;
    default :
        console.log("playing");
        console.log("press to continue");
}

const loopBtn = document.querySelectorAll("loop")
for (let i=0; i<loopBtn.length; i++) {
    console.log("music appears");
    console.log("music is playing");
    console.log("loop is playing");
}