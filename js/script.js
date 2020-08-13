var name = prompt("What is your name?");

function action() {
    document.getElementById("greet").innerHTML = `Hi ${name}, what are your plans today?`;
}
//Add new element to the list
function newElement() {
    var task = document.createElement("li");
    var data = document.getElementById("task").value;
    var text = document.createTextNode(data);
    task.appendChild(text);

    if (data === '') {
        alert("Don't be lazy today, do something");
    } else {
        document.getElementById("newList").appendChild(task);
    }
    //Set default input back to empty
    document.getElementById("task").value = "";
    
    //Remove each task after completion
    var span = document.createElement("span");
    var btn = document.createTextNode("Done");
    span.appendChild(btn);
    task.appendChild(span);
    span.className = "close";
    var close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {

        close[i].onclick = function (){
            var div = this.parentElement;
            div.style.display = "none";
        }
        
    }
};
