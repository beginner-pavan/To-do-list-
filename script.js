const inputbox = document.getElementById("inputbox");
const listcontainer = document.getElementById("listcontainer");
const clearbtn = document.getElementById("clearbtn");

  
function addTask(){
    if(inputbox.value == ""){
        alert("Please add some Task😉")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = ""
    savedata()
 
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
},false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask(); 

clearbtn.addEventListener("click", () => {
    // Remove all child elements of listcontainer
    while (listcontainer.firstChild) {
        listcontainer.removeChild(listcontainer.firstChild);
    }
    // Clear data from localStorage as well
    localStorage.removeItem("data");
});
