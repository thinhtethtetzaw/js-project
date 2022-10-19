// UI
const checkbox = document.getElementById('toggle'),
	slider = document.getElementById('slider');

const basic = document.querySelector('.basic'),
	prof = document.querySelector('.prof'),
	master = document.querySelector('.master');

// Event Listener
slider.addEventListener('click',()=>{
	// console.log('hay')

	if(!checkbox.checked){
		//check win yin 
		basic.innerText = 110;
		prof.innerText = 230;
		master.innerText = 350;
	}else{
		// check ma win yin
		[basic.textContent,prof.textContent,master.textContent] = [9.99,19.99,29.99];
	}



});