let quoteID = document.getElementById("quote")
let authorID = document.getElementById("quoteAuthor")

// let quote1 = "Once you start thinking more about where you want to be than about making the best product, you’re screwed."
// let author1 = "- Linus Torvalds" 
// let quote2 = "When exposing a crime is treated as commiting a crime, you are being ruled by criminals."
// let author2 = "- Edward Snowden" 
// let quote3 = "An idiot admires complexity, a genius admires simplicity."
// let author3 = "- Terry A. Davis"

let quotes = [
    "Once you start thinking more about where you want to be than about making the best product, you’re screwed.",
    "When exposing a crime is treated as commiting a crime, you are being ruled by criminals.",
    "An idiot admires complexity, a genius admires simplicity."
]
let authors = [
    "- Linus Torvalds",
    "- Edward Snowden",
    "- Terry A. Davis"
]

function getRandNum(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
number = getRandNum(3)

quoteID.innerText = quotes[number]
authorID.innerText = authors[number]
// if (number == 0 ) {
//     quoteID.innerText = quotes[0]
//     authorID.innerHTML = authors[0]
// } else if (number == 1) {
//     quoteID.innerHTML = quotes[1]
//     authorID.innerHTML = authors[1]
// } else if (number == 2) {
//     quoteID.innerHTML = quotes[2]
//     authorID.innerHTML = authors[2]
// }

