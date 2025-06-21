let tache=[];
const affiche=document.getElementById("todo-list");
let task=document.querySelector("input");
const formu=document.querySelector("form");
formu.addEventListener("submit",(e)=>{
    e.preventDefault();
    tache.push(task.value.trim());
    
});
