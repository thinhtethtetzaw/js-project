// UI 
const container = document.querySelector('.container');


// source.unsplash.com/random/200x200

const url = 'https://source.unsplash.com/random/';
const rows = 10;

for(let i = 0; i < rows * 3; i++){
    const img = document.createElement('img');

    img.src = `${url}${getrandomsize()}`;

    container.appendChild(img);
    // console.log(img)
}

function getrandomnum(){
    return Math.floor(Math.random() * 10) + 300;
}
// console.log(getrandomnum()); 

function getrandomsize(){
    return `${getrandomnum()} x ${getrandomnum()}`;
}
// console.log(getrandomsize());
