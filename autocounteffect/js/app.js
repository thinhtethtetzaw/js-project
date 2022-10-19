// UI
const counters = document.querySelectorAll('.counter');
// console.log(counters);	//node list nk hwet lr ml
counters.forEach((counter)=>{
	// console.log(counter);
	counter.innerText = "0";

	// console.log(counter.getAttribute('data-target'));


	// function ko ta khr htl looping pat pyy ml

	const updatecounter = ()=>{

		const target = Number(counter.getAttribute('data-target'));
		// console.log(typeof target);

		const ctr = +counter.innerText;		//comparison lote chin loh number type chng
		// console.log(typeof ctr);

		const increment = target/30;		//120 ka ny sa pee toe twrr ml 100 nk srr yin
		// console.log(increment);

		if(ctr < target){
			counter.innerText = `${Math.ceil(ctr + increment)}`;		//120 ka sa p 120 c toe twrr ml
			setTimeout(updatecounter,50);		//first hr pyn hwet p nout hr twy win lr mr moh settimeout
		}
	}

	updatecounter();



});

