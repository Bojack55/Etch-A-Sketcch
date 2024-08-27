function createGrid(size) {
    const container = document.querySelector('.container');
    container.innerHTML='';

   
    for (let i=0 ; i< size*size ; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width=`calc(700px/${size})`;
        square.style.height=`calc(400px/${size})`;
        square.style.opacity=0
        square.addEventListener('mouseover', changeColor);
        container.appendChild(square);
    }
}
function changeColor(event){
    const square= event.target;
    let currentOpacity = parseFloat(event.target.style.opacity);
    if (currentOpacity < 1) {
        currentOpacity += 0.1;
        square.style.opacity = currentOpacity;
        square.style.backgroundColor = currentColor;
    }
}
function getRandomColor() {
    const r = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    return`rgb(${r},${b},${g})`;
}
const resetbtn=document.getElementById('reset');
const colorpick=document.getElementById('colorpicker');

resetbtn.addEventListener('click', () => {
    let size = prompt('enter your grid size (100 max)',16);
    size=Math.min(size,100);
    document.querySelector('.container').innerHTML='';
    createGrid(size);
})
colorpicker.addEventListener('input', (event)=>{
    currentColor=event.target.value;
})
createGrid(16);

