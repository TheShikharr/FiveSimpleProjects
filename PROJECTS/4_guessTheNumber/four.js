const numBox = document.querySelector("#num-box")
const guessButton = document.querySelector("button")
const disMessage = document.querySelector(".display-message")


guessButton.addEventListener('click', ()=> {
    const min = 1;
    const max = 10;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    const guessButtonInNumber = Number(numBox.value);

    
    if (guessButtonInNumber > 10 || guessButtonInNumber < 0){
    disMessage.classList.remove("second"); // remove the other class if present
    disMessage.classList.remove("third"); // remove the other class if present
    disMessage.classList.add("first");
    disMessage.textContent = `Please Enter a Number between 1-10`;
    } else if (guessButtonInNumber === randomNumber) {
    disMessage.classList.remove("first"); // remove the other class if present
    disMessage.classList.remove("third"); // remove the other class if present
    disMessage.classList.add("second");
    disMessage.textContent = `Matched Up, COLD Moves Only.`;
    } else {
    disMessage.classList.remove("first"); // remove the other class if present
    disMessage.classList.remove("second"); // remove the other class if present
    disMessage.classList.add("third");
    disMessage.textContent = `OPPS! Try Again :)`;
    }


})



