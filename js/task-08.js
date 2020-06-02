const inputRef = document.querySelector('input[type="number"]');
const bntRenderRef = document.querySelector('button[data-action="render"]');
const bntDestroyRef = document.querySelector('button[data-action="destroy"]');
const boxesContainerRef = document.querySelector('#boxes');


bntRenderRef.addEventListener('click', function(){
    const inputValue = Number(inputRef.value);
    createBoxers(inputValue);
});
bntDestroyRef.addEventListener('click', function(){
    destroyBoxes();
})


function createBoxers(amount) {
    const basicSize = 30;
    for (let i = 0; i < amount; i += 1){
        let size = basicSize + i * 10;
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
        boxesContainerRef.append(box);
    }
}

function randomColor () {
    return  Math.floor(Math.random() * 256);
}

function destroyBoxes () {
    boxesContainerRef.innerHTML = '';
}

