 const colorBtn = document.querySelector('.colorBtn');
 const bodyBg = document.querySelector('body');



const colors = ['yellow', 'green', 'blue', 'purple'];

colorBtn.addEventListener("click", changeColor);

function changeColor (){
    //bodyBg.style.background = colors[1];
    
    let random = Math.floor(Math.random()*colors.length);
    bodyBg.style.background = colors[random];
    console.log(colors.length);
}