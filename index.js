const button = document.querySelector("button")
const input = document.querySelectorAll("input")

console.log(input.value)

function logValues() {
    if (input.value === '') {
        console.log("nothing here!")
    } else {
        console.log(input.value)
    }
}