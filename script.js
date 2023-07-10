console.log("Welcome to tic tac toe");

let tuurn= new Audio("ting.mp3");
let gameover= new Audio("gameover.mp3");
let music= new Audio("music.mp3");
let turn="X";
let over=false;

const changeTurn = ()=>{
    return turn==="X"?"0":"X";
}
const checkWin= ()=>{
      
    let booxtext = document.querySelectorAll('.boxtext');
    
    let wins=[
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    
    wins.forEach(e =>{
        if((booxtext[e[0]].innerText === booxtext[e[1]].innerText) && (booxtext[e[2]].innerText === booxtext[e[1]].innerText) && (booxtext[e[0]].innerText !== "") )
        {     
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.info').innerText = booxtext[e[0]].innerText + " Won";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
            over=true;
            gameover.play();
        }
     
    })
}

let boxes=document.querySelectorAll(".box");
boxes.forEach((element)=>{
    let boxtext= element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
           boxtext.innerText=turn;
           turn=changeTurn();
           tuurn.play();
           checkWin();
           if(!over){
           let infoo= document.querySelector(".info");
           infoo.innerText="Turn for " +turn;
           }
        }
    })
})

let res=document.querySelector(".reset");
res.addEventListener("click", function(){
    let boxxtext = document.querySelectorAll('.boxtext');
    boxxtext.forEach(e=>{
        e.innerText="";
        over=false;
        document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px";
        let infoo= document.querySelector(".info");
           turn ="X";
           infoo.innerText="Turn for " +turn;
           document.querySelector(".line").style.width = "0vw";
    })

})
