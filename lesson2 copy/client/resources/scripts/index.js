//js sees ' and " the same; and doesnt require the semicolon
//backticks let you put all these lines into one thingy

let taskList = [
    {
    task: "pa1", 
    dueDate: "9/5", 
    taskStatus: "started"
},
    {
    task: "pa2", 
    dueDate: "9/8", 
    taskStatus: "notstarted"
},
    {
    task: "pa3", 
    dueDate: "9/20", 
    taskStatus: "notstarted"
}
]
function handleOnLoad(){
    buildTable();
}
function buildTable(){
    let app = document.getElementById("app")
    for(let i = 0; i < 3;i++){
        console.log(taskList[i].task);
    }
    taskList.forEach(task => {
        console.log(task.task)
    })
    let html = `<table class="baseTable">
    <tr>
      <th>Task</th>
      <th>Due Date</th>
      <th>Status</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>`
    taskList.forEach((task) => {
        //let editTask = JSON.stringify(task)
        html += `<tr>
      <td>${task.task}</td>
      <td>${task.dueDate}</td>
      <td>${task.taskStatus}</td>
      <td><button onclick='handleEdit(${JSON.stringify(task)})'>Edit</button></td>
      <td><button onclick="handleDelete('${task.task}')">Delete</button></td>
      </tr>`
    })  
    html+=`</table>`
    //javascript struggles to pass objects it just does strings, so thats why you add the tick marks around it

    app.innerHTML = html
}
function handleSubmit(){
    console.log("Made it to handle submit");
    let myTask = {}
    
    myTask.task = document.getElementById("task").value
    myTask.dueDate = document.getElementById("dueDate").value
    myTask.taskStatus = document.getElementById("status").value 
    //javascript will just attempt to use a var variable if you use a new variable like status instead of taskStatus
    //means no syntax error if you make this mistake
    taskList.push(myTask);

    document.getElementById("task").value = ""
    document.getElementById("dueDate").value = ""
    document.getElementById("status").value = ""

    buildTable();
    console.log(myTask)
}
function handleDelete(taskToDelete){
    taskList = taskList.filter((task) => task.task != taskToDelete)
    console.log("made it to the delete ", taskList) 
    buildTable()
}
function handleEdit(stringTask){
    let task = JSON.parse(stringTask)
    console.log("made it to the edit ", task)
}