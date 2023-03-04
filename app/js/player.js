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

const loop = document.querySelectorAll("loop")
for (let i=0; i<loop.length; i++) {
    console.log("music appears");
    console.log("music is playing");
    console.log("loop is playing");
}