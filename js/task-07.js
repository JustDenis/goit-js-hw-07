const inputRangeRef = document.querySelector('#font-size-control');
const modifiedTextRef = document.querySelector('#text');


inputRangeRef.addEventListener('input', handleChangeRange);

function handleChangeRange(){
    const inputValue = inputRangeRef.value;
    modifiedTextRef.style.fontSize = `${inputValue}px`;
}