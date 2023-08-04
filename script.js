const button = document.querySelector('button');
const body = document.querySelector('body');
// const color = ['lavender','plum','green','yellow','purple'];

button.addEventListener('click',changeBg);

// function changeBg(){
//     const colorIndex = parseInt(Math.random()*color.length);
//     body.style.backgroundColor=color[colorIndex]
// }

function changeBg(){
    var x = Math.floor(Math.random()*256);
    var y = Math.floor(Math.random()*256);
    var z = Math.floor(Math.random()*256);
    var bgColor = `rgb(${x},${y},${z})`;
    // console.log(bg);
    document.body.style.backgroundColor=bgColor;
}


