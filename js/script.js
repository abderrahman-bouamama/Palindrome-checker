const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const divResult = document.getElementById("result");

checkButton.addEventListener("click", () => {
    const inputValue = textInput.value.trim();


    if (inputValue === "") {
        alert("Please input a value");
        return;
    }


    const cleanedInput = inputValue.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');


    if (isPalindrome) {
        divResult.textContent = `${inputValue} is a palindrome`;
    } else {
        divResult.textContent = `${inputValue} is not a palindrome`;
    }
});
