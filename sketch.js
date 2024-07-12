let gameSeq = [];
let userSeq = [];

let btns = ['pink','orange','blue','green'];

let started = false;
let level = 0;

let guide = document.querySelector('.guide')

document.addEventListener('keypress',function(){
    if(started == false){
        started = true;
        setInterval(levelUp(),5000);
    }
})

let allbtn = document.querySelectorAll('.btn');

for(btn of allbtn){
    btn.addEventListener('click', btnPress);
}

function levelUp(){

    userSeq=[];
    level++;
    guide.innerHTML = `Level ${level}`;

    let ranIdx = Math.floor(Math.random() * 3);
    let ranCol = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranCol}`);

    gameSeq.push(ranCol);
    gameFlash(ranBtn);
}

function checkAns(idx) {

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }

    }else{
       document.querySelector('body').style.backgroundColor = 'red';
        reset();
    }
}

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function (){
        btn.classList.remove('flash');
    },200);
}

function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function (){
        btn.classList.remove('userFlash');
    },200);
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute('id');

    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

function reset(){
    guide.innerHTML = `Game Over! Your score was </b>${level}</b> <br>Press any key to start.`;
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = '#DDDDDD';
    }, 150);
}