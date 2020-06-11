const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', handeInputValidation);

function handeInputValidation() {
  const inputMaxLength = Number(inputRef.dataset.length);
  const userValue = inputRef.value;
//Если следовать условию задания, то получится такой код.
//   userValue.length <= inputMaxLength
//     ? inputRef.classList.add('valid')
//     : inputRef.classList.add('invalid');

// Я немного усовершенствовал код. Сделал так, что если меняется длинна 
// введенного значения, то у нас меняются классы и соответсвенно меняется
// подсветка.
    if( userValue.length < inputMaxLength || userValue.length > inputMaxLength){
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    } 
    if (userValue.length === inputMaxLength){
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
    if(userValue === ''){
        inputRef.classList.remove('valid');
        inputRef.classList.remove('invalid');
    }
}
