const inputRef = document.querySelector('#name-input');
const userNameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', handeInputName);

function handeInputName(event){
    if(event.target.value === ''){
        userNameRef.textContent = 'незнакомец';
    } else{
        userNameRef.textContent = event.target.value ;
    }
}