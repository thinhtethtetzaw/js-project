// UI 
const boxes = document.querySelectorAll('.box');
// console.log(boxes);

checkboxes();

window.addEventListener('scroll',checkboxes);

function checkboxes(){
    // console.log('hay');
    let innerheight = window.innerHeight / 5 * 4;   //photo pyn hwet dr ko myin ya ag 2 nk srr tok screensize tayy pee pone paw //vh yk scroll value
    // console.log(innerHeight)

    boxes.forEach(box=>{
        // console.log(box)

        const boxtop = box.getBoundingClientRect().top; //element yk htate hti scroll value
        // console.log(boxtop) 
        if(boxtop < innerheight){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }




    });

}