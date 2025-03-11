const addButton = document.getElementById("addButton");

addButton.addEventListener('click',function(){
    const taskToAdd = document.getElementById('taskname').value;
    if(!taskToAdd) return;
    console.log(taskToAdd)
    
        const newTaskDiv  = document.createElement("div");
        const delButton = document.createElement("button");
        delButton.textContent = "usuń"
        
        newTaskDiv.style.width = "100%";
        newTaskDiv.style.display = "flex";
        newTaskDiv.style.justifyContent = "space-between";
        newTaskDiv.style.alignItems = "center";
        newTaskDiv.style.marginBottom = "10px";

        const textNode = document.createTextNode(taskToAdd);
        newTaskDiv.appendChild(textNode);

        newTaskDiv.appendChild(delButton);

        document.getElementById('tasks-list').appendChild(newTaskDiv);


        document.getElementById('taskname').value = "";

        delButton.addEventListener('click', function(){
            document.getElementById('tasks-list').removeChild(newTaskDiv);
        })
})
