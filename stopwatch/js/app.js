// UI
const display = document.querySelector('.display');
const startbtn = document.querySelector('.start');
const pausebtn = document.querySelector('.pause');
const resetbtn = document.querySelector('.reset');

//overwrite ya ag let nk declare pee startpoint u
// let milliseconds = 0,
// 	seconds = 0,
// 	minutes = 0,
// 	hours = 0;

//array nk declare ll ya
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];

// console.log(milliseconds);

// Event Listener
startbtn.addEventListener('click',starttimer);
pausebtn.addEventListener('click',pausetimer);
resetbtn.addEventListener('click',resettimer);

	
let time;	//time so dk variable ko ma tu dk function 2 khu mhr use chin loh global scope mr declare lote

// start timer
function starttimer(){
	// console.log('start timer');



	// interval twy ko shinn htoke pyy 
	if(time !== null){
		clearInterval(time);
	}
						//fun 		ms
	time = setInterval(displaytimer,10);
}

// pause timer
function pausetimer(){
	// console.log('pause timer');
	clearInterval(time);	//set interval pyy dr ko pyn pyoke
}

// reset timer
function resettimer(){
	// console.log('reset timer');
	clearInterval(time);	//set interval pyy dr ko pyn pyoke
	[milliseconds,seconds,minutes,hours] = [0,0,0,0];
	display.innerText ="00 : 00 : 00 : 000";

}


// Display timer
function displaytimer(){
	// console.log('hay i am working');

	milliseconds += 10;		//100ms pyae tine 
	console.log(milliseconds);


	if(milliseconds === 1000){
		milliseconds = 0;	//1000 pyae tine 0ms pyn phyit
		// console.log(milliseconds);

		// seconds += 1; 	//1000ms pyae tine 1s toe twrr ml
		seconds++;
		// console.log(seconds);

		if(seconds === 60){
			seconds = 0;
			// console.log(seconds);

			minutes++;
			// console.log(minutes);

			if(minutes === 60){
				minutes = 0;

				hours++;
			}
		}


	}
	let h = hours < 10 ? "0" + hours : hours;
	let m = minutes < 10 ? "0" + minutes :minutes;
	let s = seconds < 10 ? "0" + seconds :seconds; 
	let ms = milliseconds < 10 ? "00"+ milliseconds : milliseconds < 100 ? "0"+ milliseconds: milliseconds;

	display.innerText = `${h} : ${m} : ${s} : ${ms}`;
}
//1s = 1000ms
// leading format
// 001
// 098
// 100
