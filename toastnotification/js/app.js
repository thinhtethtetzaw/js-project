// UI
const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
	'Message One',
	'Message Two',
	'Message Three',
	'Message Four',
	'Message Five'
];


// Method 1

// button.addEventListener('click',()=>createnotification());

// function createnotification(){
// 	// console.log('hay')
// 	const notify = document.createElement('div');
// 	notify.classList.add('toast');
// 	notify.innerText = getrandommessage();
// 	// console.log(notify);

// 	toasts.appendChild(notify);

// 	setTimeout(()=>{
// 		notify.remove();
// 	},3000);
// }

// function  getrandommessage(){
// 	return messages[Math.floor(Math.random()*messages.length)];
// }
// console.log(getrandommessage());

// Method2
// button.addEventListener('click',()=>createnotification('Can\'t access!'));

// function createnotification(message){
// 	const notify = document.createElement('div');
// 	notify.classList.add('toast');
// 	notify.innerText = message ? message: getrandommessage();
// 	// console.log(notify);

// 	toasts.appendChild(notify);

// 	setTimeout(()=>{
// 		notify.remove();
// 	},3000);
// }

// function  getrandommessage(){
// 	return messages[Math.floor(Math.random()*messages.length)];
// }


// Method3
// color htae ml
button.addEventListener('click',()=>createnotification('Can\'t access!','success'));

function createnotification(message,type){
	const notify = document.createElement('div');
	notify.classList.add('toast');
	notify.classList.add(type ? type : "info")
	notify.innerText = message ? message: getrandommessage();
	// console.log(notify);

	toasts.appendChild(notify);

	setTimeout(()=>{
		notify.remove();
	},3000);
}

function  getrandommessage(){
	return messages[Math.floor(Math.random()*messages.length)];
}