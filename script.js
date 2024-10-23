const inputbox=document.getElementById("input-field");//get access to the input-field
const listContainer=document.getElementById("list-container");//get access to the list-container
function addTask(){
	if(inputbox.value==''){//if input-field is blank then...
		alert("You must write something!");
	}
	else{
		let li = document.createElement("li");//create a new element for the to do list
		li.innerHTML = inputbox.value;//get the new task
		listContainer.appendChild(li);//add the new list element to the list
		let span= document.createElement("span");//add the button to remove the specific task
		span.innerHTML="\u00d7";
		li.appendChild(span);
	}
	inputbox.value='';//remove the task from the input-field
	saveData();//save the data in the browser
}

// Add a click event listener to the listContainer element
listContainer.addEventListener("click", function(e){
	//check is the tag name of the target element of the event is LI
	if(e.target.tagName==="LI"){
		//toggle the presence of the "checked" class on the target LI element
		e.target.classList.toggle("checked");
	}
	//if the target element's tag name is SPAN
	else if(e.target.tagName === "SPAN"){
		//remove the parent element of the target SPAN element(which shoule be an LI element)
		e.target.parentElement.remove();
	}
},false);

function saveData(){
	localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
	listContainer.innerHTML=localStorage.getItem("data");

}

showTask();