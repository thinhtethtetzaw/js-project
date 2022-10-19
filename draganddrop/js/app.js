// UI 
const picdiv = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

picdiv.addEventListener('dragstart',dragstart);
picdiv.addEventListener('dragend',dragend);

//Drag Start
function dragstart(){
    // console.log('dragstart is working');

    // this.classList.add('hold')

    // this.classList.add('hold')

    this.className += " hold"; 

    setTimeout(()=>{
        this.className="invisible";
    },0);
}

// console.log(empties)

// for each loop
// empties.forEach(empty=>{
//     // console.log(empty);

//     empty.addEventListener('dragover',dragover);
//     empty.addEventListener('dragenter',dragenter);
//     empty.addEventListener('dragleave',dragleave);
//     empty.addEventListener('drop',dragdrop);

// });


// for of loop 
// ES6 .can looping object5-specific iterator value 
for(const empty of empties){
    // console.log(empty)
    empty.addEventListener('dragover',dragover);
    empty.addEventListener('dragenter',dragenter);
    empty.addEventListener('dragleave',dragleave);
    empty.addEventListener('drop',dragdrop);
}


// for in loop //numberic twy ko pl return pyn pyy nai dl
// numberable property name of an object 
// for(const empty in empties){
//     console.log(empty)
// }





// Drag End 
function dragend(){
    // console.log('dragend is working');

    this.className = "fill";
}


function dragover(e){
    // console.log('drag over');

    e.preventDefault();
}


function dragenter(e){
    // console.log('drag enter');
    e.preventDefault();
    
    this.className += " hovered";

}


function dragleave(e){
    // console.log('drag leave');
    e.preventDefault();

    this.className = "empty";

}


function dragdrop(e){
    // console.log('drag drop');

    this.className="empty";
    this.appendChild(picdiv);

}