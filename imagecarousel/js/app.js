// UI 
const imgcontainer = document.getElementById('img-container');
const img = document.querySelectorAll('#img-container img');
const leftbtn = document.getElementById('left'),
    rightbtn = document.getElementById('right');

let idx = 0;

leftbtn.addEventListener('click',()=>{
    idx--;
    changeimage();
    // console.log(idx);
    resetinterval();

});

rightbtn.addEventListener('click',()=>{
    idx++;
    changeimage();
    // console.log(idx);
    resetinterval();
});

function changeimage(){
    if(idx > img.length - 1){
        idx = 0;
    }else if(idx < 0){
        idx = img.length - 1;
    }

    imgcontainer.style.transform = `translate(${-idx * 500}px)`;
}

function imgrun(){
    idx++;
    changeimage();
}

let interval = setInterval(imgrun,2000);

function resetinterval(){
    clearInterval(interval);
    interval = setInterval(imgrun,2000);
}