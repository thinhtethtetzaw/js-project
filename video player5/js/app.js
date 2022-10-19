//UI
const video = document.getElementById('video');

const play = document.getElementById('play'),
	stop = document.getElementById('stop'),
	progress = document.getElementById('progress'),
	timestamp = document.getElementById('timestamp');





//play and pause video
function togglevideostatus(){
	if(video.paused){
		video.play();
	}else{
		video.pause();
	}
}

//Update Play & Pause Video
function updateplayicon(){
	if(video.paused){
		play.innerHTML = `<i class = "fas fa-play fa-2x"></i>`;
	}else{
		play.innerHTML = `<i class = "fas fa-pause fa-2x"</i>`;
	}
}

//Update Progress & Timestamp
function updateprogress(){
	// console.log(video.currentTime);
	// console.log(video.duration);


	progress.value= (video.currentTime / video.duration) * 100;

	//Get minutes

	let mins = Math.floor(video.currentTime / 60); // < 10 ? "0" + mins;

	if(mins < 10){
		//mins = "0"+mins;
		mins = 0 + String(mins);
	}
	// console.log(mins);


	//Get seconds

	let secs = Math.floor(video.currentTime % 60);
	if(secs < 10){
		secs = "0"+secs;
	}
	// console.log(secs);

	timestamp.textContent = `${mins}:${secs}`;
}

//Stop Video

function stopvideo(){
	video.currentTime = 0;
	video.pause();
}

//Set Video Progress
function setvideoprogress(){
	video.currentTime = (progress.value * video.duration) /100;
}

//Event Listener
video.addEventListener('click',togglevideostatus);
video.addEventListener('play',updateplayicon);
video.addEventListener('pause',updateplayicon);
video.addEventListener('timeupdate',updateprogress);

play.addEventListener('click',togglevideostatus);
stop.addEventListener('click',stopvideo);

progress.addEventListener('click',setvideoprogress);