// UI
const formel = document.getElementById('form');
const inputel = document.getElementById('input');
const todoul = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem("todos"));			//storage htl ka key ko string phyit ny tok json nk array chg pee swel htoke
// console.log(todos);
// console.log(typeof todos);


// Array pyoke pee obj phyit ag looping pat
if(todos){
	todos.forEach(todo => addtodo(todo));
}

// Event Listener
formel.addEventListener('submit',(e)=>{
	// console.log('hay');

	addtodo();
	e.preventDefault();

});


// addtodo
function addtodo(todo){
	// console.log("i am working");

	let todotext = inputel.value;
	// console.log(todotext);


	if(todo){
		todotext = todo.text; 	//obj so toh key so tk text mhr htae tk value ko li mhr pya
	}

	// input mhr yite dk sr ko li htl htae ml
	if(todotext){
		const li = document.createElement('li');


		// linethrough lote htrr dk a tine refresh lote ll pyn paw ag

		if(todo && todo.complete){
			// add class
			li.classList.add('completed');
		}

		//d a hti



		li.appendChild(document.createTextNode(todotext));
		// console.log(li);
		todoul.appendChild(li);	//ul htl htae ml
		inputel.value = "";	//enter lote yin recent text ma kyan ag

		// add to local storage
		updatelocalstorage();

		// add line through
		li.addEventListener('click',()=>{
			li.classList.toggle('completed');
			updatelocalstorage();

		});

		// remove by right click
		li.addEventListener('contextmenu',(e)=>{
			// console.log('i am working');
			li.remove();
			updatelocalstorage();
			e.preventDefault();

		});

		
	}else{
		window.alert('Enter Your Todo');
	}


}


function updatelocalstorage(){
	// console.log("storage ready");

	let todolis = document.querySelectorAll('li');	//nodelist a ny nk hwet lr ml
	// console.log(todolis);

	let todos = [];	//ya lr dk text twy ko array htl  htae

	//li 1 kyong chin hwet ag looping pat
	todolis.forEach(todoli=>{
		// console.log(todoli);
		// console.log(todoli.innerText);



		//2 khu htae chin toh object nk htae
		todos.push({
			//key:value
			text:todoli.innerText,
			complete:todoli.classList.contains('completed') 	//, : br mha ma htae nk
		});


	});

	// console.log(todos);
						// key
	localStorage.setItem('todos',JSON.stringify(todos));		//json yk string format nk array ko string chng pee htae
}