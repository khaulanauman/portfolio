"use strict"
const container = document.querySelector(".container");
const resetBtn = document.querySelector("#reset");
const newBtn = document.querySelector("#new");
resetBtn.addEventListener("click",resetGrid);
newBtn.addEventListener("click",newGrid);
/*default grid*/
window.onload=createGrid(16);
function createGrid(size){
    /*dynamic size*/
    const containerWidth=container.clientWidth;
    const boxWidth = Math.floor(containerWidth / size);
    for(let i=1;i<=size;i++){
        const row = document.createElement("div");
        container.appendChild(row);
        for(let j=1;j<=size;j++){
            console.log("div no "+j+" of row "+i+" created")
            const box = document.createElement("div");
            box.style.boxSizing = 'border-box';
            box.style.width=boxWidth+"px";
            box.style.height=boxWidth+"px";
            box.style.border="2px solid blue";
            box.classList.add("box");
            box.addEventListener("mouseover",()=>{
                box.style.backgroundColor="white"
            });
           row.appendChild(box);
        }
    }
}
/*clear styling in box*/
function resetGrid(){
    const boxes = container.querySelectorAll(".box");
    boxes.forEach(box => {
      box.style.background = "black";
    });
}
/*remove previous gtid before creating new one*/
function clearGrid(){
    const container = document.getElementsByClassName("container")[0];
    while (container.firstChild) {
    container.removeChild(container.firstChild);
    }
}
function newGrid(){
    let size=0;
    /*making sure size is less than 100*/
    while(true){
        size= window.prompt("Enter the no. of boxes per row");
        if(size==null){
            break;
        }
        if(size>0&&size<=100){
            clearGrid();
            createGrid(size);
            break;
        }
        else{
            alert("Please enter a number above 0 and below 100");
        }
    } 
}