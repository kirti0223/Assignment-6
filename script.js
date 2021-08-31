var btn = document.getElementById("button");
var tasks_container = document.getElementById("tasks-container");

const arr = [];

var h4 = document.createElement("h3");
tasks_container.appendChild(h4);
h4.innerHTML = "No tasks available!";
h4.style.cssText = 'width: 100%; color: rgb(250, 20, 147); font-size: 23px; font-weight:100';

function task_desc(task){
    arr.push(task);
    if(arr.length !== 0){
        h4.remove();
    }
    console.log(arr);
    var task_div = document.createElement("DIV");
    var input = document.createElement("INPUT");
    var update = document.createElement("i");
    update.classList.add("fas", "fa-edit");
    var up = document.createElement("i");
    up.classList.add("fas", "fa-arrow-up");
    var down = document.createElement("i");
    down.classList.add("fas", "fa-arrow-down");
    var del = document.createElement("i");
    del.classList.add("fas", "fa-times");
    console.log(update.className + " " + up.className + " " + down.className + " " + del.className);
    task_div.appendChild(input);
    task_div.appendChild(update);
    task_div.appendChild(up);
    task_div.appendChild(down);
    task_div.appendChild(del);
    input.value = task;
    input.disabled = true;
    tasks_container.appendChild(task_div);
    task_div.style.cssText = 'width: 100%;border-radius:10px;text-align:center;'
    tasks_container.style.cssText = 'width: 100%; display:flex; flex-wrap:wrap;justify-content: center; align-items:center;'
    input.style.cssText = 'margin:10px 10px 10px 0px;height:40px; width: 75%;  padding:5px; border-radius:10px; font-size:25px;background-color: black; border:2px solid #ddd; color: white; padding-left: 10px;font-family: "Acme", sans-serif !important;';

    del.addEventListener('click', () => {
        arr.shift();
        task_div.remove();
        console.log(arr);
        if(arr.length == 0){
            tasks_container.appendChild(h4);
            h4.style.cssText = 'width: 100%; color: rgb(250, 20, 147);font-size: 23px; font-weight:100';    
            tasks_container.style.cssText = 'height:40px'
        }
    });

    update.addEventListener('click', () => {
        console.log(input.disabled);
        input.disabled = !input.disabled;
        if(input.disabled == false){
            input.style.cssText = 'margin:10px 10px 10px 0px;height:40px; width: 75%;  padding:5px; border-radius:10px; font-size:25px;border:2px solid #ddd;background-color: rgb(241, 131, 103);padding-left: 10px;font-family: "Acme", sans-serif !important;'
        }else{
            input.style.cssText = 'margin:10px 10px 10px 0px;height:40px; width: 75%;  padding:5px; border-radius:10px; font-size:25px;background-color: black; border:2px solid #ddd; color: white;padding-left: 10px;font-family: "Acme", sans-serif !important;';
        }
    });

    down.addEventListener('click',()=>{
        let x=task_div.nextSibling;
        let y=task_div;
        if(x!=null)
        {
            task_div.remove();
            x.after(y);
        }
    })

    up.addEventListener('click',()=>{
        let x=task_div.previousSibling;
        let y=task_div;
        if(x!=null)
        {
            task_div.remove();
            x.before(y);
        }
        
    })
}

btn.onclick = function(){
    var task = document.getElementById("task");
    // createTask(task.value);
    if(task.value == ''){
        return;
    }
    task_desc(task.value);
};


