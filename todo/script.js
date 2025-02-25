const inputVal=document.getElementById("input");
const addBtn=document.getElementById("addTask");
const ul=document.getElementById("container");

function addTask(event){
    if(!inputVal.value)
    {
        alert(`Firstly add some task!`);
    }
    else
    {
        const li=document.createElement("li");
        const btn1=document.createElement("button");
        btn1.innerText="Completed";
        const btn2=document.createElement("button");
        btn2.innerText="Update";
        const btn3=document.createElement("button");
        btn3.innerText="Delete";
        li.textContent=inputVal.value;
        li.append(btn1,btn2,btn3);
        ul.appendChild(li);
        inputVal.value="";

        btn1.addEventListener("click",completeEvent);
        btn2.addEventListener("click",updateEvent);
        btn3.addEventListener("click",deleteEvent);
    }
}

function completeEvent(event)
{
    const li=event.target.parentElement;
    li.style.textDecoration="line-through";
}

function updateEvent(event) {
    const li = event.target.parentElement;
    const newTask = prompt("Update the task:", li.firstChild.textContent);
    if (newTask) {
        li.firstChild.textContent = newTask;
    }
}

function deleteEvent(event)
{
    const li=event.target.parentElement;
    ul.removeChild(li);
}

addBtn.addEventListener("click",addTask);