// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// let count = 0
// // listen for clicks on the increment button

// function increment(){

// // increment the count variable when the button is clicked

// count = count + 1

// // change the count-el in the HTML to reflect the new count

// document.getElementById("count-el").innerText = 5 //changed 0 to count

// console.log(count)

// }

// let countInner = document.getElementById("count-el")
// let count = 0 

// function increment() {
//     count = count + 1

//     countInner.innerText = count

//     console.log(count)
// }

let counterInner = document.getElementById("count-el") //dont need to add .innerText here because we are targeting the inner already this is an argument in the ""
let count = 0

function increment() {
    count = count + 1

        counterInner.innerText = count

    console.log(count)
}