const slyderTop = document.querySelector('.slyderLine');
let audioFolse = document.getElementById('audiofolse');
let audioWin = document.getElementById('audiwin');
let audioGameOver = document.getElementById('gameover');
let pesnya = document.getElementById('pesnya');


let p = 0;
function slyder (){
        p = p - 225;
        if ( p < -1350 ){
            p = 0
        }
        slyderTop.style = `margin-left:${p}px; transition:1s;`;
    }
    
    
    
let secretNum = Math.ceil(Math.random()*10);
let tries = 0;
function num(num){
    if(tries >= 5){
        let a = document.querySelector('.pupop_end');
            a.style.opacity = '1', a.style.visibility = 'visible';
            audioGameOver.play()
        return;
    }
    if (num === secretNum){
            let b = document.querySelector('.pupop_true')
                b.style.opacity = '1', b.style.visibility = 'visible';
                let d = document.querySelector('.front');
                d.style.display = 'none'
                audioWin.play()
        tries = 5;
        return;
    }else{
            let c = document.querySelector('.pupop_false');
                c.style.opacity = '1', c.style.visibility = 'visible';
                audioFolse.play();
    tries++;
    }
};



function clos(){
    let c = document.querySelector('.pupop_false')
    c.style.opacity = '0', c.style.visibility = 'hidden';
    let a = document.querySelector('.pupop_end');
    a.style.opacity = '0', a.style.visibility = 'hidden';
    let b = document.querySelector('.pupop_postcard');
    b.style.opacity = '0', b.style.visibility = 'hidden';
    let d = document.querySelector('.front');
    d.style.display = 'block';
    pesnya.pause();
};


function win(){
    let d = document.querySelector('.pupop_postcard');
    d.style.opacity = '1', d.style.visibility = 'visible';
    let b = document.querySelector('.pupop_true');
    b.style.opacity = '0', b.style.visibility = 'hidden';
    setInterval(slyder, 3000);
    pesnya.play();
};