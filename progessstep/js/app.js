// UI 
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

const prev = document.getElementById('prev'),
      next = document.getElementById('next');

let currentactive = 1;

next.addEventListener('click', ()=>{
    if(currentactive < circles.length){
        currentactive++;
    }

    update();

});

prev.addEventListener('click', ()=>{
    if(currentactive > 1){
        currentactive--;
    }

    update();

});

function update(){
    circles.forEach((circle,index)=>{
        if(index < currentactive){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }   
    })
    const actives = document.querySelectorAll('.active');
    progress.style.width = `${((actives.length - 1) / (circles.length - 1)) * 100}%`

    if(actives.length === 1){
        prev.disabled = true;
    } else {
        prev.disabled = false;
    }
}