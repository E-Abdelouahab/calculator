
let input= " ";

function affichage()
{  
     //console.log(this.value);
     /* let answer = document.getElementById("answer");
     answer.textContent+=this.value; */
     input=document.getElementById("answer");
     input.textContent+=this.value;
}


let buttons = document.getElementsByTagName("button");
for(let i = 0; i < buttons.length ; i ++ ) 
{
buttons[i].addEventListener("click", affichage);
} 


function reset() 
{
     document.getElementById("answer").textContent= " ";
     answer = "";
}

let clear = document.getElementById("reset");
clear.addEventListener("click", reset);

function egal()
{
     document.getElementById("answer").textContent=eval(input.textContent);
     input.textContent=eval(input.textContent);
}

let equal= document.getElementById("egal");
equal.addEventListener("click", egal);

function remove() 
{
     input= input.textContent.replace(input.textContent.slice(-1), " ");
     document.getElementById("answer").textContent = input;
}

let menos = document.getElementById("delete");
menos.addEventListener("click", remove);
