// UI 
const range = document.getElementById('range');

range.addEventListener('input',(e)=>{

    // console.log(typeof +e.target.value);
    const getvalue = +e.target.value;
    const label = e.target.nextElementSibling;

    const rangewidth = getComputedStyle(e.target).getPropertyValue('width');    //width yk value ko u pee twet chat pyy
    // console.log(rangewidth);
    // console.log(rangewidth.length);     //300px ka sakalone 5 lone shi dl loh pya

    const labelwidth = getComputedStyle(label).getPropertyValue('width');
    // console.log(labelwidth)
    // console.log(labelwidth.length)

    //px ko phyt
    const numrangewidth = rangewidth.substring(0,rangewidth.length-2);
    // console.log(numrangewidth)

    const numlabelwidth = labelwidth.substring(0,labelwidth.length-2);
    // console.log(numlabelwidth)

    const min = +e.target.min;
    const max = +e.target.max;
    // console.log(min,max)

    const left = getvalue * (numrangewidth / max) - numlabelwidth / 2 + scale(getvalue,min,max,10,-10); //-10 so left mhr po ml right mr kwet ti
    // console.log(left)

    label.style.left = `${left}px`;




    label.innerText = getvalue;

});

const scale = (num,inmin,inmax,outmin,outmax)=>{
    return (num-inmin) * (outmax-outmin) / (inmax-inmin) + outmin;
}