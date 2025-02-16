const copy = document.querySelector(".copy")

console.log(copy)

let password = document.querySelector(".password")

let leng = document.querySelector(".leng")

let rangeinput = document.querySelector(".rangeinput")

const generate = document.querySelector(".generate")

let includeNumbers = false

let includeLow = false

let includeUpp = false

let includeSymbols = false

const numbers = document.querySelector(".numbers")

const uppcase = document.querySelector(".uppcase")

const lowcase = document.querySelector(".lowcase")

const symbols = document.querySelector(".symbols")

copy.addEventListener("click", () => {
    console.log(password.textContent)
    navigator.clipboard.writeText(password.textContent)
})



rangeinput.addEventListener("input", () => {

    console.log("0" + rangeinput.value);
    leng.textContent = rangeinput.value;


})

function generateRandomString(length) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // All possible letters
    let randomString = '';
    let result = "abcdefghijklmnopqrstuvwxyz"
    let uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let numerChars = '123456789'
    let symbolchars = "!@#$%^&*+?"

    if (includeNumbers == true) {

        result = result + numerChars;
    }

    if (includeLow == true) {

        result = result;
    }

    if (includeSymbols == true) {

        result = result + symbolchars;
    }

    if (includeUpp == true) {

        result = result + uppercaseCharacters;
    }




    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * result.length); // Random index
        randomString += result[randomIndex]; // Add random letter to the string
    }

    return randomString;
}

// Example usage

let randomString = generateRandomString(8);

console.log(randomString)

generate.addEventListener("click", () => {

    let randomString = generateRandomString(rangeinput.value);
    console.log(randomString)
    password.textContent = randomString
})


numbers.addEventListener("input", () => {
    if (numbers.checked) {
        includeNumbers = true

    } else {
        includeNumbers = false
    }

    console.log(includeNumbers)

})

uppcase.addEventListener("input", () => {
    if (uppcase.checked) {
        includeUpp = true

    } else {
        includeUpp = false
    }


})

lowcase.addEventListener("input", () => {
    if (lowcase.checked) {
        includeLow = true

    } else {
        includeLow = false
    }



})

symbols.addEventListener("input", () => {
    if (symbols.checked) {
        includeSymbols = true

    } else {
        includeSymbols = false
    }

    console.log(includeSymbols)

})






function checkDisable() {
    if (!includeNumbers && !includeSymbols && !includeLow && !includeUpp) {
        generate.setAttribute("disabled", true)
    } else {
        generate.setAttribute("disabled", false)
    }
}