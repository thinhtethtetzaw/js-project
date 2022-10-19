const musiccontainer = document.getElementById('music-container');

const title = document.getElementById('title'),
	progresscontainer = document.getElementById('progress-container'),
	progress = document.getElementById('progress');


const audio = document.getElementById('audio');

const cover = document.getElementById('cover');

const prevbtn = document.getElementById('prev'),
	playbtn = document.getElementById('play'),
	nextbtn = document.getElementById('next');


let songindex = 0;

// song title
const songs = ['sample1','sample2','sample3'];

// console.log(songs[songindex]);

loadsong(songs[songindex]);

function loadsong(music){
	title.innerText = music;
	audio.src = `music/${music}.mp3`;
	cover.src= `img/${music}.jpg`;
}

// Event Listener for play/pause

playbtn.addEventListener('click',()=>{
	// console.log('hay');
	// musiccontainer.classList.add('play');
	const isplaying = musiccontainer.classList.contains('play');

	if(isplaying){
		pausesong();
	}else{
		playsong();
	}
});

// Play song
function playsong(){
	musiccontainer.classList.add('play');

	playbtn.querySelector('i.fas').classList.remove('fa-play');
	playbtn.querySelector('i.fas').classList.add('fa-pause');

	audio.play();
}

// Pause song
function pausesong(){
	musiccontainer.classList.remove('play');

	playbtn.querySelector('i.fas').classList.add('fa-play');
	playbtn.querySelector('i.fas').classList.remove('fa-pause');

	audio.pause();

}

// Change Song

prevbtn.addEventListener('click',previoussong);
nextbtn.addEventListener('click',nextsong);


// previoussong
function previoussong(){
	// console.log("hay");
	songindex--;
	if(songindex < 0){
	songindex = songs.length - 1;
	}

	loadsong(songs[songindex]);
	playsong();
	
}




// nextsong
function nextsong(){
	// console.log("hay");
	// songindex += 1;
	songindex++;
	if(songindex > songs.length-1){
		songindex = 0;
	}

	loadsong(songs[songindex]);
	playsong();

}

// Update progress bar
function updateprogress(e){
	// console.log("hay"); //play lote dr nk hay twy toe twrr ml

	// console.log(audio.currentTime);
	// console.log(audio.duration);


	// Method 1 
	// const  progresspercent = (audio.currentTime / audio.duration) * 100; 	//current time ko duration nk srr pee 100 nk mhyout
	// // console.log(progresspercent);
	// progress.style.width = `${progresspercent}%`; //unit pr mha progress bar ka a lote lote ml


	// Method 2 (e htae pyy ya ml)
	// console.log(e.target);	//() htl mr e htae/info yk a di ka main ele audio 1 kyong lone ya ml/ e pl so yin info akone ya
	// console.log(this); //info yk a di ka main ele ya
	// console.log(e.srcElement);	//tutu pl

	// const currenttime = e.target.currentTime;
	// const duration = e.target.duration;
	// const progresspercent = (currenttime / duration) * 100;
	// progress.style.width = `${progresspercent}%`;


	// Method 3 e.target nk pyy chin tk object key yel,variable name yel ka tu ya ml
	// const {currentTime} = e.target;
	// const {duration} = e.target;
	// const progresspercent = (currentTime / duration) * 100;
	// progress.style.width = `${progresspercent}%`;

	// Method 4 m3 nk tutu pl
	const {currentTime,duration} = e.target; //ass operator lo pat lel lote sg pyy dl
	const progresspercent = (currentTime / duration) * 100;
	progress.style.width = `${progresspercent}%`;


}

// Time Play and Stop Update
audio.addEventListener('timeupdate',updateprogress);	//first para ka time event

//Click on progress bar
progresscontainer.addEventListener('click',setprogress);

// set progress bar
function setprogress(e){
	// console.log('hay');
	// console.log(e.target);


	const width = e.target.clientWidth;	//ele yk width ko lo chin yin
	// console.log(width);

	const clickx = e.offsetX;
	// console.log(clickx);

	const duration = audio.duration;
	// console.log(duration);

		//line 135
	audio.currentTime = (clickx / width) * duration;	//click lote dk width ko T , 1 khu lone yk width nk srr, time ya chin toz duration nk mhyout
}


//song end
audio.addEventListener('ended',nextsong);
// audio.addEventListener('ended', ()=>nextsong());