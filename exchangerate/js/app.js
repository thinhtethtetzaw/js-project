// UI
const currencyoneel = document.getElementById('currency-one'),
	amountoneel = document.getElementById('amount-one');

const currencytwoel = document.getElementById('currency-two'),
	amounttwoel = document.getElementById('amount-two');

const swapel = document.getElementById('swap'),
	rateel = document.getElementById('rate');


function calculate(){
	// console.log('hay');

	const crcyone = currencyoneel.value;
	const crcytwo = currencytwoel.value;

	const amtone = amountoneel.value;
	const amttwo = amounttwoel.value;

	const apikey = "17ced5a8621ce74366d7ef45";

	const uri = `https://v6.exchangerate-api.com/v6/${apikey}/latest/${crcyone}`;
	// console.log(uri);

	// AJAX Request

	// console.log(fetch(uri));

	fetch(uri)
	.then(res=>res.json()) //respond pyn dk hr ko json format u dk step //res nk req ny yr mhr kyite dr htae loh ya dl
	.then(req=>{		//request nk pyn phann mr
		// console.log(req);
		// console.log(req.conversion_rates);
		// console.log(typeof req.conversion_rates);
		// console.log(req.conversion_rates.USD); or console.log(data.conversion_rates[crcytwo]);

		const rate = req.conversion_rates[crcytwo];	//json nk khw htrr dr moh array nk pyn khw mha ya ml
		// console.log(rate);

		rateel.innerHTML = `1 ${crcyone} = ${rate} ${crcytwo}`;

		amounttwoel.value = (amountoneel.value * rate).toFixed(2);




	});


}

// Event Listener
currencyoneel.addEventListener('change',calculate);
amountoneel.addEventListener('input',calculate);

currencytwoel.addEventListener('change',calculate);
amounttwoel.addEventListener('input',calculate);

swapel.addEventListener('click',()=>{
	// console.log('already swap');

	const temp = currencyoneel.value;

	currencyoneel.value = currencytwoel.value;
	currencytwoel.value = temp;

	calculate();
})


