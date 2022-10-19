//UI
const form = document.getElementById('task-form');
const taskinput = document.getElementById('task');
const filter = document.getElementById('filter');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');


function addtask(e) {
	// console.log('hay')

	// if(taskinput.value ===''){
	// 	window.alert('Add a task')
	// }else{

	// if(taskinput.value ===''){
	// 	window.alert('Add a task')
	// }

	if(taskinput.value ===''){
		window.alert('Add a task');
		return; //ul htl mr blank g win mr soe loh
	}


	// Create li element
	const li = document.createElement('li');

	// add class
	// li.classList.add('collection-item');
	li.className = "collection-item";

	//create text node append to li
	li.appendChild(document.createTextNode(taskinput.value));

	//create link
	const link = document.createElement('a');

	// add class a nout ka materialize ka 
	link.className = "delete-item secondary-content";

	// add icon
	link.innerHTML = `<i class ="far fa-trash-alt"></i>`;

	// console.log(link);

	//append link to li
	li.appendChild(link);

	// console.log(li);


	//append li to ul
	tasklist.appendChild(li);

// } else ka a pate ko d mr htae mha br mha ma htae ll space ma win mr


	// store in localStorage
	storetaskinlocalstorage(taskinput.value);


	taskinput.value = '';

	e.preventDefault();
}



//Remove Task
function removetask(e){
	// console.log('hay');

	//console.log(e.target.parentElement);

	if(e.target.parentElement.classList.contains("delete-item")){
		// console.log('delete-item');

		if(confirm('Are You Sure')){
				//i 	a 			li
			e.target.parentElement.parentElement.remove();
		}
	}

	// Remove tasks from localStorage
								//i 	a 	li
	removetaskfromlocalstorage(e.target.parentElement.parentElement);

}

	


//clear tasks
function cleartasks(){
	// console.log('hay');

	// method 1
	// tasklist.innerHTML='';

	// method 2
	// console.log(tasklist);
	// console.log(tasklist.childElementCount);

	// let x = 0;
	// while(x < tasklist.childElementCount){
	// 	tasklist.removeChild(tasklist.firstChild);
	// }

	// method 3
	while(tasklist.firstChild){
		tasklist.removeChild(tasklist.firstChild);
	}

	// Clear all data from localStorage
	cleartasksfromlocalstorage();
}

//Store Task
function storetaskinlocalstorage(task){
	// console.log(task);



	let tasks;

	if(localStorage.getItem('tasks') === null){
		tasks = [];
	}else{
		tasks = JSON.parse(localStorage.getItem('tasks'));
		// console.log(typeof tasks);
	}

	tasks.push(task);

	// console.log(tasks);

	localStorage.setItem('tasks',tasks);

	localStorage.setItem('tasks',JSON.stringify(tasks));
}

// Get tasks from localStorage
function gettasks(){
	// console.log('hay');

	let tasks;

	if(localStorage.getItem('tasks')===null){
		tasks = [];
	}else{
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach((task)=>{
		// console.log(task);

		// create li Element
		const li = document.createElement('li');

		li.className = "collection-item";

		// create Text Node and append to li
		li.appendChild(document.createTextNode(task));


		// create new link element
		const link = document.createElement('a');

		// add class
		link.className = "delete-item secondary-content";

		// add icon
		link.innerHTML = `<i class = "fas fa-trash-alt"></i>`;

		// append link to li
		li.appendChild(link);

		// console.log(li);


		// append li into ul

		tasklist.appendChild(li);
	});
}
// gettasks();	//line149 ka hr yayy pee invoke lote lite loh d hr ma pr ll ya 




// Remove task from localStorage
function removetaskfromlocalstorage(taskitem){
	// console.log('hay');
	// console.log(taskitem);
	// console.log(taskitem.textContent);

	let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	}else{
		tasks = JSON.parse(localStorage.getItem('tasks'))
	}

	tasks.forEach((task,index)=>{
		// console.log(task);

		if(taskitem.textContent === task){
						// start,end
			tasks.splice(index,1)
		}
	})

	localStorage.setItem('tasks',JSON.stringify(tasks));  // json nk pyn string chg mha local st mr pyt twrr dl/refresh ll pyn ma paw buu

}

// clear all data from localStorage
function cleartasksfromlocalstorage(){
	localStorage.clear();
}


// filter tasks
function filtertasks(e){
	// console.log('hay');
	// console.log(e.target);
	const inputfilter = e.target.value.toLowerCase();
	// console.log(inputfilter);


	const tasks = document.querySelectorAll('.collection-item');

	// console.log(tasks); //node list nk hwet ml


	tasks.forEach((task)=>{
		// console.log(task);
		const item = task.firstChild.textContent.toLowerCase();
		// console.log(item);

		if(item.indexOf(inputfilter) !== -1){
			task.style.display = "block";
		}else{
			task.style.display = "none";
		}
	})

}



//Event Listener
//Add Task
form.addEventListener('submit',addtask);

// Remove Task
tasklist.addEventListener('click',removetask);

//clear task
clearbtn.addEventListener('click',cleartasks);

// DOM load event
document.addEventListener('DOMContentLoaded',gettasks);


// filter task event
filter.addEventListener('keyup',filtertasks);
                                                                                                                                                                                                                                   
