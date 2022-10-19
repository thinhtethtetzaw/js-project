const togglebtn = document.getElementById('toggle');
const openbtn = document.getElementById('open');

const modal = document.getElementById('modal');
const closebtn = document.getElementById('close');

// Event listener Nav
togglebtn.addEventListener('click',()=>{
	// console.log('hay');
	document.body.classList.toggle('shownav');
})

// Show modal
openbtn.addEventListener('click',()=>{
	modal.classList.add('showmodal');
});

// close modal
closebtn.addEventListener('click',()=>{
	modal.classList.remove('showmodal');
});

// High Modal on outside click
// window.addEventListener('click',(e)=>{
// 	// console.log(e.Target);
// 	if(e.Target === modal){
// 		modal.classList.remove('showmodal');
// 	}
// });

// window.addEventListener('click',(e)=>e.target === modal ? modal.classList.remove('showmodal') :'');

