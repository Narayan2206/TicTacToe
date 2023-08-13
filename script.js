

let turn = "X";
let infoEl = document.querySelector(".info");
let isgameover = false;
const resetBtn = document.querySelector("#reset");
const line = document.querySelector(".line");

function changeTurn()
{
    return turn === "X"?"O":"X";
}

function checkWin()
{
    let boxtext = document.getElementsByClassName("boxtext");
      let winIndex = [
        [0,1,2, 0, 5, 0],
        [3,4,5, 0, 15, 0],
        [6,7,8, 0, 25, 0],
        [0,3,6, -10, 15, 90],
        [1,4,7, 0, 15, 90],
        [2,5,8, 10, 15, 90],
        [0,4,8, 0, 15, 45],
        [2,4,6, 0, 15, 135]
      ]

      winIndex.forEach(e => {
        if((boxtext[e[0]].textContent == boxtext[e[1]].textContent) && (boxtext[e[2]].textContent == boxtext[e[1]].textContent) && (boxtext[e[0]].textContent !== ""))
        {
            infoEl.textContent = `${boxtext[e[0]].textContent} Won!`;
            isgameover = true;
            line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            line.style.width = "100%";
        }
      });
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");  //Apne maidaan ke andar query selector
    element.addEventListener("click",()=>{
        if(boxtext.textContent === ""){
            boxtext.textContent = turn;
            turn = changeTurn();
            checkWin();
            if(!isgameover){
                infoEl.textContent = `Turn for: ${turn}`;
            }
        }
    })
});

resetBtn.addEventListener('click',()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    Array.from(boxtext).forEach(element =>{
        element.textContent = "";
    })
    turn = "X";
    isgameover = false;
    infoEl.textContent = `Turn for: X`;
    line.style.width = "0";
})

