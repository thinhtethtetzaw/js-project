// UI
const textel = document.getElementById('text');
const speedel = document.getElementById('speed');
const pgh = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
// console.log(pgh.length);	//string character array


// start point lyy u 
let idx = 1;	//L lo lo chin loh length 1 ka ny sa u
let speed = 1000;

function autotext(){
	// console.log('hay');

	textel.innerText = pgh.slice(0,idx);

	// idx += 1;
	idx++

	if(idx > pgh.length){
		idx = 1;
	}

	setTimeout(autotext,speed)
}
autotext();

// Event Listener
speedel.addEventListener('input',()=>{
	// console.log('hay');
	// console.log(speedel.value);

	speed = 100/speedel.value;
})